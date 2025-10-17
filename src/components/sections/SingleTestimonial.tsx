import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const SingleTestimonial = () => {
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
                        
                        <Card className="mt-6 bg-white text-left">
                            <CardContent className="p-6">
                                <p className="font-bold">María</p>
                                <blockquote className="mt-2 text-gray-700">
                                    <p>“Increíble servicio. Me conecté al instante al llegar a Roma. No tuve que buscar WIFI ni comprar SIM local. ¡Súper recomendado!”</p>
                                </blockquote>
                                <p className="text-sm text-muted-foreground mt-4">Viajó a Italia</p>
                            </CardContent>
                        </Card>
                        <div className="flex justify-center lg:justify-start gap-2 mt-6">
                            <div className="w-3 h-3 bg-primary rounded-full cursor-pointer"></div>
                            <div className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer"></div>
                            <div className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer"></div>
                            <div className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}