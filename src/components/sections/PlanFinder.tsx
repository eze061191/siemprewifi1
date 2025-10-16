"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, Calendar as CalendarIcon, Users, Search } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cities } from "@/data/cities";
import { cn } from "@/lib/utils";

const PlanFinder = () => {
  const [destination, setDestination] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState(2);

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

  const handleDestinationSelect = (city: { label: string; value: string }) => {
    setDestination(city.label);
    setSearchValue(city.label);
    setDestinationOpen(false);
  };

  return (
    <section className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 -mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-10 gap-4 items-center">
        {/* Destination */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Destino
          </label>
          <Command ref={commandRef} className="relative overflow-visible">
            <div className="flex items-center w-full h-14 text-base border border-gray-300 rounded-xl shadow-sm bg-white px-3">
              <Globe className="mr-3 h-5 w-5 shrink-0 opacity-50" />
              <CommandInput
                value={searchValue}
                onValueChange={setSearchValue}
                onFocus={() => setDestinationOpen(true)}
                placeholder="¿A dónde viajas?"
                className="w-full focus:outline-none"
              />
            </div>
            {destinationOpen && (
              <CommandList className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-10 max-h-80 overflow-y-auto">
                <CommandEmpty>No se encontró la ciudad.</CommandEmpty>
                <CommandGroup>
                  {cities
                    .filter((city) =>
                      city.label.toLowerCase().includes(searchValue.toLowerCase())
                    )
                    .map((city) => (
                      <CommandItem
                        key={city.value}
                        value={city.label}
                        onSelect={() => handleDestinationSelect(city)}
                        className="flex items-center cursor-pointer hover:bg-gray-100 p-2"
                      >
                        <span className="mr-2">{city.flag}</span>
                        <span>{city.label},</span>
                        <span className="text-gray-500 ml-1">{city.country}</span>
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            )}
          </Command>
        </div>

        {/* Date */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full h-14 text-base justify-start text-left font-normal border-gray-300 rounded-xl shadow-sm",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-3 h-5 w-5 opacity-50" />
                {date ? (
                  format(date, "PPP", { locale: es })
                ) : (
                  <span>Elige una fecha</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Guests */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Personas
          </label>
          <div className="flex items-center w-full h-14 text-base border border-gray-300 rounded-xl shadow-sm bg-white px-3">
            <Users className="mr-3 h-5 w-5 shrink-0 opacity-50" />
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              min="1"
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-2">
          <Button className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm mt-5">
            <Search className="mr-2 h-5 w-5" />
            Buscar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlanFinder;