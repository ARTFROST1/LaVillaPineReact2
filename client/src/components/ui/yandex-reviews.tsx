import { useScrollContext } from "@/contexts/scroll-context";

interface YandexReviewsProps {
  className?: string;
}

export default function YandexReviews({ className = "" }: YandexReviewsProps) {
  const { isInAmenitiesSection } = useScrollContext();

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-opacity duration-500 ${
        isInAmenitiesSection ? "opacity-0 pointer-events-none" : "opacity-100"
      } ${className}`}
    >
      <div className="backdrop-blur-sm rounded-lg shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-[#242528]">
        <iframe
          src="https://yandex.ru/sprav/widget/rating-badge/229469787776?type=rating&theme=dark"
          width="150"
          height="50"
          className="block"
          title="Отзывы на Яндексе"
          loading="lazy"
        />
      </div>
    </div>
  );
}
