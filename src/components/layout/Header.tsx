import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800 font-serif">
              SiempreWIFI
            </span>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
              Inicio
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
              Sobre Nosotros
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
              Blog
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
              Mi cuenta
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
              Contáctenos
            </a>
          </nav>
          <div className="flex items-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-6">
              Ver Planes
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};