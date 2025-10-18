"use client";

import * as React from "react";
import { format, differenceInDays } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon, Check, Globe, Info, MapPin, Earth } from "lucide-react";
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
import { Destination, allDestinations, DestinationType } from "@/data/all-destinations";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label"; // Importar Label

const PRICE_PER_DAY = 4.36;

export const PlanFinder = () => {
  const navigate = useNavigate();
  const [dateOpen, setDateOpen] = React.useState(false);
  const [date, setDate] = React.useState<DateRange | undefined>();
  
  const [days, setDays] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const [destinationOpen, setDestinationOpen] = React.useState(false);
  const [selectedDestination, setSelectedDestination] = React.useState<Destination | null>(null);
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

  const handleSelectDestination = (destination: Destination) => {
    setSelectedDestination(destination);
    setSearchValue(destination.label);
    setDestinationOpen(false);
  };

  const handleSearchChange = (search: string) => {
    setSearchValue(search);
    if (selectedDestination && search !== selectedDestination.label) {
      setSelectedDestination(null);
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedDestination) {
      // Opcional: mostrar un error si no se selecciona destino
      alert("Por favor, selecciona un destino.");
      return;
    }
    const destinationValue = selectedDestination.value;
    // Redirigir a la nueva página de detalle del plan
    navigate(`/plans/${destinationValue}`);
  };

  const getIconForType = (type: DestinationType) => {
    switch (type) {
      case 'Ciudad':
        return <MapPin className="h-4 w-4 text-blue-500" />;
      case 'Región':
        return <Earth className="h-4 w-4 text-green-500" />;
      case 'País':
      default:
        return <Globe className="h-4 w-4 text-primary" />;
    }
  }

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
            <CommandList className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-[52] max-h-60 overflow-y-auto">
              <CommandEmpty>No se encontró el destino.</CommandEmpty>
              <CommandGroup>
                {allDestinations.map((dest) => (
                  <CommandItem
                    key={dest.value}
                    value={dest.label}
                    onSelect={() => handleSelectDestination(dest)}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center gap-2">
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedDestination?.value === dest.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {dest.flag ? (
                        <span className="mr-2">{dest.flag}</span>
                      ) : (
                        <span className="mr-2">{getIconForType(dest.type)}</span>
                      )}
                      {dest.label}
                    </div>
                    <Badge variant="secondary" className="text-xs font-normal">
                      {dest.type}
                    </Badge>
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
      </form>
    </div>
  );
};