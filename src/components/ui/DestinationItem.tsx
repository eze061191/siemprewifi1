import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FlagImage } from "./FlagImage";

interface DestinationItemProps {
  name: string;
  value: string;
  flag?: string;
  variant?: "card" | "list";
}

export const DestinationItem: React.FC<DestinationItemProps> = ({
  name,
  value,
  flag,
  variant = "card",
}) => {
  const isRegional = !flag || flag.length > 2; // Asumimos que si no hay flag o es un emoji largo (como 🇪🇺), es regional.

  if (variant === "list") {
    return (
      <Link to={`/plans?destination=${value}`} className="block">
        <div className="flex items-center p-2 rounded-md hover:bg-accent transition-colors">
          <span className="mr-2 text-lg">{flag}</span>
          <span className="text-sm font-medium text-gray-700">{name}</span>
        </div>
      </Link>
    );
  }

  // Card variant (Popular section style)
  return (
    <Link to={`/plans?destination=${value}`} className="block h-full">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <FlagImage flagUrl={flag} isRegional={isRegional} className="mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-primary font-medium mt-1">Ver planes</p>
        </CardContent>
      </Card>
    </Link>
  );
};