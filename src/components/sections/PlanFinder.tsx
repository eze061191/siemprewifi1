import React, { useState, useRef, useEffect } from 'react';
import { Globe, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { useDestinations } from '@/hooks/useDestinations';
import { FlagImage } from '../ui/FlagImage';

export function PlanFinder() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const commandRef = useRef<HTMLDivElement>(null);
  const { categorizedDestinations } = useDestinations();

  // Manejar el clic fuera del Command para cerrarlo
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (commandRef.current && !commandRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleSelectDestination = (name: string) => {
    // Aquí se manejaría la navegación o la selección final
    console.log('Destino seleccionado:', name);
    setSearchValue(name);
    setOpen(false);
  };

  const handleValueChange = (value: string) => {
    setSearchValue(value);
    // Abrir el menú si hay texto, o si se hace clic y no hay texto
    if (value.length > 0) {
      setOpen(true);
    } else if (value.length === 0 && open) {
      // Si el usuario borra todo, mantenemos abierto si ya estaba abierto.
    }
  };

  return (
    <div className="relative max-w-3xl mx-auto mt-10 p-4 bg-white rounded-xl shadow-2xl">
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Input de Búsqueda (CommandInput) */}
        <div className="flex-grow relative w-full">
          <Command ref={commandRef} className="relative overflow-visible">
            {/* Contenedor visual del input */}
            <div
              className="flex items-center w-full h-14 text-base border border-gray-300 rounded-xl shadow-sm bg-white px-3 cursor-text"
              onClick={() => setOpen(true)}
            >
              <Globe className="mr-3 h-5 w-5 shrink-0 opacity-50" />
              <CommandInput
                value={searchValue}
                onValueChange={handleValueChange}
                placeholder="¿A dónde viajas?"
                // Clases para asegurar que CommandInput ocupe el espacio restante y no tenga bordes duplicados
                className="h-full border-none focus:ring-0 focus:outline-none p-0 text-gray-700 flex-grow"
              />
            </div>

            {/* Command List (Dropdown) */}
            {open && (
              <div className="absolute z-50 w-full mt-2 rounded-xl border bg-white shadow-lg max-h-[300px] overflow-y-auto">
                <CommandList>
                  <CommandEmpty>No se encontraron resultados.</CommandEmpty>

                  {/* Regiones */}
                  {categorizedDestinations.regions.length > 0 && (
                    <CommandGroup heading="Regiones">
                      {categorizedDestinations.regions.map((dest) => (
                        <CommandItem
                          key={dest.value}
                          value={dest.name}
                          onSelect={() => handleSelectDestination(dest.name)}
                          className="flex items-center cursor-pointer"
                        >
                          <FlagImage flagUrl={dest.flag} isRegional={true} className="h-6 w-6 mr-2 text-sm flex-shrink-0" />
                          {dest.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  )}

                  {/* Países */}
                  {categorizedDestinations.countries.length > 0 && (
                    <>
                      <CommandSeparator />
                      <CommandGroup heading="Países">
                        {categorizedDestinations.countries.map((dest) => (
                          <CommandItem
                            key={dest.value}
                            value={dest.name}
                            onSelect={() => handleSelectDestination(dest.name)}
                            className="flex items-center cursor-pointer"
                          >
                            <FlagImage flagUrl={dest.flag} isRegional={false} className="h-6 w-6 mr-2 text-sm flex-shrink-0" />
                            {dest.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </>
                  )}

                  {/* Ciudades */}
                  {categorizedDestinations.cities.length > 0 && (
                    <>
                      <CommandSeparator />
                      <CommandGroup heading="Ciudades">
                        {categorizedDestinations.cities.map((dest) => (
                          <CommandItem
                            key={dest.value}
                            value={dest.name}
                            onSelect={() => handleSelectDestination(dest.name)}
                            className="flex items-center cursor-pointer"
                          >
                            <FlagImage flagUrl={dest.flag} isRegional={false} className="h-6 w-6 mr-2 text-sm flex-shrink-0" />
                            {dest.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </>
                  )}
                </CommandList>
              </div>
            )}
          </Command>
        </div>

        {/* Botón de Búsqueda */}
        <Button className="w-full md:w-auto h-14 px-8 text-lg font-semibold">
          <Search className="h-5 w-5 mr-2" />
          Buscar
        </Button>
      </div>
    </div>
  );
}