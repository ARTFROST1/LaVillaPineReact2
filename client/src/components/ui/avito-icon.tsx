export default function AvitoIcon({ className = "text-xl", ...props }) {
  return (
    <div className={`inline-block ${className}`} {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        {/* Авито иконка - круг с четырьмя кружками */}
        <circle cx="12" cy="12" r="10" />
        <circle cx="9" cy="9" r="1.5" />
        <circle cx="15" cy="9" r="2.5" />
        <circle cx="9" cy="15" r="2.5" />
        <circle cx="15" cy="15" r="1.5" />
      </svg>
    </div>
  );
}