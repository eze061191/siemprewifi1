import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "29",
    description: "Para viajeros ocasionales",
    data: "5GB",
    features: [
      "5GB de datos 4G LTE",
      "Válido por 15 días",
      "Cobertura en 160+ países",
      "Activación instantánea",
      "Soporte por email",
    ],
    isPopular: false,
  },
  {
    name: "Viajero",
    price: "49",
    description: "Lo más elegido",
    data: "10GB",
    features: [
      "10GB de datos 4G LTE",
      "Válido por 30 días",
      "Cobertura en 160+ países",
      "Activación instantánea",
      "Soporte prioritario 24/7",
      "Recarga disponible",
    ],
    isPopular: true,
  },
  {
    name: "Ilimitado",
    price: "79",
    description: "Para nómadas digitales",
    data: "Ilimitado",
    features: [
      "Datos ilimitados 4G LTE",
      "Válido por 30 días",
      "Cobertura en 160+ países",
      "Soporte prioritario 24/7",
      "Recarga disponible",
      "Hotspot incluido",
    ],
    isPopular: false,
  },
];

export const Pricing = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 font-serif">
            Planes diseñados para cada tipo de viajero
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Elige el plan que mejor se adapte a tus necesidades de viaje
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-8 items-start">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col rounded-lg shadow-lg ${plan.isPopular ? "border-2 border-orange-500 relative" : "border"}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MÁS POPULAR
                </div>
              )}
              <CardHeader className="text-center pt-10">
                <CardTitle className="text-2xl font-bold font-serif">{plan.name}</CardTitle>
                <p className="text-4xl font-extrabold text-gray-900 mt-4 font-serif">
                  ${plan.price}
                  <span className="text-lg font-medium text-gray-500">/mes</span>
                </p>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
                <p className="mt-4 text-xl font-bold text-orange-500">{plan.data}</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-6">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full py-3 text-lg ${plan.isPopular ? "bg-orange-500 hover:bg-orange-600 text-white" : "bg-white hover:bg-gray-100 text-orange-500 border border-orange-500"}`}
                >
                  Elegir Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};