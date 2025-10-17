import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { InfinityIcon, Zap, ShieldCheck, Signal, Radio, Smartphone } from 'lucide-react';

interface PlanInfoTabsProps {
  destination: string;
}

type Tab = 'details' | 'coverage' | 'compatibility';

export const PlanInfoTabs: React.FC<PlanInfoTabsProps> = ({ destination }) => {
  const [activeTab, setActiveTab] = useState<Tab>('details');

  const renderContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3"><InfinityIcon className="h-5 w-5 text-primary" /><span>Datos ilimitados</span></div>
            <div className="flex items-center gap-3"><Zap className="h-5 w-5 text-primary" /><span>Internet rápido y confiable</span></div>
            <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-primary" /><span>Sin más cargos por roaming</span></div>
          </div>
        );
      case 'coverage':
        return (
          <div className="space-y-6 text-sm">
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Velocidad:</p>
                <p className="text-muted-foreground">Nuestra eSIM internacional para <span className="capitalize">{destination}</span> incluye cobertura rápida 4G LTE y 5G (donde esté disponible).</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Signal className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Cobertura:</p>
                <p className="text-muted-foreground">Nuestra cobertura es excelente en áreas urbanas, sin embargo, en desiertos, montañas o junglas, la calidad puede ser más débil o inestable.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Radio className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Redes:</p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>AT&T</li>
                  <li>T-Mobile</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'compatibility':
        return (
          <div className="flex items-start gap-3 text-sm">
            <Smartphone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Compatibilidad de tu dispositivo:</p>
              <p className="text-muted-foreground">Para usar una eSIM, tu teléfono debe estar desbloqueado por el operador y ser compatible con eSIM. <a href="#" className="text-primary underline">Consulta la lista de dispositivos compatibles.</a></p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="p-1 bg-muted rounded-xl flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          onClick={() => setActiveTab('details')}
          className={cn(
            "w-full rounded-lg transition-colors duration-300 text-muted-foreground font-semibold",
            activeTab === 'details' && 'bg-background shadow-sm text-foreground'
          )}
        >
          Detalles de eSIM
        </Button>
        <Button
          variant="ghost"
          onClick={() => setActiveTab('coverage')}
          className={cn(
            "w-full rounded-lg transition-colors duration-300 text-muted-foreground font-semibold",
            activeTab === 'coverage' && 'bg-background shadow-sm text-foreground'
          )}
        >
          Cobertura
        </Button>
        <Button
          variant="ghost"
          onClick={() => setActiveTab('compatibility')}
          className={cn(
            "w-full rounded-lg transition-colors duration-300 text-muted-foreground font-semibold",
            activeTab === 'compatibility' && 'bg-background shadow-sm text-foreground'
          )}
        >
          Compatibilidad
        </Button>
      </div>
      <div className="min-h-[150px]">
        {renderContent()}
      </div>
    </div>
  );
};