"use client";
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

export function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter
          id="radio-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="2" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

interface LiquidRadioGroupProps {
  options: { value: string; label: string }[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export const LiquidRadioGroup: React.FC<LiquidRadioGroupProps> = ({ options, value, onValueChange, className }) => {
  if (options.length !== 2) {
    // Este componente está diseñado específicamente para dos opciones.
    return null;
  }

  const [option1, option2] = options;
  const dataState = value === option1.value ? 'offline' : 'online';

  return (
    <div className={cn("inline-flex h-11 rounded-lg bg-muted p-1 w-full", className)}>
      <RadioGroup
        value={value}
        onValueChange={onValueChange}
        className="group relative inline-grid grid-cols-[1fr_1fr] items-center gap-0 text-sm font-medium w-full after:absolute after:inset-y-0 after:left-0 after:w-1/2 after:rounded-md after:bg-background after:shadow-sm after:transition-transform after:duration-300 after:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] has-[:focus-visible]:after:outline has-[:focus-visible]:after:outline-2 has-[:focus-visible]:after:outline-ring/70"
        data-state={dataState}
      >
        <style>{`
          .group[data-state='offline']::after { transform: translateX(0%); }
          .group[data-state='online']::after { transform: translateX(100%); }
        `}</style>
        <div
          className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md"
          style={{ filter: 'url("#radio-glass")' }}
        />
        <label className={cn(
          "relative z-10 inline-flex h-full min-w-8 cursor-pointer select-none items-center justify-center whitespace-nowrap px-4 transition-colors font-semibold",
          dataState === 'offline' ? "text-foreground" : "text-muted-foreground"
        )}>
          {option1.label}
          <RadioGroupItem value={option1.value} className="sr-only" />
        </label>
        <label className={cn(
          "relative z-10 inline-flex h-full min-w-8 cursor-pointer select-none items-center justify-center whitespace-nowrap px-4 transition-colors font-semibold",
          dataState === 'online' ? "text-foreground" : "text-muted-foreground"
        )}>
          {option2.label}
          <RadioGroupItem value={option2.value} className="sr-only" />
        </label>
        <GlassFilter />
      </RadioGroup>
    </div>
  );
};