import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    location: "Viajó a Italia",
    quote: "Increíble servicio. Me conecté al instante al llegar a Roma. No tuve que buscar WIFI ni comprar SIM local. ¡Súper recomendado!",
    verified: true,
    time: "Hace 2 semanas"
  },
  {
    name: "Carlos Méndez",
    location: "Viajó a Japón",
    quote: "Excelente para trabajar mientras viajo. La velocidad 4G es perfecta para videollamadas. Usé 8GB en 2 semanas sin problemas.",
    verified: true,
    time: "Hace 1 mes"
  },
  {
    name: "Ana Rodríguez",
    location: "Viajó a Estados Unidos",
    quote: "Viajé con mi familia y todos nos conectamos sin complicaciones. El soporte 24/7 respondió mis dudas en minutos.",
    verified: true,
    time: "Hace 3 semanas"
  },
  {
    name: "Luis Fernández",
    location: "Viajó a Francia",
    quote: "Como nómada digital, necesito internet confiable. SiempreWIFI superó mis expectativas. Trabajé sin interrupciones.",
    verified: true,
    time: "Hace 1 semana"
  },
  {
    name: "Patricia Silva",
    location: "Viajó a Tailandia",
    quote: "Perfecto para compartir fotos en redes sociales. La activación fue instantánea y funcionó en todas las ciudades que visité.",
    verified: true,
    time: "Hace 4 semanas"
  },
  {
    name: "Roberto Jiménez",
    location: "Viajó a España",
    quote: "La mejor inversión de mi viaje. Por el precio de un café conseguí internet ilimitado por todo mi viaje. 100% recomendado.",
    verified: true,
    time: "Hace 2 semanas"
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Más de 15,000 viajeros ya confían en nosotros
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-primary-foreground/90">
            Lee las experiencias reales de nuestros clientes satisfechos
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white">
              <CardContent className="pt-6 flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex space-x-1 text-primary">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5" />)}
                  </div>
                  <blockquote className="mt-4 text-base text-gray-700">
                    <p>“{testimonial.quote}”</p>
                  </blockquote>
                </div>
                <figcaption className="mt-6">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-gray-500 text-xs">{testimonial.time}</div>
                    {testimonial.verified && (
                      <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                        <CheckCircle className="h-4 w-4" /> Verificado
                      </div>
                    )}
                  </div>
                </figcaption>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};