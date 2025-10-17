"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink, useNavigate } from "react-router-dom"; // Importar useNavigate

const navItems = [
  { name: "Destinos", href: "/destinations" },
  { name: "Cómo funciona", href: "/how-it-works" },
  { name: "Ayuda", href: "/help" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Inicializar useNavigate

  const handleNavigateToPlans = () => {
    navigate('/destinations');
    setIsOpen(false); // Cerrar el menú si está abierto (solo relevante para móvil)
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand */}
        <NavLink to="/" className="flex items-center space-x-2 font-bold text-xl text-primary">
          <Globe className="h-6 w-6" />
          <span>SiempreWIFI</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-gray-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center">
          <Button 
            onClick={handleNavigateToPlans} // Usar la función de navegación
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6"
          >
            Ver Planes
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 pt-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-gray-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Button 
                onClick={handleNavigateToPlans} // Usar la función de navegación
                className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6 py-3 text-base"
              >
                Ver Planes
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};