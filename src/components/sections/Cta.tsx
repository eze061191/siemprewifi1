import { Button } from "@/components/ui/button";
import { Tag, CheckCircle } from "lucide-react";

export const Cta = () => {
  return (
    <section className="bg-gray-900 text-white py-20" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold font-serif">
          ¿Listo para viajar sin preocupaciones?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
          Únete a miles de viajeros que ya confían en SiempreWIFI
        </p>
        <div className="mt-8 inline-flex items-center bg-orange-500/20 text-orange-300 border border-orange-500 rounded-full p-1 pr-4">
          <Tag className="h-5 w-5 bg-orange-500 text-white rounded-full p-1 mr-2" />
          <span className="font-bold">Oferta especial: 20% OFF en tu primera compra con código PRIMERAVEZ</span>
        </div>
        <p className="mt-4 text-sm text-gray-400">Válido solo por 48 horas</p>
        <Button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg rounded-md">
          Activar mi eSIM ahora
        </Button>
        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
          <CheckCircle className="h-4 w-4 text-green-500" />
          Garantía de devolución de 14 días
        </p>
      </div>
    </section>
  );
};