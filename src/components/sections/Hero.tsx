import { PlanFinder } from "./PlanFinder";

export const Hero = () => {
  return (
    <section className="relative w-full bg-cover bg-center py-20 md:py-32 z-20" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mantente conectado en cualquier parte del mundo
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Con nuestras eSIMs, obtén datos móviles de alta velocidad en más de 200 destinos. Sin contratos, sin cargos ocultos.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
              <PlanFinder />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};