import { useEffect, useState, useRef } from 'react';

interface ContrastHookOptions {
  headerSelector: string;
  contentSelector?: string;
  threshold?: number;
}

interface ContrastState {
  textColor: 'light' | 'dark';
  backgroundColor: string;
}

export function useDynamicContrast(options: ContrastHookOptions) {
  const [contrastState, setContrastState] = useState<ContrastState>({
    textColor: 'dark',
    backgroundColor: '#ffffff'
  });
  
  const headerRef = useRef<HTMLElement | null>(null);
  const lastColorRef = useRef<string>('#ffffff');
  const rafIdRef = useRef<number | null>(null);

  // YIQ luminance formula for better contrast detection
  const getContrastColor = (hexColor: string): 'light' | 'dark' => {
    // Remove # if present
    const hex = hexColor.replace('#', '');
    
    // Convert 3-char hex to 6-char
    const fullHex = hex.length === 3 
      ? hex.split('').map(char => char + char).join('')
      : hex;
    
    // Convert to RGB
    const r = parseInt(fullHex.substring(0, 2), 16);
    const g = parseInt(fullHex.substring(2, 4), 16);
    const b = parseInt(fullHex.substring(4, 6), 16);
    
    // YIQ formula - weights based on human vision sensitivity
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    
    return yiq >= (options.threshold || 128) ? 'dark' : 'light';
  };

  // Convert RGB string to hex
  const rgbToHex = (rgb: string): string => {
    if (rgb.startsWith('#')) return rgb;
    
    const values = rgb.match(/\d+/g);
    if (!values || values.length < 3) return '#ffffff';
    
    return '#' + values.slice(0, 3).map(val => {
      const hex = parseInt(val).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  };

  // Get the effective background color under the header
  const getBackgroundColorUnderHeader = (): string => {
    if (!headerRef.current) return '#ffffff';

    const headerRect = headerRef.current.getBoundingClientRect();
    const centerX = headerRect.left + headerRect.width / 2;
    const centerY = headerRect.top + headerRect.height / 2;
    
    // Temporarily hide header to get element behind it
    const originalPointerEvents = headerRef.current.style.pointerEvents;
    headerRef.current.style.pointerEvents = 'none';
    
    const elementBehind = document.elementFromPoint(centerX, centerY);
    
    // Restore header pointer events
    headerRef.current.style.pointerEvents = originalPointerEvents;
    
    if (!elementBehind) return '#ffffff';

    // Walk up the DOM tree to find the first non-transparent background
    let currentElement: Element | null = elementBehind;
    while (currentElement && currentElement !== document.body) {
      const computedStyle = window.getComputedStyle(currentElement);
      const bgColor = computedStyle.backgroundColor;
      
      // Check if we have a non-transparent background
      if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
        return rgbToHex(bgColor);
      }
      
      // Check background image with solid colors
      const bgImage = computedStyle.backgroundImage;
      if (bgImage && bgImage !== 'none') {
        // For gradients, we'll extract the dominant color (simplified approach)
        if (bgImage.includes('gradient')) {
          const colorMatch = bgImage.match(/rgb\([^)]+\)|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/);
          if (colorMatch) {
            return rgbToHex(colorMatch[0]);
          }
        }
      }
      
      currentElement = currentElement.parentElement;
    }
    
    return '#ffffff'; // Default to white if no background found
  };

  // Update contrast with performance optimization
  const updateContrast = () => {
    const backgroundColor = getBackgroundColorUnderHeader();
    
    // Only update if color actually changed to avoid unnecessary re-renders
    if (backgroundColor !== lastColorRef.current) {
      const textColor = getContrastColor(backgroundColor);
      
      setContrastState({
        textColor,
        backgroundColor
      });
      
      lastColorRef.current = backgroundColor;
    }
  };

  // Throttled scroll handler using requestAnimationFrame
  const handleScroll = () => {
    if (rafIdRef.current) return;
    
    rafIdRef.current = requestAnimationFrame(() => {
      updateContrast();
      rafIdRef.current = null;
    });
  };

  useEffect(() => {
    // Find header element
    headerRef.current = document.querySelector(options.headerSelector);
    
    if (!headerRef.current) {
      console.warn(`Header element not found: ${options.headerSelector}`);
      return;
    }

    // Initial contrast calculation
    updateContrast();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also listen for resize events
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [options.headerSelector]);

  return contrastState;
}