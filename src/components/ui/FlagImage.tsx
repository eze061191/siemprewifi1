import React from 'react';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FlagImageProps {
  flagUrl?: string;
  isRegional?: boolean;
  className?: string;
}

// Función para obtener la URL de la bandera basada en el código de país (flag emoji)
// Nota: En un entorno real, usaríamos un servicio de CDN para cargar imágenes de banderas.
// Aquí simularemos la URL usando un servicio de terceros que convierte emojis de bandera a imágenes.
const getFlagImageUrl = (flagEmoji: string) => {
    // Ejemplo de servicio que convierte emojis a imágenes (solo para simulación visual)
    // En producción, se recomienda usar un CDN con imágenes pre-renderizadas.
    const code = Array.from(flagEmoji)
        .map(char => char.codePointAt(0)?.toString(16))
        .join('-');
    
    // Usaremos un placeholder simple para la demostración, ya que no podemos cargar imágenes externas de forma confiable.
    // Para simular el estilo, usaremos un fondo de color y el emoji.
    return flagEmoji; 
};

export const FlagImage: React.FC<FlagImageProps> = ({ flagUrl, isRegional = false, className }) => {
  if (isRegional) {
    // Estilo para destinos regionales (como el globo en la referencia)
    return (
      <div className={cn(
        "rounded-full bg-blue-100 flex items-center justify-center shadow-md",
        className
      )}>
        <Globe className="h-5 w-5 text-blue-600" />
      </div>
    );
  }

  // Estilo para países individuales (simulando la bandera circular)
  return (
    <div className={cn(
      "rounded-full flex items-center justify-center text-xl overflow-hidden shadow-md bg-white border border-gray-100",
      className
    )}>
      {/* Usamos el emoji de la bandera directamente para la demostración */}
      {flagUrl}
    </div>
  );
};