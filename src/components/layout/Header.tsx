import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import DestinationMenu from "./DestinationMenu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg">Holafly</span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <DestinationMenu />
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost">Mi eSIM</Button>
          <Button>Activa tu eSIM</Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link to="/" className="hover:text-foreground">Inicio</Link>
                <Link to="/destinations" className="text-muted-foreground hover:text-foreground">Destinos</Link>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground">¿Cómo funciona?</Link>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contacto</Link>
                <hr/>
                <Button variant="ghost">Mi eSIM</Button>
                <Button>Activa tu eSIM</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;