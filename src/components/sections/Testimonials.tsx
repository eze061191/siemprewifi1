import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Elisa G.",
    role: "Viajera Frecuente",
    quote: "¡Increíble servicio! Aterricé en Japón y ya tenía internet. Me salvó de estar perdida. Totalmente recomendado.",
  },
  {
    name: "Marcos R.",
    role: "Nómada Digital",
    quote: "Como nómada digital, necesito estar siempre conectado. Siempre WIFI nunca me ha fallado en mis viajes por Europa.",
  },
  {
    name: "Lucía F.",
    role: "Vacaciones en Familia",
    quote: "La mejor decisión para nuestras vacaciones. Todos conectados sin preocuparnos por las facturas de roaming.",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Lo que dicen nuestros viajeros
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Nos enorgullece ayudar a miles de personas a viajar conectadas.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="shadow-lg">
              <CardContent className="pt-6">
                <div className="flex space-x-1 text-orange-500">
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                </div>
                <blockquote className="mt-4 text-lg text-gray-900">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
                <figcaption className="mt-4 flex items-center space-x-3">
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">/ {testimonial.role}</div>
                </figcaption>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};