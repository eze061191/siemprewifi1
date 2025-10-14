import { Button } from "@/components/ui/button";

export const SocialProof = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Amigos conectados a un WIFI para todos sus viajes" 
              className="rounded-lg shadow-2xl object-cover w-full h-[400px]"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Viaja y comparte sin límites
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Conecta hasta 5 dispositivos a la vez con nuestro pocket WiFi o comparte datos desde tu móvil con la eSIM. Ideal para viajar en grupo, con familia o si llevas varios dispositivos.
            </p>
            <div className="mt-8">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white py-4 px-8 text-lg rounded-full">
                Ver Dispositivos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};