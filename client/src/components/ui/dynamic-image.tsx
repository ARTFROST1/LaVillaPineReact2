import LazyImage from './lazy-image';

interface DynamicImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean; // Для критических изображений
  'data-testid'?: string;
}

// Компонент для автоматического переключения между реальными и fallback изображениями с поддержкой lazy loading
export default function DynamicImage({ 
  src, 
  fallbackSrc, 
  alt, 
  className = "", 
  style,
  priority = false,
  'data-testid': testId
}: DynamicImageProps) {
  return (
    <LazyImage
      src={src}
      fallbackSrc={fallbackSrc}
      alt={alt}
      className={className}
      style={style}
      priority={priority}
      data-testid={testId}
    />
  );
}