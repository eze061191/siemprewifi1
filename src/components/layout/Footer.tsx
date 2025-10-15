import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <span className="text-2xl font-bold text-white">SiempreWIFI</span>
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
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Sobre Siempre WIFI</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Sobre Nosotros</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Términos y Condiciones</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Política de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Enlaces rápidos</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Ver Planes</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Cómo Funciona</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Cobertura</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Compatibilidad</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Soluciones Empresariales</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Destinos populares</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Europa</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Asia</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">América</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">África</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Oceanía</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
            <div className="bg-gray-900 p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase col-span-1 md:col-span-2">Contacto</h3>
                <div className="flex items-start">
                    <Mail className="h-5 w-5 mt-1 mr-3 flex-shrink-0 text-primary" />
                    <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-400">soportes@siemprewifi.com</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Phone className="h-5 w-5 mt-1 mr-3 flex-shrink-0 text-primary" />
                    <div>
                        <p className="font-semibold">Teléfono</p>
                        <p className="text-gray-400">+1 (234) 567-890</p>
                    </div>
                </div>
                <p className="text-xs text-gray-500 col-span-1 md:col-span-2">Horarios de atención: Lun-Dom 24/7</p>
            </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Siempre WIFI. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <p className="text-sm text-gray-400">Métodos de pago:</p>
            {/* Placeholder for payment icons */}
            <div className="h-6 w-10 bg-gray-600 rounded-sm flex items-center justify-center text-xs">VISA</div>
            <div className="h-6 w-10 bg-gray-600 rounded-sm flex items-center justify-center text-xs">MC</div>
            <div className="h-6 w-10 bg-gray-600 rounded-sm flex items-center justify-center text-xs">PP</div>
          </div>
        </div>
      </div>
    </footer>
  );
};