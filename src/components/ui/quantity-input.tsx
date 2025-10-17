import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";

interface QuantityInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const QuantityInput: React.FC<QuantityInputProps> = ({ value, onChange, min = 1, max = 10 }) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" onClick={handleDecrement} className="h-10 w-10 rounded-full">
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        className="w-16 text-center border-0 text-lg font-bold focus-visible:ring-0"
        value={value}
        readOnly
      />
      <Button variant="outline" size="icon" onClick={handleIncrement} className="h-10 w-10 rounded-full">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};