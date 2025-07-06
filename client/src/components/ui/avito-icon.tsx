export default function AvitoIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Авито иконка - круг с четырьмя кружками */}
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      {/* Четыре кружка внутри - характерный дизайн Авито */}
      <circle cx="8" cy="8" r="2" fill="white" />
      <circle cx="16" cy="8" r="3" fill="white" />
      <circle cx="8" cy="16" r="3" fill="white" />
      <circle cx="16" cy="16" r="2" fill="white" />
    </svg>
  );
}