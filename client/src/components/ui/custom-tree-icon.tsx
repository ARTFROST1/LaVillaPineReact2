import treeIconPath from "@assets/LaVilla tree_1752148387057.png";

interface CustomTreeIconProps {
  className?: string;
}

export default function CustomTreeIcon({ className = "h-8 w-8" }: CustomTreeIconProps) {
  return (
    <img 
      src={treeIconPath} 
      alt="La Villa Pine Tree Icon" 
      className={className}
    />
  );
}