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
  
  // Loft style using CSS variables and header-like styling
  const loftStyle = {
    background: 'var(--popover)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)', 
    border: '1px solid var(--border)',
    boxShadow: '0 8px 24px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.12)',
    color: 'var(--popover-foreground)'
  };

  return (
    <div
      className={`booking-date-notice flex items-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lg ${className}`}
      style={loftStyle as React.CSSProperties}
    >
      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center" style={{
        background: 'var(--accent)',
        border: '1px solid var(--accent)',
        color: 'var(--accent-foreground)'
      }}>
        <Info
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
      </div>
      <div className="flex-1">
        <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--popover-foreground)' }}>
          Для брониронирования свяжитесь с нами любым удобным способом
        </p>
      </div>
    </div>
  );
}