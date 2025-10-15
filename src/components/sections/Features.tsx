import { Wifi, BatteryCharging, Users, Globe, ShieldCheck, Smartphone } from "lucide-react";

const features = [
  {
    name: "Conexión Global",
    description: "Internet 4G LTE en más de 160 países sin cambiar de SIM.",
    icon: Globe,
  },
  {
    name: "Batería de Larga Duración",
    description: "Hasta 15 horas de uso continuo para que nunca te desconectes.",
    icon: BatteryCharging,
  },
  {
    name: "Comparte con Amigos",
    description: "Conecta hasta 5 dispositivos simultáneamente.",
    icon: Users,
  },
  {
    name: "Fácil de Usar",
    description: "Recibe tu router listo para encender y navegar.",
    icon: Smartphone,
  },
  {
    name: "Internet Seguro",
    description: "Conexión privada y segura para proteger tus datos.",
    icon: ShieldCheck,
  },
  {
    name: "Sin Contratos",
    description: "Alquila por los días que necesites, sin compromisos a largo plazo.",
    icon: Wifi,
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas para tu viaje
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Nuestro servicio está diseñado para ofrecerte la mejor experiencia de conexión, dondequiera que vayas.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="bg-white p-8 rounded-lg border border-gray-200 text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                  <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};