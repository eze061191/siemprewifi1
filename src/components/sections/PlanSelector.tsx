import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, InfinityIcon, Zap, ShieldCheck, Check, Calendar as CalendarIcon, Minus, Plus, Info, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { format, differenceInDays } from "date-fns";
import { es } from "date-fns/locale";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label"; // Importación de Label

interface PlanSelectorProps {
    destinationName: string;
    pricePerDay: number;
    basePrice: number;
    imageSrc: string;
}

const PRICE_PER_DAY = 5.99; // Precio de ejemplo
const DEFAULT_DAYS = 8;

export const PlanSelector: React.FC<PlanSelectorProps> = ({ destinationName, imageSrc }) => {
    const [days, setDays] = useState(DEFAULT_DAYS);
    const [esimCount, setEsimCount] = useState(1);
    const [dateOpen, setDateOpen] = useState(false);
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: new Date(new Date().setDate(new Date().getDate() + DEFAULT_DAYS - 1)),
    });

    const calculatedDays = date?.from && date?.to ? differenceInDays(date.to, date.from) + 1 : days;
    const totalPrice = calculatedDays * PRICE_PER_DAY * esimCount;

    const handleDateApply = () => {
        if (date?.from && date?.to) {
            setDays(calculatedDays);
        }
        setDateOpen(false);
    };

    const handleEsimCountChange = (change: number) => {
        setEsimCount(prev => Math.max(1, prev + change));
    };

    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <a href="/" className="hover:underline">Inicio</a>
                    <span className="mx-2">/</span>
                    <a href="/destinations" className="hover:underline">Destinos</a>
                    <span className="mx-2">/</span>
                    <span className="font-semibold capitalize">{destinationName}</span>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Columna Izquierda: Imagen y Detalles */}
                    <div className="lg:col-span-2">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Imagen */}
                            <div>
                                <img 
                                    src={imageSrc} 
                                    alt={`eSIM en ${destinationName}`} 
                                    className="w-full h-auto rounded-xl shadow-lg object-cover"
                                />
                            </div>
                            
                            {/* Título y Reseñas */}
                            <div>
                                <h1 className="text-4xl font-extrabold text-gray-900 capitalize">
                                    eSIM en {destinationName}
                                </h1>
                                <div className="mt-3 flex items-center gap-2">
                                    <span className="font-bold text-lg text-green-600">Excelente</span>
                                    <div className="flex text-green-500">
                                        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5" />)}
                                    </div>
                                    <span className="text-sm text-muted-foreground">Basado en 66,788 reseñas</span>
                                </div>

                                <div className="mt-6 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <InfinityIcon className="h-5 w-5 text-primary" />
                                        <span className="text-gray-700 font-medium">Datos ilimitados</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Zap className="h-5 w-5 text-primary" />
                                        <span className="text-gray-700 font-medium">Internet rápido y confiable</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="h-5 w-5 text-primary" />
                                        <span className="text-gray-700 font-medium">No más cargos por roaming</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button variant="outline" className="w-full justify-start text-base py-6">
                                        <Check className="h-5 w-5 text-green-500 mr-3" />
                                        Detalles de la eSIM
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start text-base py-6 mt-3">
                                        <Globe className="h-5 w-5 text-primary mr-3" />
                                        Cobertura
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start text-base py-6 mt-3">
                                        <Info className="h-5 w-5 text-blue-500 mr-3" />
                                        Verificar compatibilidad
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Selector de Plan (Sticky) */}
                    <div className="lg:col-span-1 sticky top-24 h-fit">
                        <Card className="shadow-xl border-2 border-green-200">
                            <CardHeader className="pb-4">
                                <div className="flex justify-between items-center">
                                    <CardTitle className="text-2xl font-bold text-gray-900">
                                        {totalPrice.toFixed(2)}€
                                    </CardTitle>
                                    <Badge variant="secondary" className="text-lg font-semibold">
                                        EUR (€)
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="p-3 rounded-lg bg-green-50 border border-green-200 flex items-center gap-2">
                                    <InfinityIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                                    <span className="text-sm text-green-800 font-medium">Disfruta de datos ilimitados</span>
                                </div>

                                {/* Selector de Días */}
                                <div>
                                    <Label htmlFor="days-selector" className="font-semibold text-gray-700">Número de días</Label>
                                    <p className="text-xs text-muted-foreground mb-2">¡Más días, menor precio!</p>
                                    <Popover open={dateOpen} onOpenChange={setDateOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                id="days-selector"
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full justify-start text-left font-normal h-12 text-base text-foreground border-gray-300 rounded-lg shadow-sm",
                                                )}
                                            >
                                                <CalendarIcon className="mr-3 h-5 w-5 opacity-50" />
                                                {calculatedDays} {calculatedDays === 1 ? 'día' : 'días'}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-4" align="start">
                                            <h3 className="text-lg font-semibold text-center mb-2">Elige la duración de tu plan</h3>
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
                                            {date?.from && date?.to && (
                                                <div className="p-4 mt-2 bg-primary/10 rounded-lg">
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            <p className="font-bold">Plan de {calculatedDays} días</p>
                                                            <p className="text-sm text-muted-foreground">
                                                                {format(date.from, "d MMM", { locale: es })} - {format(date.to, "d MMM", { locale: es })}
                                                            </p>
                                                        </div>
                                                        <Button onClick={handleDateApply} className="self-end">Aplicar</Button>
                                                    </div>
                                                </div>
                                            )}
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                {/* Selector de eSIMs */}
                                <div>
                                    <Label htmlFor="esim-count" className="font-semibold text-gray-700">Número de eSIMs</Label>
                                    <p className="text-xs text-muted-foreground mb-2">¿Cuántos viajeros?</p>
                                    <div className="flex items-center justify-between border border-gray-300 rounded-lg h-12">
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            onClick={() => handleEsimCountChange(-1)}
                                            disabled={esimCount <= 1} // Usamos 'disabled' ya que es el estándar HTML y la mayoría de las implementaciones de shadcn/ui lo usan. Si el error persiste, significa que la implementación local de Button requiere 'isDisabled'.
                                        >
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="font-semibold">{esimCount}</span>
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            onClick={() => handleEsimCountChange(1)}
                                        >
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <Separator />

                                {/* Total y Botón de Compra */}
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold">Total</span>
                                    <div className="text-right">
                                        <span className="text-2xl font-extrabold text-gray-900">{totalPrice.toFixed(2)}€</span>
                                        <p className="text-sm text-muted-foreground">
                                            {calculatedDays} días, {esimCount} eSIM
                                            <span className="ml-2 text-primary font-semibold">
                                                ({(totalPrice / calculatedDays / esimCount).toFixed(2)}€/día)
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-7 text-lg font-bold rounded-xl">
                                    Obtén internet ilimitado
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};