import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { question: "¿Qué es una eSIM y cómo funciona?", answer: "Una eSIM es una SIM digital que te permite activar un plan de datos sin una tarjeta física. Se instala escaneando un código QR que te enviamos por email." },
  { question: "¿Mi teléfono es compatible con eSIM?", answer: "La mayoría de teléfonos modernos son compatibles. Puedes revisar la lista completa en nuestra sección de compatibilidad o en las especificaciones de tu fabricante." },
  { question: "¿Cuándo debo activar mi eSIM?", answer: "Recomendamos instalarla justo antes de tu viaje, pero activarla (encender la línea de datos) únicamente al aterrizar en tu destino para no consumir datos antes de tiempo." },
  { question: "¿Puedo usar WhatsApp con mi número actual?", answer: "Sí, absolutamente. Conservarás tu número de WhatsApp para llamadas y mensajes. La eSIM solo gestiona los datos móviles." },
  { question: "¿Qué pasa si se me acaban los datos?", answer: "Dependiendo de tu plan, puedes recargar fácilmente desde tu cuenta en nuestra web para añadir más datos a tu eSIM sin necesidad de comprar una nueva." },
  { question: "¿Hay cargos adicionales o sorpresas?", answer: "No. Todos nuestros planes son de prepago. Pagas una sola vez por el plan que elijas y no hay cargos por roaming ni facturas sorpresa." },
];

export const Faq = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 font-serif">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Encuentra respuestas a las dudas más comunes
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b">
                <AccordionTrigger className="text-lg text-left font-medium hover:no-underline py-4 font-serif">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};