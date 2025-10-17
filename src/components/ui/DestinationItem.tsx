import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FlagImage } from "./FlagImage";
import { ArrowRight } from "lucide-react";

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

  // Card variant (Used for Popular, Regional, Countries tabs)
  // Este diseño imita la estructura de lista de la imagen, pero con el FlagImage circular.
  return (
    <Link to={`/plans?destination=${value}`} className="block h-full">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Usamos FlagImage en lugar del emoji simple */}
            <FlagImage flagUrl={flag} isRegional={isRegional} className="h-10 w-10 text-xl flex-shrink-0" />
            <h3 className="text-base font-semibold text-gray-800">{name}</h3>
          </div>
          <ArrowRight className="h-5 w-5 text-primary" />
        </CardContent>
      </Card>
    </Link>
  );
};