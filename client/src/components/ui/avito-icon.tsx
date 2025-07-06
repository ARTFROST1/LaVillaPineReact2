export default function AvitoIcon({ className = "text-xl", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Авито иконка - круг с четырьмя кружками в стиле outline */}
      <circle cx="12" cy="12" r="10" />
      {/* Четыре кружка внутри - характерный дизайн Авито */}
      <circle cx="9" cy="9" r="1.5" />
      <circle cx="15" cy="9" r="2.5" />
      <circle cx="9" cy="15" r="2.5" />
      <circle cx="15" cy="15" r="1.5" />
    </svg>
  );
}