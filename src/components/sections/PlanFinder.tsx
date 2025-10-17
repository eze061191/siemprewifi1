"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, Calendar, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cities } from "@/data/cities";

const PlanFinder = () => {
  const [destination, setDestination] = useState("");
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const commandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        commandRef.current &&
        !commandRef.current.contains(event.target as Node)
      ) {
        setDestinationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (cityLabel: string) => {
    setDestination(cityLabel);
    setSearchValue(cityLabel);
    setDestinationOpen(false);
  };

  const handleInputChange = (value: string) => {
    setSearchValue(value);
    if (!destinationOpen) {
      setDestinationOpen(true);
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 -mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <div className="relative md:col-span-2">
          <Command ref={commandRef} className="relative overflow-visible">
            <div className="flex items-center w-full h-14 text-base border border-gray-300 rounded-xl shadow-sm bg-white px-3">
              <Globe className="mr-3 h-5 w-5 shrink-0 opacity-50" />
              <CommandInput
                value={searchValue}
                onValueChange={handleInputChange}
                onFocus={() => setDestinationOpen(true)}
                placeholder="¿A dónde quieres ir?"
                className="w-full focus:outline-none"
              />
            </div>
            {destinationOpen && (
              <CommandList className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto py-2">
                <CommandEmpty>No se encontró la ciudad.</CommandEmpty>
                <CommandGroup>
                  {cities.map((city) => (
                    <CommandItem
                      key={city.value}
                      value={city.label}
                      onSelect={() => handleSelect(city.label)}
                      className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2"
                    >
                      <div>
                        <span>{city.label}</span>
                        <span className="text-xs text-gray-500 ml-2">
                          {city.country}
                        </span>
                      </div>
                      <span>{city.flag}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            )}
          </Command>
        </div>
        <div className="flex items-center w-full h-14 text-base border border-gray-300 rounded-xl shadow-sm bg-white px-3">
          <Calendar className="mr-3 h-5 w-5 shrink-0 opacity-50" />
          <span className="text-gray-500">Fechas de viaje</span>
        </div>
        <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-semibold flex items-center justify-center">
          <Search className="mr-2 h-5 w-5" />
          Buscar
        </Button>
      </div>
    </section>
  );
};

export default PlanFinder;