import { Button } from "@/components/ui/button";

export const DestinationCta = () => {
  return (
    <section className="bg-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Descubre nuestros más <br />
          de <span className="text-primary">160 destinos</span> disponibles
        </h2>
        <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl">
          Ver todos los destinos
        </Button>
      </div>
    </section>
  );
};