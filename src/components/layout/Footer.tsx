import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">
                Siempre<span className="text-orange-500">WIFI</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Conectando viajeros en más de 160 países con la mejor tecnología eSIM. Internet confiable, rápido y seguro.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Sobre Siempre WIFI
            </h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Sobre Nosotros</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Términos y Condiciones</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Política de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Enlaces rápidos
            </h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Ver Planes</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Cómo Funciona</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Cobertura</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Compatibilidad</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <span>soportes@siemprewifi.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Siempre WIFI. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};