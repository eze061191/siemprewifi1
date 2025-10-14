import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Database } from "lucide-react";

// Mock data for plans
const MOCK_PLANS = [
  { id: 1, data: "5 GB", validity: "7 Días", price: "19.00" },
  { id: 2, data: "10 GB", validity: "15 Días", price: "29.00" },
  { id: 3, data: "20 GB", validity: "30 Días", price: "49.00" },
  { id: 4, data: "Ilimitado", validity: "30 Días", price: "79.00" },
];

const Plans = () => {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination") || "tu destino";

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Planes de eSIM para <span className="capitalize text-orange-500">{destination}</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Elige el plan que mejor se adapte a tu viaje y mantente conectado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_PLANS.map((plan) => (
              <Card key={plan.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-orange-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2"><Database /> {plan.data}</CardTitle>
                  <CardDescription className="text-orange-100 flex items-center gap-2"><Calendar /> {plan.validity}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 flex-grow flex flex-col justify-between">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-gray-900">${plan.price}</p>
                    <p className="text-sm text-gray-500">USD</p>
                  </div>
                  <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">
                    Comprar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Plans;