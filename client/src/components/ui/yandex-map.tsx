import { useEffect, useRef, useState } from "react";

interface YandexMapProps {
  address: string;
  className?: string;
}

declare global {
  interface Window {
    ymaps: any;
  }
}

export default function YandexMap({
  address,
  className = "w-full h-64",
}: YandexMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Получаем API ключ с сервера
    const fetchApiKey = async () => {
      try {
        const response = await fetch("/api/yandex-maps-key");
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to get API key");
        }
        return data.apiKey;
      } catch (error) {
        console.error("Error fetching API key:", error);
        throw error;
      }
    };

    // Загружаем Яндекс.Карты API
    const loadYandexMaps = (apiKey: string) => {
      return new Promise((resolve, reject) => {
        if (window.ymaps) {
          resolve(window.ymaps);
          return;
        }

        const script = document.createElement("script");
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
        script.onload = () => {
          window.ymaps.ready(() => {
            resolve(window.ymaps);
          });
        };
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initializeMap = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const apiKey = await fetchApiKey();
        const ymaps: any = await loadYandexMaps(apiKey);

        if (!mapRef.current || mapInstanceRef.current) return;

        // Координаты La Villa Pine
        const coords = [44.496225, 40.165312];

        // Создаем карту с минимальными элементами управления
        const map = new ymaps.Map(mapRef.current, {
          center: coords,
          zoom: 13,
          controls: ["zoomControl"], // Только зум
          type: "yandex#map"
        });

        // Добавляем черно-белый стиль карты
        map.options.set('restrictMapArea', false);
        map.options.set('suppressMapOpenBlock', true);
        
        // Применяем черно-белый фильтр к карте
        const mapContainer = mapRef.current;
        if (mapContainer) {
          mapContainer.style.filter = 'grayscale(100%)';
        }

        mapInstanceRef.current = map;

        // Создаем кастомную цветную метку с SVG иконкой
        const customIcon = {
          iconLayout: 'default#image',
          iconImageHref: 'data:image/svg+xml;base64,' + btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
              <circle cx="12" cy="12" r="10" fill="#D4AF37" stroke="#ffffff" stroke-width="2"/>
              <circle cx="12" cy="12" r="4" fill="#ffffff"/>
            </svg>
          `),
          iconImageSize: [32, 32],
          iconImageOffset: [-16, -16]
        };

        const placemark = new ymaps.Placemark(
          coords,
          {
            balloonContent: `
              <strong>La Villa Pine</strong><br>
              ${address}<br>
              <small>Гостевые дома в стиле лофт</small>
            `,
            hintContent: "La Villa Pine",
          },
          customIcon
        );

        map.geoObjects.add(placemark);
        
        // Убираем серый фильтр с элемента метки после добавления
        setTimeout(() => {
          const placemarkElement = placemark.getElement();
          if (placemarkElement) {
            placemarkElement.style.filter = 'none';
            // Также убираем фильтр с дочерних элементов
            const childElements = placemarkElement.querySelectorAll('*');
            childElements.forEach(child => {
              child.style.filter = 'none';
            });
          }
        }, 100);

        setIsLoading(false);
      } catch (error) {
        console.error("Ошибка загрузки Яндекс.Карт:", error);
        setError("Ошибка загрузки карты");
        setIsLoading(false);
      }
    };

    initializeMap();

    // Очистка при размонтировании
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, [address]);

  if (error) {
    return (
      <div
        className={`${className} rounded-lg bg-gray-100 flex items-center justify-center`}
      >
        <div className="text-center text-gray-600">
          <i className="fas fa-exclamation-triangle text-2xl mb-2"></i>
          <p className="font-semibold">Ошибка загрузки карты</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 ${className} rounded-lg bg-gray-100 flex items-center justify-center z-10`}
        >
          <div className="text-center text-gray-600">
            <i className="fas fa-spinner fa-spin text-2xl mb-2"></i>
            <p className="font-semibold">Загрузка карты...</p>
          </div>
        </div>
      )}
      <div
        ref={mapRef}
        className={`${className} rounded-lg`}
        style={{ minHeight: "256px" }}
      />
    </div>
  );
}
