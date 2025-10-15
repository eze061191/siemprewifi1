import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const countries = {
  america: ["Estados Unidos", "Canadá", "México", "Brasil", "Argentina", "Chile", "Colombia", "Perú"],
  europa: ["Reino Unido", "Alemania", "Francia", "Italia", "España", "Portugal", "Países Bajos", "Suiza"],
  asia: ["Japón", "China", "Corea del Sur", "Tailandia", "Singapur", "India", "Vietnam", "Malasia"],
  africa: ["Sudáfrica", "Egipto", "Marruecos", "Kenia", "Nigeria", "Tanzania", "Ghana", "Etiopía"],
  oceania: ["Australia", "Nueva Zelanda", "Fiyi", "Papúa Nueva Guinea", "Samoa", "Tonga", "Vanuatu", "Islas Salomón"],
};

export const Coverage = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Cobertura global en más de 160 países
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Mantente conectado en los destinos más populares del mundo
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto bg-primary/5 rounded-lg p-8 text-center">
          <Globe className="h-20 w-20 text-primary mx-auto" />
          <p className="mt-4 text-lg font-semibold text-gray-800">Conectividad en los 5 continentes</p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <Tabs defaultValue="america" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5">
              <TabsTrigger value="america">América</TabsTrigger>
              <TabsTrigger value="europa">Europa</TabsTrigger>
              <TabsTrigger value="asia">Asia</TabsTrigger>
              <TabsTrigger value="africa">África</TabsTrigger>
              <TabsTrigger value="oceania">Oceanía</TabsTrigger>
            </TabsList>
            {Object.entries(countries).map(([continent, list]) => (
              <TabsContent key={continent} value={continent}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {list.map((country) => (
                    <Button key={country} variant="outline" className="justify-start">
                      {country}
                    </Button>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div className="text-center mt-12">
          <Button variant="outline">Ver lista completa de países</Button>
        </div>
      </div>
    </section>
  );
};