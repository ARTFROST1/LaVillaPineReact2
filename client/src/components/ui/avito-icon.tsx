export default function AvitoIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <g transform="translate(6, 6)">
        <circle cx="2" cy="2" r="1" fill="white" />
        <circle cx="6" cy="6" r="3" fill="white" />
        <circle cx="10" cy="2" r="2" fill="white" />
        <circle cx="10" cy="10" r="2" fill="white" />
      </g>
    </svg>
  );
}