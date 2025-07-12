interface YandexReviewsProps {
  className?: string;
}

export default function YandexReviews({ className = "" }: YandexReviewsProps) {
  return (
    <div className={`fixed bottom-4 left-4 z-50 ${className}`}>
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 p-2 hover:shadow-xl transition-shadow duration-300">
        <iframe 
          src="https://yandex.ru/sprav/widget/rating-badge/229469787776?type=rating" 
          width="150" 
          height="50" 
          frameBorder="0"
          className="rounded-lg"
          title="Отзывы на Яндексе"
          loading="lazy"
        />
      </div>
    </div>
  );
}