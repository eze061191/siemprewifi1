import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
    {
        name: "María",
        quote: "Increíble servicio. Me conecté al instante al llegar a Roma. No tuve que buscar WIFI ni comprar SIM local. ¡Súper recomendado!",
        destination: "Viajó a Italia"
    },
    {
        name: "Juan Pérez",
        quote: "La eSIM funcionó perfectamente en Japón. Velocidad 5G real, y la configuración fue súper sencilla. ¡Gracias SiempreWIFI!",
        destination: "Viajó a Japón"
    },
    {
        name: "Ana García",
        quote: "Estuve en Estados Unidos por un mes y la conexión fue impecable. Pude hacer videollamadas de trabajo sin ningún problema. Lo volveré a usar.",
        destination: "Viajó a Estados Unidos"
    },
    {
        name: "Carlos Rodríguez",
        quote: "¡La mejor decisión para mi viaje por Europa! Compré el plan regional y tuve internet en 5 países sin cambiar de SIM. Una maravilla.",
        destination: "Viajó a Europa"
    }
];

export const SingleTestimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
        }, 5000); // Cambia de testimonio cada 5 segundos

        return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
    }, []);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="/Post - 5 amigos conectados a un WIFI.png" alt="Testimonial illustration" className="w-full max-w-md mx-auto rounded-lg" />
                    </div>
                    <div className="text-center lg:text-left">
                        <p className="font-semibold text-primary">Muchos viajeros confían en nosotros.</p>
                        <div className="flex items-center gap-2 mt-2 justify-center lg:justify-start">
                            <span className="font-bold text-lg">Excelente</span>
                            <div className="flex text-green-500">
                                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5" />)}
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Basado en 15,000+ reseñas</p>
                        
                        <Card className="mt-6 bg-white text-left min-h-[210px] transition-all duration-300">
                            <CardContent className="p-6">
                                <p className="font-bold">{currentTestimonial.name}</p>
                                <blockquote className="mt-2 text-gray-700">
                                    <p>“{currentTestimonial.quote}”</p>
                                </blockquote>
                                <p className="text-sm text-muted-foreground mt-4">{currentTestimonial.destination}</p>
                            </CardContent>
                        </Card>
                        <div className="flex justify-center lg:justify-start gap-2 mt-6">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'}`}
                                    aria-label={`Ir al testimonio ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}