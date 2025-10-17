import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, Info } from "lucide-react";
import { DateRange } from "react-day-picker";
import { format, addDays } from "date-fns";
import { es } from "date-fns/locale";

// Simulación de datos de planes
const plans = [
  { id: 1, duration: 8, price: 19.99, data: "5 GB" },
  { id: 2, duration: 15, price: 29.99, data: "10 GB" },
  { id: 3, duration: 30, price: 49.99, data: "20 GB" },
];

type Plan = typeof plans[0];

export const PlanSelector = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(plans[0]);
  const [date, setDate] = useState<DateRange | undefined>(undefined);

  useEffect(() => {
    // Si se selecciona un plan y no hay fecha, o si la fecha no coincide con la duración, se limpia la fecha.
    if (selectedPlan) {
      setDate(undefined);
    }
  }, [selectedPlan]);

  const handleDateSelect = (range: DateRange | undefined) => {
    if (range?.from && selectedPlan) {
      const endDate = addDays(range.from, selectedPlan.duration - 1);
      setDate({ from: range.from, to: endDate });
    } else {
      setDate(range);
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
            Elige tu Plan y Fecha de Inicio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Columna de selección de plan */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">
                1. Selecciona un plan
              </h3>
              {plans.map((plan) => (
                <Card
                  key={plan.id}
                  className={cn(
                    "cursor-pointer transition-all",
                    selectedPlan?.id === plan.id
                      ? "border-orange-500 ring-2 ring-orange-500"
                      : "border-gray-200 hover:border-gray-400"
                  )}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{plan.duration} Días - {plan.data}</span>
                      <span className="text-orange-500">${plan.price}</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Columna de selección de fecha */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">
                2. Elige la fecha de inicio
              </h3>
              <Card>
                <CardContent className="pt-6">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal h-12 text-base",
                          !date && "text-muted-foreground"
                        )}
                        disabled={!selectedPlan}
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
                          <span>Selecciona una fecha</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <div className="p-3 text-sm text-gray-600 bg-gray-50 flex items-center border-b">
                        <Info className="h-4 w-4 mr-2 text-orange-500 flex-shrink-0" />
                        <span>Tu plan comenzará una vez que llegues a tu destino y actives tu eSIM.</span>
                      </div>
                      {date?.from && date?.to && selectedPlan && (
                        <div className="p-3 bg-orange-100 text-orange-900">
                          <p className="font-bold text-sm">Plan de {selectedPlan.duration} días</p>
                          <div className="text-xs mt-1 space-y-1">
                            <p>
                              <span className="font-semibold">Fecha de inicio:</span>{' '}
                              {format(date.from, "d 'de' LLLL 'de' yyyy", { locale: es })}
                            </p>
                            <p>
                              <span className="font-semibold">Fecha de fin:</span>{' '}
                              {format(date.to, "d 'de' LLLL 'de' yyyy", { locale: es })}
                            </p>
                          </div>
                        </div>
                      )}
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={handleDateSelect}
                        numberOfMonths={1}
                        disabled={(day) =>
                          day < new Date(new Date().setDate(new Date().getDate() - 1))
                        }
                      />
                    </PopoverContent>
                  </Popover>
                  {!selectedPlan && (
                    <p className="text-sm text-red-500 mt-2">
                      Por favor, selecciona un plan primero.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-6"
              disabled={!selectedPlan || !date}
            >
              Añadir al carrito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};