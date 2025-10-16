"use client";

import * as React from "react";
import { format, differenceInDays } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon, Check, ChevronsUpDown, Globe } from "lucide-react";
import { DateRange } from "react-day-picker";

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
import { destinations, Destination } from "@/data/destinations";

const PRICE_PER_DAY = 4.36;

export const PlanFinder = () => {
  const [destinationOpen, setDestinationOpen] = React.useState(false);
  const [dateOpen, setDateOpen] = React.useState(false);
  
  const [selectedDestination, setSelectedDestination] = React.useState<Destination | null>(null);
  const [date, setDate] = React.useState<DateRange | undefined>();
  
  const [days, setDays] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

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

  const handleDateApply = () => {
    setDateOpen(false);
  };

  return (
    <div className="w-full max-w-md">
      <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">
        Encuentra tu plan ideal
      </h3>
      <div className="space-y-3">
        {/* Destination Picker */}
        <Popover open={destinationOpen} onOpenChange={setDestinationOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={destinationOpen}
              className="w-full justify-between h-14 text-base text-muted-foreground hover:bg-white border-gray-300 rounded-xl shadow-sm"
            >
              <div className="flex items-center">
                <Globe className="mr-3 h-5 w-5 shrink-0 opacity-50" />
                {selectedDestination
                  ? <span className="text-foreground">{selectedDestination.flag} {selectedDestination.label}</span>
                  : "A dónde viajas?"}
              </div>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
            <Command>
              <CommandInput placeholder="Busca un país..." />
              <CommandList>
                <CommandEmpty>No se encontró el destino.</CommandEmpty>
                <CommandGroup>
                  {destinations.map((destination) => (
                    <CommandItem
                      key={destination.value}
                      value={destination.label}
                      onSelect={() => {
                        setSelectedDestination(destination);
                        setDestinationOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedDestination?.value === destination.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {destination.flag} {destination.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Date Range Picker */}
        <Popover open={dateOpen} onOpenChange={setDateOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-full justify-between text-left font-normal h-14 text-base text-muted-foreground hover:bg-white border-gray-300 rounded-xl shadow-sm",
                !date && "text-muted-foreground"
              )}
            >
              <div className="flex items-center">
                  <CalendarIcon className="mr-3 h-5 w-5 opacity-50" />
                  {days > 0 ? (
                      <span className="text-foreground">{days} {days === 1 ? 'día' : 'días'}</span>
                  ) : (
                      "¿Por cuántos días?"
                  )}
              </div>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
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
              disabled={{ before: new Date() }}
            />
            {days > 0 && date?.from && date?.to && (
              <div className="p-4 border-t">
                  <p className="font-bold text-lg">Plan de {days} días</p>
                  <p className="text-sm text-muted-foreground">
                      {format(date.from, "d MMM", { locale: es })} - {format(date.to, "d MMM", { locale: es })}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                      <div>
                          <span className="font-bold text-lg">Total: ${totalPrice.toFixed(2)} USD</span>
                          <span className="text-sm text-muted-foreground ml-2">${PRICE_PER_DAY.toFixed(2)}/día</span>
                      </div>
                      <Button onClick={handleDateApply} className="bg-primary hover:bg-primary/90">Aplicar</Button>
                  </div>
              </div>
            )}
          </PopoverContent>
        </Popover>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-7 text-lg font-bold rounded-xl">
          Ver planes disponibles
        </Button>
      </div>
    </div>
  );
};