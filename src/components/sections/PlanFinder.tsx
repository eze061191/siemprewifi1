import React from 'react';
import { Globe, Search } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { allDestinationsForSearch } from '@/data/destinations';
import { FlagImage } from '../ui/FlagImage';
import { useNavigate } from 'react-router-dom';

export function PlanFinder() {
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [selectedDestination, setSelectedDestination] = React.useState<string | null>(null);
  const commandRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleSelect = (value: string, name: string) => {
    setSelectedDestination(name);
    setSearchValue(name);
    setOpen(false);
    // Navegar a la página de planes con el destino seleccionado
    navigate(`/plans?destination=${value}`);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    // Abrir el menú si hay texto o si se hace clic
    setOpen(true);
    setSelectedDestination(null);
  };

  const filteredDestinations = React.useMemo(() => {
    if (!searchValue) {
      // Si no hay búsqueda, mostramos los 10 primeros destinos ordenados alfabéticamente
      return allDestinationsForSearch
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 10);
    }
    
    const lowerCaseSearch = searchValue.toLowerCase();
    return allDestinationsForSearch.filter(dest => 
      dest.name.toLowerCase().includes(lowerCaseSearch)
    );
  }, [searchValue]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Destination Input/Command Menu */}
        <div className="relative flex-grow">
          <Command ref={commandRef} className="relative overflow-visible">
            <div 
              className={cn(
                "flex items-center w-full h-14 text-base border rounded-xl shadow-sm bg-white px-3 cursor-pointer",
                open ? "border-primary ring-2 ring-primary/50" : "border-gray-300"
              )}
              onClick={() => setOpen(prev => !prev)} // Toggle open state on click
            >
              <Globe className="mr-3 h-5 w-5 shrink-0 opacity-50" />
              <CommandInput
                value={searchValue}
                onValueChange={handleSearchChange}
                placeholder={selectedDestination || "Busca tu destino..."}
                className="h-full border-none focus:ring-0 focus:outline-none placeholder:text-gray-500"
              />
            </div>

            {open && (
              <div className="absolute z-50 w-full mt-2 rounded-xl border bg-white shadow-lg max-h-[300px] overflow-y-auto">
                <CommandList>
                  {filteredDestinations.length === 0 && (
                    <CommandEmpty>No se encontraron resultados.</CommandEmpty>
                  )}
                  <CommandGroup heading={searchValue ? "Resultados de búsqueda" : "Destinos populares"}>
                    {filteredDestinations.map((dest) => (
                      <CommandItem
                        key={dest.value}
                        value={dest.name}
                        onSelect={() => handleSelect(dest.value, dest.name)}
                        className="flex items-center cursor-pointer"
                      >
                        <FlagImage 
                          flagUrl={dest.flag} 
                          isRegional={dest.isRegional} 
                          className="h-6 w-6 mr-3 flex-shrink-0 text-sm" 
                        />
                        <span>{dest.name}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </div>
            )}
          </Command>
        </div>

        {/* Search Button */}
        <Button 
          className="h-14 px-6 text-lg font-semibold"
          onClick={() => {
            // Lógica para buscar o navegar
            const destinationToSearch = selectedDestination || searchValue;
            const match = allDestinationsForSearch.find(d => d.name === destinationToSearch || d.value === destinationToSearch.toLowerCase().replace(/ /g, '-'));
            
            if (match) {
              navigate(`/plans?destination=${match.value}`);
            } else if (filteredDestinations.length > 0) {
              // Si no hay match exacto, usamos el primer resultado filtrado
              navigate(`/plans?destination=${filteredDestinations[0].value}`);
            }
          }}
        >
          <Search className="h-5 w-5 mr-2" />
          Buscar
        </Button>
      </div>
    </div>
  );
}