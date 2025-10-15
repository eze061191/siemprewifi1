import { ShoppingCart, Mail, QrCode, PlaneTakeoff } from "lucide-react";

const steps = [
  {
    name: "Elige tu destino y plan",
    description: "Selecciona el país y el plan de datos que mejor se adapte a tu viaje.",
    icon: ShoppingCart,
  },
  {
    name: "Recibe tu eSIM por email",
    description: "En segundos recibirás tu eSIM con un código QR e instrucciones.",
    icon: Mail,
  },
  {
    name: "Escanea el código QR",
    description: "Activa tu eSIM escaneando el código QR desde tu teléfono.",
    icon: QrCode,
  },
  {
    name: "¡Aterriza y conéctate!",
    description: "Tu eSIM se conectará automáticamente sin configuraciones.",
    icon: PlaneTakeoff,
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 font-serif">
            Conectarte es así de fácil
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            En solo 4 simples pasos estarás conectado en cualquier parte del mundo.
          </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://drive.google.com/uc?export=view&id=1yze0Rjk9Vd96lf5w0UbdzNNs5by2Qco2" 
              alt="Activación de eSIM escaneando código QR" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <div key={step.name} className="flex items-start gap-6">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-500 relative z-10">
                    <step.icon className="h-8 w-8" />
                    <span className="absolute -top-2 -right-2 flex items-center justify-center h-8 w-8 rounded-full bg-orange-500 text-white text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="mt-1">
                  <h3 className="text-lg font-medium text-gray-900 font-serif">{step.name}</h3>
                  <p className="mt-1 text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};