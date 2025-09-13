// Утилита для автоматической загрузки изображений из папок

export interface ImageItem {
  url: string;
  alt: string;
  filename: string;
}

// Функция для загрузки изображений из папки
export function loadImagesFromFolder(
  folderPath: string,
  altPrefix: string = '',
  extensions: string[] = ['webp', 'jpg', 'jpeg', 'png']
): ImageItem[] {
  const images: ImageItem[] = [];
  
  // Попытка загрузить изображения с предсказуемыми именами
  // Поскольку мы не можем динамически читать папки в браузере,
  // мы будем пытаться загрузить изображения по стандартным именам
  for (let i = 1; i <= 50; i++) {
    for (const ext of extensions) {
      try {
        const filename = `${i}.${ext}`;
        const url = `/images/${folderPath}/${filename}`;
        
        // Добавляем изображение в массив
        images.push({
          url,
          alt: `${altPrefix} ${i}`,
          filename
        });
      } catch (error) {
        // Изображение не найдено, продолжаем
        continue;
      }
    }
  }
  
  return images;
}

// Функция для загрузки изображений карусели
export function loadCarouselImages(): ImageItem[] {
  const images: ImageItem[] = [];
  
  // Реальные имена файлов для карусели (1.webp - 6.webp)
  for (let i = 1; i <= 6; i++) {
    const filename = `${i}.webp`;
    images.push({
      url: `/images/carousel/${filename}`,
      alt: `La Villa Pine - Фото ${i}`,
      filename
    });
  }
  
  return images;
}

// Функция для загрузки изображений галереи
export function loadGalleryImages(): ImageItem[] {
  const images: ImageItem[] = [];
  
  // Gallery folder: 1.webp - 40.webp
  for (let i = 1; i <= 40; i++) {
    const filename = `${i}.webp`;
    images.push({
      url: `/images/gallery/${filename}`,
      alt: `La Villa Pine - Галерея ${i}`,
      filename
    });
  }
  
  // Carousel folder: 1.webp - 6.webp
  for (let i = 1; i <= 6; i++) {
    const filename = `${i}.webp`;
    images.push({
      url: `/images/carousel/${filename}`,
      alt: `La Villa Pine - Карусель ${i}`,
      filename
    });
  }
  
  // Amenities folder: 1.webp - 5.webp
  for (let i = 1; i <= 5; i++) {
    const filename = `${i}.webp`;
    images.push({
      url: `/images/amenities/${filename}`,
      alt: `La Villa Pine - Удобства ${i}`,
      filename
    });
  }
  
  return images;
}

// Функция для загрузки изображений удобств
export function loadAmenitiesImages(): ImageItem[] {
  const images: ImageItem[] = [];
  
  // Реальные файлы удобств (1.webp - 5.webp)
  const amenityNames = [
    'Приватная сауна',
    'Подогреваемый бассейн', 
    'Лесная локация',
    'Дизайнерские интерьеры',
    'Премиальные удобства'
  ];
  
  for (let i = 1; i <= 5; i++) {
    const filename = `${i}.webp`;
    images.push({
      url: `/images/amenities/${filename}`,
      alt: amenityNames[i - 1] || `Удобства ${i}`,
      filename
    });
  }
  
  return images;
}

// Функция для проверки существования изображения
export function checkImageExists(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

// Функция для фильтрации существующих изображений
export async function filterExistingImages(images: ImageItem[]): Promise<ImageItem[]> {
  const existingImages: ImageItem[] = [];
  
  for (const image of images) {
    const exists = await checkImageExists(image.url);
    if (exists) {
      existingImages.push(image);
    }
  }
  
  return existingImages;
}