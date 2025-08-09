import { useState, useEffect, useCallback } from 'react';

interface ColorInfo {
  isDark: boolean;
  textColor: string;
  contrastRatio: number;
}

export function useDynamicHeaderColor() {
  const [colorInfo, setColorInfo] = useState<ColorInfo>({
    isDark: false,
    textColor: 'text-primary',
    contrastRatio: 0
  });

  // Функция для получения RGB значений из CSS цвета
  const getRGBFromColor = useCallback((color: string): [number, number, number] => {
    // Создаем временный элемент для получения computed color
    const temp = document.createElement('div');
    temp.style.color = color;
    temp.style.display = 'none';
    document.body.appendChild(temp);
    
    const computedColor = window.getComputedStyle(temp).color;
    document.body.removeChild(temp);
    
    // Парсим rgb(r, g, b) или rgba(r, g, b, a)
    const match = computedColor.match(/rgba?\(([^)]+)\)/);
    if (match) {
      const values = match[1].split(',').map(v => parseInt(v.trim()));
      return [values[0] || 0, values[1] || 0, values[2] || 0];
    }
    
    return [255, 255, 255]; // fallback to white
  }, []);

  // Функция для вычисления относительной яркости
  const getLuminance = useCallback((r: number, g: number, b: number): number => {
    // Нормализуем значения
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }, []);

  // Функция для вычисления коэффициента контрастности
  const getContrastRatio = useCallback((lum1: number, lum2: number): number => {
    const lighter = Math.max(lum1, lum2);
    const darker = Math.min(lum1, lum2);
    return (lighter + 0.05) / (darker + 0.05);
  }, []);

  // Функция для определения среднего цвета элементов под хедером
  const getBackgroundColorUnderHeader = useCallback((): ColorInfo => {
    const header = document.querySelector('header');
    if (!header) return { isDark: false, textColor: 'text-primary', contrastRatio: 0 };

    const headerRect = header.getBoundingClientRect();
    const samplePoints = [
      { x: headerRect.left + headerRect.width * 0.2, y: headerRect.bottom },
      { x: headerRect.left + headerRect.width * 0.5, y: headerRect.bottom },
      { x: headerRect.left + headerRect.width * 0.8, y: headerRect.bottom }
    ];

    let totalR = 0, totalG = 0, totalB = 0;
    let validSamples = 0;

    // Временно скрываем хедер для получения цвета фона
    const originalVisibility = header.style.visibility;
    header.style.visibility = 'hidden';

    for (const point of samplePoints) {
      const element = document.elementFromPoint(point.x, point.y);
      if (element && element !== header && !header.contains(element)) {
        const styles = window.getComputedStyle(element);
        const bgColor = styles.backgroundColor;
        
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          const [r, g, b] = getRGBFromColor(bgColor);
          totalR += r;
          totalG += g;
          totalB += b;
          validSamples++;
        } else {
          // Если фон прозрачный, ищем родительские элементы
          let parent = element.parentElement;
          while (parent && validSamples === 0) {
            const parentStyles = window.getComputedStyle(parent);
            const parentBgColor = parentStyles.backgroundColor;
            
            if (parentBgColor && parentBgColor !== 'rgba(0, 0, 0, 0)' && parentBgColor !== 'transparent') {
              const [r, g, b] = getRGBFromColor(parentBgColor);
              totalR += r;
              totalG += g;
              totalB += b;
              validSamples++;
              break;
            }
            parent = parent.parentElement;
          }
        }
      }
    }

    // Восстанавливаем видимость хедера
    header.style.visibility = originalVisibility;

    if (validSamples === 0) {
      // Fallback к цвету body
      const bodyStyles = window.getComputedStyle(document.body);
      const bodyBgColor = bodyStyles.backgroundColor;
      const [r, g, b] = getRGBFromColor(bodyBgColor || '#ffffff');
      totalR = r;
      totalG = g;
      totalB = b;
      validSamples = 1;
    }

    // Вычисляем средний цвет
    const avgR = Math.round(totalR / validSamples);
    const avgG = Math.round(totalG / validSamples);
    const avgB = Math.round(totalB / validSamples);

    // Вычисляем яркость фона
    const backgroundLuminance = getLuminance(avgR, avgG, avgB);
    
    // Определяем яркость белого и черного текста
    const whiteLuminance = 1; // Белый цвет имеет максимальную яркость
    const blackLuminance = 0; // Черный цвет имеет минимальную яркость

    // Вычисляем контрастность для белого и черного текста
    const whiteContrast = getContrastRatio(backgroundLuminance, whiteLuminance);
    const blackContrast = getContrastRatio(backgroundLuminance, blackLuminance);

    // Выбираем цвет с лучшей контрастностью
    const useWhiteText = whiteContrast > blackContrast;
    const bestContrast = Math.max(whiteContrast, blackContrast);

    return {
      isDark: backgroundLuminance < 0.5,
      textColor: useWhiteText ? 'text-white' : 'text-gray-900',
      contrastRatio: bestContrast
    };
  }, [getRGBFromColor, getLuminance, getContrastRatio]);

  // Функция для обновления цвета хедера
  const updateHeaderColor = useCallback(() => {
    const newColorInfo = getBackgroundColorUnderHeader();
    setColorInfo(newColorInfo);
  }, [getBackgroundColorUnderHeader]);

  useEffect(() => {
    // Начальное определение цвета
    const initialUpdate = () => {
      setTimeout(updateHeaderColor, 100); // Небольшая задержка для рендеринга
    };

    initialUpdate();

    // Обновление при скролле
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateHeaderColor();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Обновление при изменении размера окна
    const handleResize = () => {
      setTimeout(updateHeaderColor, 100);
    };

    // Обновление при смене темы
    const handleThemeChange = () => {
      setTimeout(updateHeaderColor, 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Слушаем изменения DOM
    const observer = new MutationObserver(() => {
      setTimeout(updateHeaderColor, 100);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style']
    });

    // Слушаем изменения темы
    const themeObserver = new MutationObserver(handleThemeChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      themeObserver.disconnect();
    };
  }, [updateHeaderColor]);

  return {
    textColor: colorInfo.textColor,
    isDark: colorInfo.isDark,
    contrastRatio: colorInfo.contrastRatio,
    updateColor: updateHeaderColor
  };
}