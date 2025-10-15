"use client";

import * as React from "react";
import { format, differenceInDays } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon, CheckCircle } from "lucide-react";
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

const PRICE_PER_DAY_PER_ROUTER = 6.8; // Precio base por día
const DISCOUNT_THRESHOLD_DAYS = 14; // Días para aplicar descuento
const DISCOUNT_PERCENTAGE = 0.10; // 10% de descuento

export const PriceCalculator = () => {
  const [date, setDate] = React.useState<DateRange | undefined>();
  const [routers, setRouters] = React.useState(1);
  const [estimatedPrice, setEstimatedPrice] = React.useState<number | null>(null);
  const [days, setDays] = React.useState(0);
  const [discountApplied, setDiscountApplied] = React.useState(false);

  React.useEffect(() => {
    if (date?.from && date?.to && routers > 0) {
      const calculatedDays = differenceInDays(date.to, date.from) + 1;
      setDays(calculatedDays);

      let total = calculatedDays * routers * PRICE_PER_DAY_PER_ROUTER;
      
      if (calculatedDays >= DISCOUNT_THRESHOLD_DAYS) {
        total *= (1 - DISCOUNT_PERCENTAGE);
        setDiscountApplied(true);
      } else {
        setDiscountApplied(false);
      }

      setEstimatedPrice(total);
    } else {
      setEstimatedPrice(null);
      setDays(0);
      setDiscountApplied(false);
    }
  }, [date, routers]);

  const handleRoutersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0 && value <= 10) {
      setRouters(value);
    } else if (e.target.value === "") {
      setRouters(0);
    }
  };

  return (
    <Card className="shadow-2xl border-primary/20 border">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Calcula tu Precio</CardTitle>
        <CardDescription>
          Elige tu destino y fechas para obtener una cotización instantánea
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
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
                        {format(date.from, "dd/MM/yyyy", { locale: es })} -{" "}
                        {format(date.to, "dd/MM/yyyy", { locale: es })}
                      </>
                    ) : (
                      format(date.from, "dd/MM/yyyy", { locale: es })
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
            <Input id="routers" type="number" value={routers} onChange={handleRoutersChange} min={1} max={10} className="focus:ring-primary" />
            <p className="text-xs text-muted-foreground">
              Máximo 10 routers por reserva
            </p>
          </div>

          {estimatedPrice !== null && (
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600">Precio estimado</p>
              <p className="text-4xl font-bold text-primary my-1">
                ${estimatedPrice.toFixed(2)} USD
              </p>
              <p className="text-sm text-gray-500">
                {days} {days === 1 ? 'día' : 'días'} · {routers} {routers === 1 ? 'router' : 'routers'}
              </p>
              {discountApplied && (
                <p className="mt-2 flex items-center justify-center gap-1 text-sm text-green-600 font-semibold">
                  <CheckCircle className="h-4 w-4" /> 10% descuento aplicado
                </p>
              )}
            </div>
          )}

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-bold">
            Alquilar ahora
          </Button>
        </div>
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