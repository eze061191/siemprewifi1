import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const guides = [
  {
    title: "10 Cosas que hacer en Kioto",
    category: "Japón",
    image: "https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "Descubre los templos, jardines y la cultura única de la antigua capital de Japón.",
  },
  {
    title: "Una semana en la Costa Amalfitana",
    category: "Italia",
    image: "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "Recorre los pueblos más pintorescos de Italia en este viaje inolvidable.",
  },
  {
    title: "Guía para principiantes en la Patagonia",
    category: "Argentina",
    image: "https://images.pexels.com/photos/259513/pexels-photo-259513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "Todo lo que necesitas saber para tu primera aventura en el fin del mundo.",
  },
];

const TravelGuides = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Guías de Viaje
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Consejos, itinerarios e inspiración de la mano de nuestros expertos viajeros.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {guides.map((guide) => (
            <Card key={guide.title} className="flex flex-col overflow-hidden">
              <img src={guide.image} alt={guide.title} className="h-56 w-full object-cover" />
              <CardContent className="p-6 flex-grow">
                <p className="text-sm font-semibold text-primary">{guide.category}</p>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{guide.title}</h3>
                <p className="mt-3 text-base text-gray-500">{guide.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Leer más</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelGuides;