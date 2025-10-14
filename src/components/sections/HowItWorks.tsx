import { ScanLine, ShoppingCart, Wifi } from "lucide-react";

const steps = [
  {
    name: "Elige tu destino",
    description: "Selecciona el país o región a la que viajas y elige el plan de datos que necesitas.",
    icon: ShoppingCart,
  },
  {
    name: "Recibe tu QR",
    description: "Recibirás un código QR por email al instante para instalar tu eSIM. Sin esperas.",
    icon: ScanLine,
  },
  {
    name: "Activa y navega",
    description: "Escanea el QR, activa tu plan de datos y ¡listo! Ya estás conectado al aterrizar.",
    icon: Wifi,
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Conéctate en 3 simples pasos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Empezar a usar tu eSIM de Siempre WIFI es rápido y sencillo.
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.name} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500 text-white text-2xl font-bold">
                {index + 1}
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">{step.name}</h3>
                <p className="mt-2 text-base text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};