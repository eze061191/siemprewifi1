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
          <h2 className="text-3xl font-extrabold text-gray-900">
            Conectarte es así de fácil
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            En solo 4 simples pasos estarás conectado en cualquier parte del mundo.
          </p>
        </div>
        <div className="mt-20">
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {steps.map((step, index) => (
                <div key={step.name} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white border-2 border-gray-200 text-primary relative z-10">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <span className="absolute -top-2 -right-2 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">{step.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};