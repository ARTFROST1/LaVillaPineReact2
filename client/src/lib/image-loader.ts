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
  extensions: string[] = ['jpg', 'jpeg', 'png', 'webp']
): ImageItem[] {
  const images: ImageItem[] = [];
  
  // Попытка загрузить изображения с предсказуемыми именами
  // Поскольку мы не можем динамически читать папки в браузере,
  // мы будем пытаться загрузить изображения по стандартным именам
  for (let i = 1; i <= 50; i++) {
    for (const ext of extensions) {
      try {
        const filename = `${folderPath}-${i}.${ext}`;
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
  
  // Предопределенные имена файлов для карусели
  const carouselFiles = [
    'carousel-1.jpg',
    'carousel-2.jpg', 
    'carousel-3.jpg',
    'carousel-4.jpg',
    'carousel-5.jpg'
  ];
  
  carouselFiles.forEach((filename, index) => {
    images.push({
      url: `/images/carousel/${filename}`,
      alt: `La Villa Pine - Фото ${index + 1}`,
      filename
    });
  });
  
  return images;
}

// Функция для загрузки изображений галереи
export function loadGalleryImages(): ImageItem[] {
  const images: ImageItem[] = [];
  
  // Загружаем изображения из всех папок для галереи
  const folders = ['carousel', 'gallery', 'amenities', 'rooms'];
  
  folders.forEach(folder => {
    // Предопределенные имена файлов для каждой папки
    for (let i = 1; i <= 20; i++) {
      const extensions = ['jpg', 'jpeg', 'png', 'webp'];
      
      extensions.forEach(ext => {
        const filename = `${folder}-${i}.${ext}`;
        images.push({
          url: `/images/${folder}/${filename}`,
          alt: `La Villa Pine - ${folder} ${i}`,
          filename
        });
      });
    }
  });
  
  return images;
}

// Функция для загрузки изображений удобств
export function loadAmenitiesImages(): ImageItem[] {
  const images: ImageItem[] = [];
  
  const amenityFiles = [
    { filename: 'sauna.jpg', alt: 'Приватная сауна' },
    { filename: 'pool.jpg', alt: 'Подогреваемый бассейн' },
    { filename: 'forest.jpg', alt: 'Лесная локация' },
    { filename: 'interior.jpg', alt: 'Дизайнерские интерьеры' },
    { filename: 'amenities-1.jpg', alt: 'Удобства' },
    { filename: 'amenities-2.jpg', alt: 'Удобства' },
    { filename: 'amenities-3.jpg', alt: 'Удобства' },
    { filename: 'amenities-4.jpg', alt: 'Удобства' },
    { filename: 'amenities-5.jpg', alt: 'Удобства' }
  ];
  
  amenityFiles.forEach(({ filename, alt }) => {
    images.push({
      url: `/images/amenities/${filename}`,
      alt,
      filename
    });
  });
  
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