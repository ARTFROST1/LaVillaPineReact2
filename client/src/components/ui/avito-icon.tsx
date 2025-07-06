export default function AvitoIcon({ className = "text-xl", ...props }) {
  return (
    <div className={`inline-block ${className}`} {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <defs>
          <mask id="avitoMask">
            <rect width="24" height="24" fill="white" />
            {/* Прозрачные дырочки - четыре круга */}
            <circle cx="9" cy="9" r="1.5" fill="black" />
            <circle cx="15" cy="9" r="2.5" fill="black" />
            <circle cx="9" cy="15" r="2.5" fill="black" />
            <circle cx="15" cy="15" r="1.5" fill="black" />
          </mask>
        </defs>
        {/* Основной круг с маской для создания дырочек */}
        <circle cx="12" cy="12" r="10" mask="url(#avitoMask)" />
      </svg>
    </div>
  );
}
