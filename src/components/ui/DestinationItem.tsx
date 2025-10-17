import { useNavigate } from "react-router-dom";
import { ChevronRight, Globe } from "lucide-react";

interface DestinationItemProps {
  name: string;
  value: string;
  flag?: string;
  variant?: 'card' | 'list';
}

export const DestinationItem = ({ name, value, flag, variant = 'card' }: DestinationItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/plans?destination=${value}&days=7`);
  };

  if (variant === 'list') {
    return (
      <button
        onClick={handleClick}
        className="w-full flex items-center justify-between p-4 border-b hover:bg-secondary transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">{flag}</span>
          <span className="font-medium">{name}</span>
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md hover:border-primary transition-all text-left"
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
          {flag ? (
            <span className="text-2xl">{flag}</span>
          ) : (
            <Globe className="h-5 w-5 text-primary" />
          )}
        </div>
        <div>
          <p className="text-xs text-muted-foreground">eSIM</p>
          <p className="font-bold">{name}</p>
        </div>
      </div>
      <ChevronRight className="h-6 w-6 text-muted-foreground" />
    </button>
  );
};