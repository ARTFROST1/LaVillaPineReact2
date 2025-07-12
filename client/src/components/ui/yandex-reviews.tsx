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
  
  const dimensions = {
    small: { width: "150", height: "50" },
    medium: { width: "180", height: "60" },
    large: { width: "200", height: "70" }
  };

  const { width, height } = dimensions[size];

  return (
    <div className={`yandex-reviews-widget ${className}`}>
      <iframe 
        src={`https://yandex.ru/sprav/widget/rating-badge/229469787776?type=rating${themeParam}`}
        width={width}
        height={height}
        frameBorder="0"
        className="rounded-lg shadow-sm"
        title="Отзывы на Яндексе"
        loading="lazy"
      />
    </div>
  );
}