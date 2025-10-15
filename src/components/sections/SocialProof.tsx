import { Button } from "@/components/ui/button";
import { Users, Wifi, ShieldCheck } from "lucide-react";

const features = [
    {
        name: "Hasta 5 dispositivos simultáneos",
        description: "Conecta varios dispositivos al mismo tiempo sin perder velocidad",
        icon: Users,
    },
    {
        name: "Hotspot incluido sin costo extra",
        description: "Todos nuestros planes incluyen función hotspot automáticamente",
        icon: Wifi,
    },
    {
        name: "Red segura y privada",
        description: "Tu conexión compartida está protegida con encriptación de grado empresarial",
        icon: ShieldCheck,
    },
];

export const SocialProof = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/Post - 5 amigos conectados a un WIFI.png" 
              alt="Amigos conectados a un WIFI para todos sus viajes" 
              className="rounded-lg shadow-2xl object-cover w-full"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Un dispositivo, hasta <span className="text-primary">5 conexiones</span>
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Comparte tu internet con amigos, familia o compañeros de viaje. Sin cargos adicionales.
            </p>
            <div className="mt-8 space-y-6">
                {features.map((feature) => (
                    <div key={feature.name} className="flex items-start gap-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">{feature.name}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-8 text-lg rounded-md">
                Ver planes con hotspot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};