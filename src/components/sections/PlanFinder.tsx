import React from 'react';
import { Search, MapPin, Calendar, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cities } from '@/data/cities';

export function PlanFinder() {
  const [destinationOpen, setDestinationOpen] = React.useState(false);
  const [destinationValue, setDestinationValue] = React.useState('');

  const handleSelectDestination = (cityLabel: string) => {
    setDestinationValue(cityLabel);
    setDestinationOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl max-w-4xl mx-auto -mt-16 relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-end">
        
        {/* Destino */}
        <div className="lg:col-span-2 relative">
          <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            Destino
          </label>
          <Command shouldFilter={false}>
            <div className="relative">
              <CommandInput
                placeholder="¿A dónde viajas?"
                className="h-12 border-gray-300 focus:border-primary pr-10"
                value={destinationValue}
                onValueChange={(value) => {
                  setDestinationValue(value);
                  setDestinationOpen(true);
                }}
                onFocus={() => setDestinationOpen(true)}
                onBlur={() => setTimeout(() => setDestinationOpen(false), 150)}
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            {destinationOpen && (
              <CommandList className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                <CommandEmpty>No se encontró la ciudad.</CommandEmpty>
                <CommandGroup>
                  {cities
                    .filter(city => city.label.toLowerCase().includes(destinationValue.toLowerCase()))
                    .map((city) => (
                      <CommandItem
                        key={city.value}
                        onSelect={() => handleSelectDestination(city.label)}
                        className="cursor-pointer flex items-center"
                      >
                        <span className="mr-2 text-lg">{city.flag}</span>
                        {city.label}
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            )}
          </Command>
        </div>

        {/* Fechas */}
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            Fechas
          </label>
          <Input placeholder="Seleccionar" className="h-12 border-gray-300 focus:border-primary" />
        </div>

        {/* Pasajeros */}
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
            <Users className="h-4 w-4 mr-2 text-primary" />
            Pasajeros
          </label>
          <Input placeholder="1" className="h-12 border-gray-300 focus:border-primary" />
        </div>

        {/* Botón Buscar */}
        <Button className="h-12 w-full mt-2 lg:mt-0">
          <Search className="h-5 w-5 mr-2" />
          Buscar
        </Button>
      </div>
    </div>
  );
}