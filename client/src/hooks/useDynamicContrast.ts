import { useEffect, useState, useRef } from 'react';

interface ContrastHookOptions {
  headerSelector: string;
  contentSelector?: string;
  threshold?: number;
  currentPath?: string;
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
    
    // Handle rgba values as well
    const values = rgb.match(/\d+/g);
    if (!values || values.length < 3) return '#333333'; // Default to dark
    
    const hex = '#' + values.slice(0, 3).map(val => {
      const hex = parseInt(val).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
    
    // console.log('Converted RGB to hex:', rgb, '->', hex);
    return hex;
  };

  // Get the effective background color under the header
  const getBackgroundColorUnderHeader = (): string => {
    if (!headerRef.current) return '#333333'; // Default to dark for better contrast

    const headerRect = headerRef.current.getBoundingClientRect();
    const centerX = headerRect.left + headerRect.width / 2;
    const centerY = headerRect.top + headerRect.height / 2;
    
    // Temporarily hide header to get element behind it
    const originalPointerEvents = headerRef.current.style.pointerEvents;
    headerRef.current.style.pointerEvents = 'none';
    
    const elementBehind = document.elementFromPoint(centerX, centerY);
    
    // Restore header pointer events
    headerRef.current.style.pointerEvents = originalPointerEvents;
    
    if (!elementBehind) return '#333333';

    // Special case: Check if we're in the StackedAmenities section
    const amenitiesContainer = document.querySelector('[data-testid="stacked-amenities-container"]');
    if (amenitiesContainer) {
      const amenitiesContainerRect = amenitiesContainer.getBoundingClientRect();
      // Check if header is anywhere within the amenities section (from top to bottom)
      if (headerRect.top >= amenitiesContainerRect.top && 
          headerRect.top <= amenitiesContainerRect.bottom) {
        // The entire StackedAmenities section should show black text because:
        // 1. It has a white header background at the top
        // 2. Even when scrolling through cards, the sticky white header element is always behind our main header
        return '#ffffff';
      }
    }

    // Walk up the DOM tree to find the first non-transparent background
    let currentElement: Element | null = elementBehind;
    let detectedColor = '';
    
    while (currentElement && currentElement !== document.body) {
      const computedStyle = window.getComputedStyle(currentElement);
      const bgColor = computedStyle.backgroundColor;
      const bgImage = computedStyle.backgroundImage;
      
      // Debug logging (can be removed in production)
      // console.log('Checking element:', currentElement.tagName, currentElement.className, 'bgColor:', bgColor, 'bgImage:', bgImage);
      
      // Check background image first (more specific)
      if (bgImage && bgImage !== 'none') {
        // For images, assume dark background unless it's clearly a light image
        if (bgImage.includes('url(')) {
          // console.log('Found background image, assuming dark background');
          // Most hero images and carousels are typically dark
          return '#222222';
        }
        // For gradients, extract the dominant color
        if (bgImage.includes('gradient')) {
          const colorMatch = bgImage.match(/rgb\([^)]+\)|rgba\([^)]+\)|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/);
          if (colorMatch) {
            detectedColor = rgbToHex(colorMatch[0]);
            // console.log('Detected gradient color:', detectedColor);
            return detectedColor;
          }
        }
      }
      
      // Check if we have a non-transparent background color
      if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
        // Check if it's a very light semi-transparent background (like overlays)
        if (bgColor.includes('rgba') && (bgColor.includes('0.9') || bgColor.includes('0.8'))) {
          // console.log('Found semi-transparent overlay, checking for background images in hierarchy');
          // This might be a light overlay on top of an image, check up the hierarchy for images
          let parentElement = currentElement?.parentElement;
          let depth = 0;
          while (parentElement && depth < 5) { // Check up to 5 levels up
            const parentStyle = window.getComputedStyle(parentElement);
            if (parentStyle.backgroundImage && parentStyle.backgroundImage !== 'none') {
              // console.log('Found background image in parent hierarchy, assuming dark background');
              return '#222222';
            }
            parentElement = parentElement?.parentElement;
            depth++;
          }
        }
        
        detectedColor = rgbToHex(bgColor);
        // console.log('Detected background color:', detectedColor);
        return detectedColor;
      }
      
      currentElement = currentElement?.parentElement;
    }
    
    // If we reach here, assume dark background for better visibility
    // console.log('No background found, defaulting to dark');
    return '#333333';
  };

  // Update contrast with performance optimization
  const updateContrast = () => {
    const backgroundColor = getBackgroundColorUnderHeader();
    const textColor = getContrastColor(backgroundColor);
    
    // console.log('Background color detected:', backgroundColor, 'Text color should be:', textColor);
    
    // Only update if color actually changed to avoid unnecessary re-renders
    if (backgroundColor !== lastColorRef.current) {
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

    // Initial contrast calculation with delay to ensure DOM is ready
    const initialUpdate = () => {
      setTimeout(() => {
        updateContrast();
      }, options.currentPath ? 200 : 100); // Longer delay for page changes
    };
    
    initialUpdate();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also listen for resize events
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Listen for page visibility changes (when user navigates back to tab)
    window.addEventListener('visibilitychange', initialUpdate);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('visibilitychange', initialUpdate);
      
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [options.headerSelector, options.currentPath]);

  return contrastState;
}