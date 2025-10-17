import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Award, InfinityIcon, Headset, MailFast, Users } from "lucide-react";

interface PlanAdvantagesProps {
    destination: string;
}

export const PlanAdvantages: React.FC<PlanAdvantagesProps> = ({ destination }) => {
    const advantages = [
        {
            icon: MessageCircle,
            title: "Mantén tu número de WhatsApp",
            description: "Puedes llamar y enviar mensajes a todos tus contactos en WhatsApp, como si estuvieras en el mismo país. No pierdas el contacto con familiares y amigos."
        },
        {
            icon: Award,
            title: `La Mejor eSIM para ${destination}`,
            description: `Compra una eSIM para viajar a ${destination} y disfruta de Datos Ilimitados a velocidad 5G/4G durante tu estancia. Evita cargos por roaming y conéctate a internet de alta velocidad en minutos.`
        },
        {
            icon: InfinityIcon,
            title: "Planes de datos ilimitados",
            description: "No más recargas ni preocuparse por quedarse sin datos. Con datos ilimitados prepago, puedes relajarte sabiendo que te tenemos cubierto."
        },
        {
            icon: Headset,
            title: "Soporte al cliente 24/7",
            description: "La eSIM es fácil de usar, pero si tienes preguntas o problemas técnicos, puedes contactarnos por correo electrónico o por nuestro chat de soporte 24 horas."
        },
        {
            icon: MailFast,
            title: "Entrega inmediata",
            description: "Si tienes prisa o ya estas viajando, no te preocupes, nosotros te enviaremos la eSIM inmediatamente luego de tu compra a través de email, así te conectas en pocos segundos."
        },
        {
            icon: Users,
            title: "Comparte tus datos con familiares y amigos",
            description: "Comparte datos con familiares, amigos o compañeros de viaje. Usa tu smartphone para crear una red wifi y conectar varios dispositivos."
        }
    ];

    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Ventajas de usar la eSIM de SiempreWIFI en <span className="capitalize">{destination}</span>
                    </h2>
                </div>
                <Card className="bg-green-100/50 border-green-200 mb-12">
                    <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <h3 className="font-bold text-lg text-green-900">¿Cambio de planes? ¡Ningún problema!</h3>
                            <p className="text-green-800">Compra tu eSIM con total tranquilidad. Tienes hasta 6 meses para solicitar tu reembolso.</p>
                        </div>
                        <Button variant="default" className="bg-gray-800 hover:bg-gray-900 text-white flex-shrink-0">Conoce más aquí</Button>
                    </CardContent>
                </Card>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => (
                        <Card key={index} className="bg-white">
                            <CardContent className="p-6">
                                <advantage.icon className="h-8 w-8 text-primary mb-4" />
                                <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                                <p className="text-muted-foreground text-sm">{advantage.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}