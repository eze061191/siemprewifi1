import { Star, Check } from "lucide-react";
import PlanFinder from "./PlanFinder";

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] bg-cover bg-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <video
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        autoPlay
        muted
        loop
        playsInline
        src="/videos/hero-video.mp4"
      ></video>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Encuentra tu Próximo Destino
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Explora los mejores lugares para tu aventura. Reserva vuelos, hoteles
          y tours de manera fácil y segura.
        </p>

        <div className="w-full max-w-4xl">
          <PlanFinder />
        </div>

        <div className="mt-8 flex items-center space-x-4">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
          <p className="text-sm">Basado en +5,000 reseñas</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;