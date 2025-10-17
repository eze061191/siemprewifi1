"use client";

import * as React from "react";
import { format, differenceInDays } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon, Check, Globe, Info } from "lucide-react";
import { DateRange } from "react-day-picker";
import { useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";
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
import { cities, City } from "@/data/cities";
import { GetStartedButton } from "@/components/ui/get-started-button";

const PRICE_PER_DAY = 4.36;

export const PlanFinder = () => {
  const navigate = useNavigate();
  const [dateOpen, setDateOpen] = React.useState(false);
  const [date, setDate] = React.useState<DateRange | undefined>();
  
  const [days, setDays] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const [destinationOpen, setDestinationOpen] = React.useState(false);
  const [selectedCity, setSelectedCity] = React.useState<City | null>(null);
  const [searchValue, setSearchValue] = React.useState("");
  const commandRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (date?.from && date?.to) {
      const calculatedDays = differenceInDays(date.to, date.from) + 1;
      setDays(calculatedDays > 0 ? calculatedDays : 0);
      setTotalPrice(calculatedDays > 0 ? calculatedDays * PRICE_PER_DAY : 0);
    } else {
      setDays(0);
      setTotalPrice(0);
    }
  }, [date]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (commandRef.current && !commandRef.current.contains(event.target as Node)) {
        setDestinationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [commandRef]);

  const handleDateApply = () => {
    setDateOpen(false);
  };

  const handleSelectCity = (city: City) => {
    setSelectedCity(city);
    setSearchValue(city.label);
    setDestinationOpen(false);
  };

  const handleSearchChange = (search: string) => {
    setSearchValue(search);
    if (selectedCity && search !== selectedCity.label) {
      setSelectedCity(null);
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedCity) {
      // Opcional: mostrar un error si no se selecciona destino
      alert("Por favor, selecciona un destino.");
      return;
    }
    const destination = selectedCity.value;
    const duration = days > 0 ? days : 7; // Valor por defecto si no se eligen días
    navigate(`/plans?destination=${destination}&days=${duration}`);
  };

  return (
    <div className="w-full max-w-md">
      <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">
        Encuentra tu plan ideal
      </h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Destination Search */}
        <Command ref={commandRef} className="relative overflow-visible">
          <div className="flex items-center w-full h-14 text-base border border-gray-300 rounded-xl shadow-sm bg-white px-3">
            <Globe className="mr-3 h-5 w-5 shrink-0 opacity-50" />
            <CommandInput
              value={searchValue}
              onValueChange={handleSearchChange}
              onFocus={() => setDestinationOpen(true)}
              placeholder="A dónde viajas?"
              className="w-full h-full border-none focus:ring-0 p-0 text-base"
            />
          </div>
          {destinationOpen && (
            <CommandList className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
              <CommandEmpty>No se encontró la ciudad.</CommandEmpty>
              <CommandGroup>
                {cities.map((city) => (
                  <CommandItem
                    key={city.value}
                    value={city.label}
                    onSelect={() => handleSelectCity(city)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedCity?.value === city.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {city.flag} {city.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          )}
        </Command>

        {/* Date Range Picker */}
        <Popover open={dateOpen} onOpenChange={setDateOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal h-14 text-base text-muted-foreground hover:bg-white border-gray-300 rounded-xl shadow-sm",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-3 h-5 w-5 opacity-50" />
              {days > 0 ? (
                  <span className="text-foreground">{days} {days === 1 ? 'día' : 'días'}</span>
              ) : (
                  "¿Por cuántos días?"
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-4" align="start">
            <h3 className="text-lg font-semibold text-center mb-2">Elige la fecha de tu plan</h3>
            <div className="p-3 text-sm rounded-md bg-primary/10 flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-gray-700">Tu plan comenzará una vez que llegues a tu destino y actives tu eSIM.</span>
            </div>
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              locale={es}
              disabled={{ before: new Date() }}
            />
            {days > 0 && date?.from && date?.to && (
              <div className="p-4 mt-2 bg-primary/10 rounded-lg">
                  <div className="flex justify-between items-center">
                      <div>
                          <p className="font-bold">Plan de {days} días</p>
                          <p className="text-sm text-muted-foreground">
                              {format(date.from, "d MMM", { locale: es })} - {format(date.to, "d MMM", { locale: es })}
                          </p>
                          <div className="flex items-baseline gap-2 mt-1">
                            <p className="font-bold">Total: ${totalPrice.toFixed(2)} USD</p>
                            <p className="text-sm text-muted-foreground">${PRICE_PER_DAY.toFixed(2)}/día</p>
                          </div>
                      </div>
                      <GetStartedButton onClick={handleDateApply} className="self-end">Aplicar</GetStartedButton>
                  </div>
              </div>
            )}
          </PopoverContent>
        </Popover>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-7 text-lg font-bold rounded-xl">
          Ver planes disponibles
        </Button>
      </form>
    </div>
  );
};