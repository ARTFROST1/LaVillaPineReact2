import { Info } from "lucide-react";

interface BookingDateNoticeProps {
  variant?: "home" | "booking";
  className?: string;
}

export default function BookingDateNotice({
  variant = "home",
  className = "",
}: BookingDateNoticeProps) {
  const isHomePage = variant === "home";
  
  // Loft style configuration
  const loftStyle = {
    background: 'linear-gradient(135deg, rgba(60, 50, 40, 0.4) 0%, rgba(50, 42, 35, 0.3) 50%, rgba(70, 58, 45, 0.45) 100%)',
    backdropFilter: 'blur(20px)',
    borderColor: 'rgba(212, 164, 74, 0.15)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.05)'
  };

  return (
    <div
      className={`booking-date-notice flex items-center space-x-3 px-4 py-3 rounded-2xl border transition-all duration-300 ${className}`}
      style={loftStyle as React.CSSProperties}
    >
      <div className="flex-shrink-0">
        <Info
          className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
        />
      </div>
      <div className="flex-1">
        <p className="text-xs sm:text-sm font-medium text-foreground">
          Для брониронирования свяжитесь с нами любым удобным способом
        </p>
      </div>
    </div>
  );
}