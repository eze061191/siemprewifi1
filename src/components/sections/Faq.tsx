import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué es una eSIM?",
    answer: "Una eSIM es una SIM digital que te permite activar un plan de datos de tu operador sin tener que usar una tarjeta SIM física. Se instala escaneando un código QR.",
  },
  {
    question: "¿Mi teléfono es compatible con eSIM?",
    answer: "La mayoría de los teléfonos modernos son compatibles con la tecnología eSIM. Puedes consultar la lista de dispositivos compatibles en nuestro sitio web o en las especificaciones de tu teléfono.",
  },
  {
    question: "¿Cómo instalo la eSIM?",
    answer: "Es muy fácil. Después de tu compra, recibirás un correo electrónico con un código QR. Simplemente ve a la configuración de tu teléfono, selecciona 'Añadir plan de datos' y escanea el código QR.",
  },
  {
    question: "¿Puedo mantener mi número de WhatsApp?",
    answer: "¡Sí! Puedes seguir usando tu número de WhatsApp de siempre para llamar y chatear con tus contactos, ya que funciona con tu conexión a internet.",
  },
];

export const Faq = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            ¿Tienes dudas? Aquí resolvemos las más comunes.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 pt-2">
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