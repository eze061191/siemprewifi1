import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { popularDestinations, regionalDestinations, allCountries } from '@/data/destinations';
import { cities } from '@/data/cities';
import { Link } from 'react-router-dom';

const DestinationMenu = () => {
  const popularCities = cities.slice(0, 8);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Destinos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-6 w-[600px] lg:w-[800px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Destinos</h3>
                <Link to="/destinations" className="text-sm text-primary hover:underline">
                  Ver todos los destinos
                </Link>
              </div>
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Popular</h4>
                  <ul className="space-y-1">
                    {popularDestinations.slice(0, 8).map((dest) => (
                      <li key={dest.value}>
                        <NavigationMenuLink asChild>
                          <a href="#" className="text-sm hover:text-primary flex items-center">
                            <span className="mr-2">{dest.flag}</span>
                            {dest.name}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Planes regionales</h4>
                  <ul className="space-y-1">
                    {regionalDestinations.slice(0, 8).map((dest) => (
                      <li key={dest.value}>
                        <NavigationMenuLink asChild>
                          <a href="#" className="text-sm hover:text-primary">
                            {dest.name}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Países</h4>
                  <ul className="space-y-1">
                    {allCountries.slice(0, 8).map((country) => (
                      <li key={country.value}>
                        <NavigationMenuLink asChild>
                          <a href="#" className="text-sm hover:text-primary flex items-center">
                            <span className="mr-2">{country.flag}</span>
                            {country.name}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ciudades</h4>
                  <ul className="space-y-1">
                    {popularCities.map((city) => (
                      <li key={city.value}>
                        <NavigationMenuLink asChild>
                          <a href="#" className="text-sm hover:text-primary flex items-center">
                            <span className="mr-2">{city.flag}</span>
                            {city.label}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/how-it-works">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              ¿Cómo funciona?
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/contact">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contacto
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DestinationMenu;