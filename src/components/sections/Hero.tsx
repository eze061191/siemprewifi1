import { PlanFinder } from "./PlanFinder";

export const Hero = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat z-10" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-4 py-24 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Mantente conectado en cualquier parte del mundo
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Planes de datos eSIM para tu próximo viaje. Sin contratos, sin cargos ocultos.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-2xl w-full max-w-md">
            <div>
              <PlanFinder />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};