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

        // Создаем карту
        const map = new ymaps.Map(mapRef.current, {
          center: [44.6086, 40.1006], // Примерные координаты Майкопского района
          zoom: 10,
          controls: [
            "zoomControl",
            "searchControl",
            "typeSelector",
            "fullscreenControl",
            "geolocationControl",
          ],
        });

        mapInstanceRef.current = map;

        // Геокодируем адрес
        ymaps
          .geocode(address, {
            results: 1,
          })
          .then((res: any) => {
            const firstGeoObject = res.geoObjects.get(0);
            const coords = firstGeoObject.geometry.getCoordinates();

            // Центрируем карту на найденном адресе
            map.setCenter(coords, 10);

            // Добавляем метку
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
              },
            );

            map.geoObjects.add(placemark);
            setIsLoading(false);
          })
          .catch((error: any) => {
            console.error("Ошибка геокодирования:", error);
            setIsLoading(false);
            // Если геокодирование не удалось, оставляем карту на общих координатах
          });
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
