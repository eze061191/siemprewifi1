import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface DestinationItemProps {
  name: string;
  value: string;
  flag?: string;
  variant?: 'card' | 'list';
}

export const DestinationItem: React.FC<DestinationItemProps> = ({
  name,
  value,
  flag,
  variant = 'card',
}) => {
  const linkPath = `/plans?destination=${value}`;

  if (variant === 'list') {
    return (
      <Link to={linkPath} className="w-full">
        <Button variant="ghost" className="w-full justify-start h-auto py-2 px-3 text-base font-normal hover:bg-secondary">
          {flag && <span className="mr-2 text-xl">{flag}</span>}
          <span className="truncate">{name}</span>
        </Button>
      </Link>
    );
  }

  return (
    <Link to={linkPath} className="block h-full">
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/50">
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {flag && <span className="text-3xl">{flag}</span>}
            <span className="font-semibold text-lg capitalize">{name}</span>
          </div>
          <ArrowRight className="h-5 w-5 text-primary" />
        </CardContent>
      </Card>
    </Link>
  );
};