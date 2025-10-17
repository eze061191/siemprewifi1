import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { allDestinations } from '@/data/allDestinations';
import { FlagImage } from '@/components/ui/FlagImage';

export function PlanFinder() {
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const commandRef = useRef<HTMLDivElement>(null);

  // Manejar clic fuera del CommandList
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (commandRef.current && !commandRef.current.contains(event.target as Node)) {
        setDestinationOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelectDestination = (destinationName: string) => {
    setSelectedDestination(destinationName);
    setDestinationOpen(false);
  };

  const currentFlag = allDestinations.find(d => d.name === selectedDestination)?.flag;
  const isRegional = currentFlag && currentFlag.length > 2;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Encuentra tu plan ideal</h2>
      <div className="flex flex-col md:flex-row gap-4">
        
        {/* Campo de Destino */}
        <div className="relative flex-grow" ref={commandRef}>
          <div
            className="flex items-center border border-gray-300 rounded-lg p-3 cursor-pointer bg-white hover:border-primary transition-colors"
            onClick={() => setDestinationOpen(!destinationOpen)}
          >
            <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
            <div className="flex-grow">
              <p className="text-xs text-gray-500 font-medium">Destino</p>
              <p className="text-base font-semibold text-gray-800 truncate">
                {selectedDestination || 'Selecciona un destino'}
              </p>
            </div>
            <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${destinationOpen ? 'rotate-180' : ''}`} />
          </div>

          {destinationOpen && (
            <Command className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-xl z-20 max-h-60 overflow-hidden">
              <CommandInput placeholder="Buscar país, región o ciudad..." />
              <CommandList>
                <CommandEmpty>No se encontró el destino.</CommandEmpty>
                <CommandGroup>
                  {allDestinations.map((dest) => (
                    <CommandItem
                      key={dest.value}
                      onSelect={() => handleSelectDestination(dest.name)}
                      className="flex items-center cursor-pointer"
                    >
                      <FlagImage 
                        flagUrl={dest.flag} 
                        isRegional={!dest.flag || dest.flag.length > 2} 
                        className="h-6 w-6 mr-3 flex-shrink-0 text-base" 
                      />
                      {dest.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          )}
        </div>

        {/* Campo de Fechas (Placeholder) */}
        <div className="flex-grow">
          <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-gray-50">
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <div className="flex-grow">
              <p className="text-xs text-gray-500 font-medium">Fechas</p>
              <p className="text-base font-semibold text-gray-500">Selecciona fechas</p>
            </div>
          </div>
        </div>

        {/* Botón de Búsqueda */}
        <Button className="md:w-auto px-8 py-6 text-lg font-semibold">
          Buscar
        </Button>
      </div>
    </div>
  );
}