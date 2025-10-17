import { Star, Check } from "lucide-react";
import PlanFinder from "./PlanFinder";

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2024/05/23/211532-945341284_large.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          Encuentra tu Próximo Destino
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mb-8">
          Explora los mejores lugares para tu próxima aventura.
        </p>
        <div className="flex items-center space-x-4 text-yellow-400 mb-8">
          <div className="flex items-center">
            <Star fill="currentColor" className="w-6 h-6" />
            <Star fill="currentColor" className="w-6 h-6" />
            <Star fill="currentColor" className="w-6 h-6" />
            <Star fill="currentColor" className="w-6 h-6" />
            <Star fill="currentColor" className="w-6 h-6" />
          </div>
          <span className="text-white text-lg">Basado en 500+ reviews</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full px-4">
        <PlanFinder />
      </div>
    </section>
  );
};

export default Hero;