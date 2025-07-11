import { Calendar, Info } from "lucide-react";

interface BookingDateNoticeProps {
  variant?: "home" | "booking";
  className?: string;
}

export default function BookingDateNotice({
  variant = "home",
  className = "",
}: BookingDateNoticeProps) {
  const isHomePage = variant === "home";

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg border ${
        isHomePage
          ? "bg-white/10 border-white/20 text-white backdrop-blur-sm"
          : "bg-blue-50 border-blue-200 text-blue-800"
      } ${className}`}
    >
      <div className="flex-shrink-0">
        <Info
          className={`w-5 h-5 ${
            isHomePage ? "text-accent" : "text-blue-600"
          }`}
        />
      </div>
      <div className="flex-1">
        <p className={`text-sm font-medium ${isHomePage ? "text-white" : "text-blue-800"}`}>
          Мы начинаем принимать брони с 20 августа 2025
        </p>
      </div>
      <div className="flex-shrink-0">
        <Calendar
          className={`w-5 h-5 ${
            isHomePage ? "text-accent" : "text-blue-600"
          }`}
        />
      </div>
    </div>
  );
}