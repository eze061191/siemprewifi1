import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Car, Facebook, Home, Mail, Music } from "lucide-react";

const AppIcon = ({ icon: Icon, name }: { icon: React.ElementType, name: string }) => (
    <div className="flex flex-col items-center gap-1 text-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <Icon className="h-5 w-5 text-gray-600" />
        </div>
        <span className="text-xs text-muted-foreground">{name}</span>
    </div>
);

export const FastConnection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Conexión rápida y confiable
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-secondary p-8 rounded-2xl">
          <div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-lg text-gray-700">Videollamadas claras y sin retrasos.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-lg text-gray-700">Comparte historias en solo segundos.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-lg text-gray-700">Disfruta creando contenido de video y subiéndolo súper rápido.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-lg text-gray-700">¡Encuentra tu camino donde sea que vayas!</span>
              </li>
            </ul>
          </div>
          <div>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle>El mejor rendimiento en todas tus apps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Descubre la libertad de una conexión confiable con alta velocidad 4G y 5G. SiempreWIFI te mantiene conectado, ¡sin importar la aventura!
                </p>
                <div className="flex justify-around items-center">
                    <AppIcon icon={Car} name="Uber" />
                    <AppIcon icon={Facebook} name="Facebook" />
                    <AppIcon icon={Music} name="Spotify" />
                    <AppIcon icon={Home} name="Airbnb" />
                    <AppIcon icon={Mail} name="Gmail" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};