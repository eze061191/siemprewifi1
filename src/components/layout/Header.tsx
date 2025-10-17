import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Cómo Funciona", href: "/how-it-works" },
    { name: "Destinos", href: "/destinations" },
    { name: "Planes", href: "/plans" },
    { name: "Compatibilidad", href: "/compatibility" },
    { name: "Preguntas Frecuentes", href: "/faq" },
    { name: "Sobre Nosotros", href: "/about-us" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800"> {/* Changed span to Link */}
            SiempreWIFI
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Button asChild size="sm">
            <Link to="/plans">Comprar eSIM</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 pt-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-foreground"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Button asChild className="mt-4">
                <Link to="/plans" onClick={() => setIsOpen(false)}>
                  Comprar eSIM
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};