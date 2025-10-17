import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "París, Francia",
    image: "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Roma, Italia",
    image: "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Tokio, Japón",
    image: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Nueva York, EE.UU.",
    image: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const TopDestinations = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Destinos Populares
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Inspírate para tu próximo viaje con nuestros destinos más visitados.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest) => (
            <Card key={dest.name} className="overflow-hidden group">
              <CardContent className="p-0 relative">
                <img src={dest.image} alt={dest.name} className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">{dest.name}</h3>
                  <a href="#" className="mt-2 inline-flex items-center text-primary font-semibold group-hover:underline">
                    Explorar <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;