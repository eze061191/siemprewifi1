import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Faq } from "@/components/sections/Faq";
import { QuantityInput } from "@/components/ui/quantity-input";
import { Star, Minus, Plus } from 'lucide-react';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { PlanInfoTabs } from '@/components/ui/plan-info-tabs';
import { PaymentInfo } from '@/components/sections/PaymentInfo';

const PlanDetails = () => {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get('destination') || 'Destino';
  const days = searchParams.get('days') || '7';

  const [numDays, setNumDays] = React.useState(parseInt(days, 10));
  const [numESims, setNumESims] = React.useState(1);

  const pricePerDay = 5.99;
  const total = numDays * numESims * pricePerDay;

  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Destinos</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="capitalize">{destination}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid lg:grid-cols-4 gap-8 mt-8">
          {/* Columna Izquierda */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <img src="/Post - Conectividad global al alcance de tu mano.png" alt="Mujer en la playa" className="object-cover w-full h-full" />
                <div className="p-8 flex flex-col">
                  <h1 className="text-3xl font-extrabold capitalize">eSIM en {destination}</h1>
                  <div className="flex items-center gap-2 mt-2 mb-6">
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5" />)}
                    </div>
                    <p className="text-gray-600 font-medium">Excelente</p>
                  </div>
                  
                  <PlanInfoTabs destination={destination} />

                </div>
              </div>
            </Card>
          </div>

          {/* Columna Derecha */}
          <div className="lg:col-span-1">
            <Card className="shadow-2xl border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Disfruta de datos ilimitados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="font-semibold">Número de días</label>
                  <p className="text-sm text-muted-foreground">¡Más días, menor precio!</p>
                  <div className="flex items-center justify-between mt-2 border rounded-lg p-2">
                    <Button variant="ghost" size="icon" onClick={() => setNumDays(d => Math.max(1, d - 1))}><Minus/></Button>
                    <span className="text-lg font-bold">{numDays} días</span>
                    <Button variant="ghost" size="icon" onClick={() => setNumDays(d => d + 1)}><Plus/></Button>
                  </div>
                </div>
                <div>
                  <label className="font-semibold">Número de eSIMs</label>
                  <p className="text-sm text-muted-foreground">¿Cuántos viajeros?</p>
                  <div className="flex justify-center mt-2">
                    <QuantityInput value={numESims} onChange={setNumESims} />
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Total</span>
                  <div className="text-right">
                    <p className="text-2xl font-extrabold">${total.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground">${pricePerDay.toFixed(2)}/día</p>
                  </div>
                </div>
                <Button size="lg" className="w-full py-6 text-lg">Obtén internet ilimitado</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <PaymentInfo />
      <HowItWorks />
      <Faq />
    </div>
  );
};

export default PlanDetails;