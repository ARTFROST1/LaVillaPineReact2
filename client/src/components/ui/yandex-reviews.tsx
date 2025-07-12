interface YandexReviewsProps {
  className?: string;
}

export default function YandexReviews({ className = "" }: YandexReviewsProps) {
  return (
    <div className={`yandex-reviews-widget ${className}`}>
      <iframe 
        src="https://yandex.ru/sprav/widget/rating-badge/229469787776?type=rating" 
        width="150" 
        height="50" 
        frameBorder="0"
        className="rounded-lg shadow-sm"
        title="Отзывы на Яндексе"
        loading="lazy"
      />
    </div>
  );
}