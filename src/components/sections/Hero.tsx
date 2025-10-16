"use client";

import { Star, Check } from "lucide-react";
import PlanFinder from "./PlanFinder";

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-[600px] text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Encuentra tu Próximo Destino
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
          Explora los mejores lugares para tu próxima aventura. ¡Planifica tu viaje soñado con nosotros!
        </p>
        <div className="flex justify-center items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
            </div>
            <span className="ml-2">5.0 (2.5k+ Reseñas)</span>
          </div>
          <div className="flex items-center">
            <Check className="w-5 h-5 text-green-400 mr-1" />
            <span>+100k Viajes Completados</span>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full px-4">
        <PlanFinder />
      </div>
    </section>
  );
};

export default Hero;