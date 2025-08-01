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
          type: "yandex#map",
        });

        // Добавляем черно-белый стиль карты
        map.options.set("restrictMapArea", false);
        map.options.set("suppressMapOpenBlock", true);

        mapInstanceRef.current = map;

        // Создаем стандартную цветную метку
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
          {
            preset: "islands#redDotIcon",
            iconColor: "#E6B319", // жёлтый цвет метки
          },
        );

        map.geoObjects.add(placemark);

        // Применяем черно-белый фильтр к карте и создаем CSS для цветных меток
        map.events.add("ready", function () {
          // Создаем CSS стиль для цветных меток
          const style = document.createElement("style");
          style.textContent = `
            .yandex-map-container {
              filter: grayscale(100%);
            }
            .yandex-map-container [class*="placemark"], 
            .yandex-map-container [class*="balloon"],
            .yandex-map-container [class*="icon"] {
              filter: grayscale(0%) !important;
            }
            /* Специфичные селекторы для Яндекс.Карт */
            .yandex-map-container ymaps[class*="placemark"],
            .yandex-map-container ymaps[class*="balloon"],
            .yandex-map-container [class*="ymaps"][class*="placemark"],
            .yandex-map-container [class*="ymaps"][class*="balloon"] {
              filter: grayscale(0%) !important;
            }
          `;
          document.head.appendChild(style);

          // Применяем класс к контейнеру карты
          const mapContainer = mapRef.current;
          if (mapContainer) {
            mapContainer.classList.add("yandex-map-container");
          }

          // Дополнительно пытаемся найти и перекрасить метки
          setTimeout(() => {
            const allElements = mapContainer?.querySelectorAll("*");
            allElements?.forEach((element) => {
              const className = element.className;
              if (
                typeof className === "string" &&
                (className.includes("placemark") ||
                  className.includes("balloon") ||
                  className.includes("icon"))
              ) {
                element.style.filter = "grayscale(0%) !important";
              }
            });
          }, 1000);
        });

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
