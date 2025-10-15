import { Button } from "@/components/ui/button";
import { Users, FileText, Headset, TrendingUp } from "lucide-react";

const features = [
  {
    name: "Gestión centralizada de múltiples líneas",
    description: "Panel único para administrar todo tu equipo",
    icon: Users,
  },
  {
    name: "Facturación corporativa mensual",
    description: "Simplifica tu contabilidad con una sola factura",
    icon: FileText,
  },
  {
    name: "Soporte dedicado 24/7",
    description: "Equipo especializado para empresas",
    icon: Headset,
  },
  {
    name: "Descuentos por volumen desde 10 líneas",
    description: "Ahorra más mientras creces",
    icon: TrendingUp,
  },
];

export const BusinessSolutions = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold">
              Soluciones empresariales para <span className="text-primary">equipos globales</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Gestiona las conexiones de todo tu equipo desde un solo panel. Facturación centralizada y soporte prioritario.
            </p>
            <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Solicitar Demo
            </Button>
          </div>
          <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center h-64">
            <Users className="h-20 w-20 text-primary" />
            <p className="mt-4 text-xl font-bold">Equipos Conectados</p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-gray-900 p-6 rounded-lg text-center">
              <feature.icon className="h-10 w-10 text-primary mx-auto" />
              <h3 className="mt-4 font-bold">{feature.name}</h3>
              <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};