"use client";

import * as React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const destinations = [
    "Estados Unidos", "Canadá", "México", "Brasil", "Argentina", "Reino Unido", "Alemania", "Francia", "Italia", "España", "Japón", "China", "Australia"
];

export const PriceCalculator = () => {
  const [date, setDate] = React.useState<DateRange | undefined>();

  return (
    <Card className="shadow-2xl border-primary/20 border">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Calcula tu Precio</CardTitle>
        <CardDescription>
          Elige tu destino y fechas para obtener una cotización instantánea
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="destination">Destino</Label>
            <Select>
              <SelectTrigger id="destination" className="w-full focus:ring-primary">
                <SelectValue placeholder="Selecciona tu destino" />
              </SelectTrigger>
              <SelectContent>
                {destinations.map((dest) => (
                    <SelectItem key={dest} value={dest}>{dest}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="dates">Fechas de Uso</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="dates"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal hover:bg-primary/5",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
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
          <div className="space-y-2">
            <Label htmlFor="routers">Cantidad de Routers</Label>
            <Input id="routers" type="number" defaultValue={1} className="focus:ring-primary" />
            <p className="text-xs text-muted-foreground">
              Máximo 10 routers por reserva
            </p>
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-bold">
            Alquilar ahora
          </Button>
        </form>
        <p className="mt-6 text-center text-sm">
          ¿Viajas a múltiples destinos?{" "}
          <a href="#" className="font-semibold text-primary hover:underline">
            Contáctanos para un plan personalizado
          </a>
        </p>
      </CardContent>
    </Card>
  );
};