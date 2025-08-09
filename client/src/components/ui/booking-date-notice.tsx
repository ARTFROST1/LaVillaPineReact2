import { Calendar, Info } from "lucide-react";
import { useDynamicContrast } from "@/hooks/useDynamicContrast";

interface BookingDateNoticeProps {
  variant?: "home" | "booking";
  className?: string;
}

export default function BookingDateNotice({
  variant = "home",
  className = "",
}: BookingDateNoticeProps) {
  const isHomePage = variant === "home";
  
  // Use dynamic contrast hook for liquid glass styling
  const { textColor } = useDynamicContrast({
    headerSelector: '.booking-date-notice',
    threshold: 128,
    currentPath: '/'
  });

  // Dynamic text color classes - solid colors only like in header
  const dynamicTextClass = textColor === 'light' ? 'text-white' : 'text-black';
  const accentClass = textColor === 'light' ? 'text-yellow-400' : 'text-yellow-600';
  
  // Dynamic border style for liquid glass effect
  const dynamicBorderStyle = textColor === 'light' 
    ? { '--border-color': 'rgba(255, 255, 255, 0.15)', '--border-hover-color': 'rgba(255, 255, 255, 0.4)' }
    : { '--border-color': 'rgba(0, 0, 0, 0.15)', '--border-hover-color': 'rgba(0, 0, 0, 0.4)' };

  return (
    <div
      className={`booking-date-notice liquid-glass-notice ${isHomePage ? "liquid-glass-notice-home" : "liquid-glass-notice-page"} ${className}`}
      style={dynamicBorderStyle as React.CSSProperties}
    >
      <div className="flex-shrink-0">
        <Info
          className={`w-4 h-4 sm:w-5 sm:h-5 ${accentClass}`}
        />
      </div>
      <div className="flex-1">
        <p className={`text-xs sm:text-sm font-medium ${dynamicTextClass}`}>
          Для брониронирования свяжитесь с нами любым удобным способом
        </p>
      </div>
    </div>
  );
}