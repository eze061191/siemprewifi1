"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, Calendar as CalendarIcon, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cities, City } from "@/data/cities";

const PlanFinder = () => {
  const [destination, setDestination] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>();
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

  return (
    <section className="w-full max-w-5xl mx-auto px-4 md:px-6 py-8">
      <div className="relative bg-white rounded-2xl shadow-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-10 gap-4 items-center">
          {/* Destination */}
          <div className="relative md:col-span-2 lg:col-span-3">
            <Command ref={commandRef} className="relative overflow-visible">
              <div className="flex items-center w-full h-14 text-base border border-gray-300 rounded-xl shadow-sm bg-white px-3">
                <Globe className="mr-3 h-5 w-5 shrink-0 opacity-50" />
                <CommandInput
                  value={searchValue}
                  onValueChange={setSearchValue}
                  onFocus={() => setDestinationOpen(true)}
                  placeholder="¿A dónde viajas?"
                  className="w-full h-full focus:outline-none"
                />
              </div>
              {destinationOpen && (
                <CommandList className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto pb-2">
                  <CommandEmpty>No se encontró la ciudad.</CommandEmpty>
                  <CommandGroup>
                    {cities
                      .filter(
                        (city) =>
                          city.label
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()) ||
                          city.country
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                      )
                      .map((city) => (
                        <CommandItem
                          key={city.value}
                          value={`${city.label}, ${city.country}`}
                          onSelect={(currentValue) => {
                            setDestination(
                              currentValue === destination ? "" : currentValue
                            );
                            setSearchValue(
                              currentValue === destination ? "" : currentValue
                            );
                            setDestinationOpen(false);
                          }}
                          className="flex items-center"
                        >
                          <span className="mr-2">{city.flag}</span>
                          <span>
                            {city.label}, {city.country}
                          </span>
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </CommandList>
              )}
            </Command>
          </div>

          {/* Date Picker */}
          <div className="relative md:col-span-2 lg:col-span-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-full h-14 text-base justify-start text-left font-normal border-gray-300 rounded-xl shadow-sm"
                >
                  <CalendarIcon className="mr-3 h-5 w-5 shrink-0 opacity-50" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y", { locale: es })} -{" "}
                        {format(date.to, "LLL dd, y", { locale: es })}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y", { locale: es })
                    )
                  ) : (
                    <span>Selecciona las fechas</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                  locale={es}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="relative lg:col-span-2">
            <div className="flex items-center w-full h-14 text-base border border-gray-300 rounded-xl shadow-sm bg-white px-3">
              <Users className="mr-3 h-5 w-5 shrink-0 opacity-50" />
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                min="1"
                className="w-full h-full focus:outline-none"
                placeholder="Huéspedes"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="lg:col-span-2">
            <Button className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 rounded-xl">
              <Search className="mr-2 h-5 w-5" />
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanFinder;