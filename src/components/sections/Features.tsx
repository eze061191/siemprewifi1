import { Globe, Wifi, Smartphone, ShieldCheck } from "lucide-react";

const features = [
  {
    name: "Conexión Global",
    description: "Cobertura en más de 160 países para que nunca te desconectes.",
    icon: Globe,
  },
  {
    name: "eSIM y SIM Física",
    description: "Elige la opción que mejor se adapte a tu dispositivo y necesidades.",
    icon: Smartphone,
  },
  {
    name: "Fácil de Instalar",
    description: "Activa tu plan en minutos con un simple código QR o insertando la SIM.",
    icon: Wifi,
  },
  {
    name: "Soporte 24/7",
    description: "Nuestro equipo está disponible para ayudarte en cualquier momento.",
    icon: ShieldCheck,
  },
];

export const Features = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Todo lo que necesitas para tu viaje
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Disfruta de una conexión a internet rápida y segura donde quiera que
            vayas.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-orange-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};