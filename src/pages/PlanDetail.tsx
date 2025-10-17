import { PlanSelector } from "@/components/sections/PlanSelector";
import { FastConnection } from "@/components/sections/FastConnection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PlanAdvantages } from "@/components/sections/PlanAdvantages";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SingleTestimonial } from "@/components/sections/SingleTestimonial";
import { Faq } from "@/components/sections/Faq";
import { PaymentInfo } from "@/components/sections/PaymentInfo";
import { DestinationHeaderCta } from "@/components/sections/DestinationHeaderCta"; // Importar componente renombrado
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const PlanDetail = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    
    // Usamos un destino por defecto si no se pasa en la URL
    const destination = queryParams.get('destination') || 'Caribe'; 
    const destinationName = destination.charAt(0).toUpperCase() + destination.slice(1).replace(/-/g, ' ');

    // Usamos una imagen de ejemplo para el hero
    const heroImage = "/Post - Conectividad global al alcance de tu mano.png"; 

    return (
        <div className="bg-white">
            <PlanSelector 
                destinationName={destinationName} 
                basePrice={47.90} 
                pricePerDay={5.99}
                imageSrc={heroImage}
            />
            
            <PaymentInfo />

            <FastConnection />

            <HowItWorks 
                title={`¿Cómo funciona la eSIM de SiempreWIFI para ${destinationName}?`}
                subtitle="Selecciona el destino y el número de días para tu viaje y obtén tu eSIM con datos."
            />

            <PlanAdvantages destination={destinationName} />

            <WhyChooseUs />

            <SingleTestimonial />
            
            <DestinationHeaderCta /> {/* Usar componente renombrado */}

            <Faq />

            {/* Sección de CTA/Soporte al final */}
            <section className="py-20 bg-yellow-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        ¡No te preocupes! Estamos aquí para ti.
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Si tienes alguna pregunta durante este proceso, recuerda que estamos disponibles 24/7 a través de nuestro chat en línea.
                    </p>
                    <Button className="mt-6 bg-gray-800 hover:bg-gray-900 text-white px-8 py-6 text-lg rounded-xl">
                        <MessageCircle className="h-5 w-5 mr-2" />
                        ¡Hablemos!
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default PlanDetail;