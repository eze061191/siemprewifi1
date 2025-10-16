import { Button } from "@/components/ui/button";
import { Star, Check } from "lucide-react";
import { PlanFinder } from "./PlanFinder";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Viaja conectado a más de{" "}
              <span className="text-primary">160 países</span> sin cambiar de
              SIM
            </h1>
            <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-500">
              Internet 4G LTE ilimitado desde el momento que aterrizas. Sin
              sorpresas, sin roaming.
            </p>
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2">
              <div className="flex text-primary">
                <Star fill="currentColor" className="h-5 w-5" />
                <Star fill="currentColor" className="h-5 w-5" />
                <Star fill="currentColor" className="h-5 w-5" />
                <Star fill="currentColor" className="h-5 w-5" />
                <Star fill="currentColor" className="h-5 w-5" />
              </div>
              <p className="text-gray-600 font-medium">
                4.8/5 - Más de 15,000 viajeros conectados
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-8 text-lg rounded-md">
                Ver Planes y Precios
              </Button>
              <Button variant="outline" className="w-full sm:w-auto py-3 px-8 text-lg rounded-md border-gray-300">
                Cómo Funciona
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-x-6 gap-y-2 flex-wrap">
                <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Activación Instantánea</span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Sin Contratos</span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Soporte 24/7</span>
                </div>
            </div>
            <div className="mt-12">
              <PlanFinder />
            </div>
          </div>
          <div>
            <img 
              src="/Post - Conectividad global al alcance de tu mano.png" 
              alt="Conectividad global al alcance de tu mano" 
              className="rounded-lg shadow-2xl object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};