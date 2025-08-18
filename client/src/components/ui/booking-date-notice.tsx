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
  
  // Loft style configuration matching the site's aesthetic
  const loftStyle = {
    background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.8) 0%, rgba(25, 21, 17, 0.7) 50%, rgba(35, 29, 22, 0.85) 100%)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(212, 164, 74, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
  };

  return (
    <div
      className={`booking-date-notice flex items-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lg ${className}`}
      style={loftStyle as React.CSSProperties}
    >
      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center" style={{
        background: 'rgba(212, 164, 74, 0.15)',
        border: '1px solid rgba(212, 164, 74, 0.25)'
      }}>
        <Info
          className="w-4 h-4 sm:w-5 sm:h-5"
          style={{ color: '#D4A44A' }}
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