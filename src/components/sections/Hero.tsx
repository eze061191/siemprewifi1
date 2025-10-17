import React from 'react';
import { PlanFinder } from '@/components/sections/PlanFinder';
import { Globe, Zap, Shield } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gray-50 py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content (Text) */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Viaja conectado, <span className="text-primary">sin límites</span>.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Planes eSIM flexibles para más de 150 destinos. Activa en minutos y olvídate del roaming.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Globe className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Cobertura Global</h3>
                <p className="text-gray-500 text-sm">Conéctate en cualquier parte del mundo.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Zap className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Activación Instantánea</h3>
                <p className="text-gray-500 text-sm">Instala y activa tu eSIM en menos de 5 minutos.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Seguro y Confiable</h3>
                <p className="text-gray-500 text-sm">Datos de alta velocidad sin sorpresas en la factura.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content (PlanFinder) */}
        <div className="lg:w-5/12 w-full relative z-20"> {/* Añadimos relative z-20 aquí */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-200">
            <div className="mt-12">
              <PlanFinder />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background element (optional, ensure it has a low z-index) */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-primary/5 hidden lg:block z-10"></div>
    </section>
  );
}