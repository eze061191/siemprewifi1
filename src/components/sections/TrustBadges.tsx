import { ShieldCheck, Truck, Tag } from "lucide-react";

const items = [
  {
    name: "Compra Segura",
    icon: ShieldCheck,
  },
  {
    name: "Envío Gratis",
    icon: Truck,
  },
  {
    name: "Sin Cargos Ocultos",
    icon: Tag,
  },
];

export const TrustBadges = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
          {items.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <item.icon className="h-6 w-6 text-primary" />
              <span className="text-gray-700 font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};