import * as React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const GetStartedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6 py-3 text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2",
          className
        )}
        {...props}
      >
        {children}
        <ArrowRight className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" />
      </Button>
    );
  }
);

GetStartedButton.displayName = "GetStartedButton";

export { GetStartedButton };