import { Button } from "@/components/ui/button";
import { DestinationMenu } from "./DestinationMenu";
import { Link } from "@/components/ui/link"; // Import Link from ui/link

export const Header = () => {
  const navLinkClasses = "font-medium text-gray-500 hover:text-gray-900 transition-all duration-200 hover:shadow-md hover:shadow-primary/50 rounded-md";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            {/* Usamos variant="ghost" y size="default" para que el Link se comporte como un contenedor de texto sin fondo */}
            <Link to="/" variant="ghost" size="default" className="p-0 h-auto hover:bg-transparent">
              <span className="text-2xl font-bold text-gray-800">
                SiempreWIFI
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-2 items-center">
            <DestinationMenu />
            {/* Using Link component with ghost variant for navigation */}
            <Link to="/about-us" variant="ghost" className={navLinkClasses}>
              Sobre Nosotros
            </Link>
            <Link to="/blog" variant="ghost" className={navLinkClasses}>
              Blog
            </Link>
            <Link to="/account" variant="ghost" className={navLinkClasses}>
              Mi cuenta
            </Link>
            <Link to="/contact" variant="ghost" className={navLinkClasses}>
              Contáctenos
            </Link>
          </nav>
          <div className="flex items-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6">
              Ver Planes
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};