interface YandexReviewsProps {
  className?: string;
  theme?: "light" | "dark";
  size?: "small" | "medium" | "large";
}

export default function YandexReviews({ 
  className = "", 
  theme = "light",
  size = "medium"
}: YandexReviewsProps) {
  const themeParam = theme === "dark" ? "&theme=dark" : "";
  
  // Используем CSS transform для увеличения размера виджета
  const scaleFactors = {
    small: 1,
    medium: 1.5,
    large: 2
  };

  const scale = scaleFactors[size];
  const containerWidth = 150 * scale;
  const containerHeight = 50 * scale;

  return (
    <div 
      className={`yandex-reviews-widget ${className}`}
      style={{
        width: `${containerWidth}px`,
        height: `${containerHeight}px`,
        overflow: 'hidden'
      }}
    >
      <iframe 
        src={`https://yandex.ru/sprav/widget/rating-badge/229469787776?type=rating${themeParam}`}
        width="150"
        height="50"
        frameBorder="0"
        className="rounded-lg shadow-sm"
        title="Отзывы на Яндексе"
        loading="lazy"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          border: 'none'
        }}
      />
    </div>
  );
}