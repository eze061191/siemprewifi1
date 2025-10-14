import { Button } from "@/components/ui/button";
import { Wifi } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Wifi className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-2xl font-bold">
              Siempre
              <span className="text-orange-500">WIFI</span>
            </span>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              Inicio
            </a>
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              Cómo funciona
            </a>
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              Preguntas frecuentes
            </a>
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              Contacto
            </a>
          </nav>
          <div className="flex items-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Ver Planes
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};