import { useState, useEffect, useCallback } from 'react';

interface ContrastResult {
  textColor: 'white' | 'black';
  isLight: boolean;
}

export function useContrastDetection(elementRef: React.RefObject<HTMLElement>) {
  const [contrast, setContrast] = useState<ContrastResult>({ textColor: 'black', isLight: true });

  // YIQ formula for brightness calculation (industry standard)
  const getYIQBrightness = (r: number, g: number, b: number): number => {
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  // Parse RGB color string to values
  const parseRgbColor = (colorString: string): [number, number, number] => {
    const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
    if (!match) return [255, 255, 255]; // Default to white
    return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
  };

  // Get background color by traversing DOM tree
  const getBackgroundColor = (element: HTMLElement): string => {
    let currentElement: HTMLElement | null = element;
    let depth = 0;
    const maxDepth = 10; // Prevent infinite loops
    
    while (currentElement && depth < maxDepth) {
      const computedStyle = window.getComputedStyle(currentElement);
      const backgroundColor = computedStyle.backgroundColor;
      
      // Check if color is not transparent
      if (backgroundColor && 
          backgroundColor !== 'rgba(0, 0, 0, 0)' && 
          backgroundColor !== 'transparent' &&
          backgroundColor !== 'initial' &&
          backgroundColor !== 'inherit') {
        
        // Parse the alpha value for rgba colors
        const rgbaMatch = backgroundColor.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
        if (rgbaMatch) {
          const alpha = parseFloat(rgbaMatch[4]);
          // Only consider colors with sufficient opacity
          if (alpha >= 0.1) {
            return backgroundColor;
          }
        } else {
          // RGB color without alpha
          return backgroundColor;
        }
      }
      
      currentElement = currentElement.parentElement;
      depth++;
    }
    
    return 'rgb(255, 255, 255)'; // Default to white
  };

  // Sample background image colors using canvas
  const getImageAverageColor = async (element: HTMLElement): Promise<[number, number, number]> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      if (!ctx) {
        resolve([255, 255, 255]);
        return;
      }
      
      img.onload = function() {
        canvas.width = 50; // Sample size for performance
        canvas.height = 50;
        
        try {
          ctx.drawImage(img, 0, 0, 50, 50);
          const imageData = ctx.getImageData(0, 0, 50, 50);
          const data = imageData.data;
          
          let r = 0, g = 0, b = 0, count = 0;
          
          // Sample every 4th pixel for performance
          for (let i = 0; i < data.length; i += 16) {
            const alpha = data[i + 3];
            if (alpha > 128) { // Only count non-transparent pixels
              r += data[i];
              g += data[i + 1];
              b += data[i + 2];
              count++;
            }
          }
          
          if (count > 0) {
            resolve([
              Math.round(r / count),
              Math.round(g / count), 
              Math.round(b / count)
            ]);
          } else {
            resolve([255, 255, 255]);
          }
        } catch (error) {
          console.warn('Canvas image sampling failed:', error);
          resolve([255, 255, 255]);
        }
      };
      
      img.onerror = () => resolve([255, 255, 255]);
      
      const computedStyle = window.getComputedStyle(element);
      const backgroundImage = computedStyle.backgroundImage;
      const urlMatch = backgroundImage.match(/url\(["']?([^"']*)["']?\)/);
      
      if (urlMatch && urlMatch[1]) {
        img.crossOrigin = 'anonymous';
        img.src = urlMatch[1];
      } else {
        resolve([255, 255, 255]);
      }
    });
  };

  // Calculate optimal text color based on background
  const calculateTextColor = useCallback(async () => {
    if (!elementRef.current) return;

    try {
      // Get the element behind the header by temporarily hiding it
      const headerElement = elementRef.current;
      const headerRect = headerElement.getBoundingClientRect();
      
      // Sample multiple points across the header for better accuracy
      const samplePoints = [
        { x: headerRect.left + headerRect.width * 0.25, y: headerRect.top + headerRect.height * 0.5 },
        { x: headerRect.left + headerRect.width * 0.5, y: headerRect.top + headerRect.height * 0.5 },
        { x: headerRect.left + headerRect.width * 0.75, y: headerRect.top + headerRect.height * 0.5 },
      ];

      let totalBrightness = 0;
      let validSamples = 0;

      // Temporarily hide header to sample background
      headerElement.style.pointerEvents = 'none';
      headerElement.style.visibility = 'hidden';

      for (const point of samplePoints) {
        const elementBelow = document.elementFromPoint(point.x, point.y) as HTMLElement;
        
        if (elementBelow && elementBelow !== headerElement) {
          // Get background color from the element
          let backgroundColor = getBackgroundColor(elementBelow);
          let backgroundRgb = parseRgbColor(backgroundColor);

          // Check for background image
          const computedStyle = window.getComputedStyle(elementBelow);
          const backgroundImage = computedStyle.backgroundImage;
          
          if (backgroundImage && backgroundImage !== 'none') {
            try {
              backgroundRgb = await getImageAverageColor(elementBelow);
            } catch (error) {
              // Use computed background color as fallback
              console.warn('Image sampling failed, using background color');
            }
          }

          // Calculate brightness using YIQ formula
          const brightness = getYIQBrightness(backgroundRgb[0], backgroundRgb[1], backgroundRgb[2]);
          totalBrightness += brightness;
          validSamples++;
        }
      }

      // Restore header visibility
      headerElement.style.pointerEvents = '';
      headerElement.style.visibility = '';

      if (validSamples === 0) {
        setContrast({ textColor: 'black', isLight: true });
        return;
      }

      // Average brightness across all sample points
      const averageBrightness = totalBrightness / validSamples;
      const isLight = averageBrightness >= 128;
      const textColor = isLight ? 'black' : 'white';

      // Debug logging
      console.log(`Contrast Detection: brightness=${averageBrightness.toFixed(1)}, samples=${validSamples}, textColor=${textColor}`);

      setContrast({ textColor, isLight });
    } catch (error) {
      console.warn('Contrast detection failed:', error);
      setContrast({ textColor: 'black', isLight: true });
    }
  }, [elementRef]);

  // Set up observers and event listeners
  useEffect(() => {
    const updateContrast = () => {
      requestAnimationFrame(calculateTextColor);
    };

    // Initial calculation
    updateContrast();

    // Update on scroll with throttling
    let scrollTimeout: NodeJS.Timeout;
    let isScrolling = false;
    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
          updateContrast();
          isScrolling = false;
        });
      }
    };

    // Update on resize
    const handleResize = () => {
      updateContrast();
    };

    // Observe DOM changes that might affect background
    const observer = new MutationObserver(() => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateContrast, 100);
    });

    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['style', 'class'],
      childList: true
    });

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(scrollTimeout);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateTextColor]);

  return contrast;
}