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
    
    while (currentElement) {
      const computedStyle = window.getComputedStyle(currentElement);
      const backgroundColor = computedStyle.backgroundColor;
      
      // Check if color is not transparent
      if (backgroundColor && 
          backgroundColor !== 'rgba(0, 0, 0, 0)' && 
          backgroundColor !== 'transparent' &&
          backgroundColor !== 'initial' &&
          backgroundColor !== 'inherit') {
        return backgroundColor;
      }
      
      currentElement = currentElement.parentElement;
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
      
      // Get element at header position
      headerElement.style.pointerEvents = 'none';
      const elementBelow = document.elementFromPoint(
        headerRect.left + headerRect.width / 2,
        headerRect.top + headerRect.height / 2
      ) as HTMLElement;
      headerElement.style.pointerEvents = '';

      if (!elementBelow) {
        setContrast({ textColor: 'black', isLight: true });
        return;
      }

      // Get background color
      let backgroundColor = getBackgroundColor(elementBelow);
      let backgroundRgb = parseRgbColor(backgroundColor);

      // Check for background image
      const computedStyle = window.getComputedStyle(elementBelow);
      const backgroundImage = computedStyle.backgroundImage;
      
      if (backgroundImage && backgroundImage !== 'none') {
        try {
          backgroundRgb = await getImageAverageColor(elementBelow);
        } catch (error) {
          console.warn('Image color sampling failed:', error);
        }
      }

      // Calculate brightness using YIQ formula
      const brightness = getYIQBrightness(backgroundRgb[0], backgroundRgb[1], backgroundRgb[2]);
      const isLight = brightness >= 128;
      const textColor = isLight ? 'black' : 'white';

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
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateContrast, 16); // ~60fps
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