import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Hero = () => {
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (destination.trim()) {
      navigate(`/plans?destination=${encodeURIComponent(destination.trim())}`);
    }
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Internet para tu viaje,
              <span className="block text-orange-500">al instante.</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-500">
              Compra tu eSIM o SIM física prepago y disfruta de datos en más de 160
              países. Viaja conectado sin pagar roaming.
            </p>
            <form onSubmit={handleSearch} className="mt-8 max-w-md mx-auto lg:mx-0 sm:flex sm:justify-center lg:justify-start md:mt-12">
              <div className="relative rounded-md shadow-sm w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="search"
                  name="search"
                  id="search"
                  className="block w-full pl-10 py-6 text-lg"
                  placeholder="¿A dónde viajas?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 px-8 text-lg"
                >
                  Buscar
                </Button>
              </div>
            </form>
          </div>
          <div className="hidden lg:block">
            <img 
              src="/conectividad-global.png" 
              alt="Conectividad global al alcance de tu mano" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};