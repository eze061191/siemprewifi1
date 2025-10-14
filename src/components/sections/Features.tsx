import { Wifi, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    name: "Internet sin complicaciones",
    description: "Activa tu eSIM antes de viajar y conéctate automáticamente al aterrizar. Sin buscar WiFi, sin planes locales.",
    icon: Wifi,
  },
  {
    name: "Velocidad garantizada",
    description: "4G LTE en más de 160 países con la misma velocidad que en casa. Navega, trabaja y comparte sin límites.",
    icon: Zap,
  },
  {
    name: "Conectividad Segura",
    description: "Red privada encriptada. Viaja seguro sabiendo que tus datos están protegidos en cualquier red.",
    icon: ShieldCheck,
  },
];

export const Features = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ¿Por qué elegir Siempre WIFI?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            La solución más simple y confiable para mantenerte conectado en cualquier parte del mundo
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white p-8 rounded-lg border border-gray-200 text-center shadow-sm">
                <feature.icon className="h-10 w-10 text-orange-500 mx-auto" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-gray-500">
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