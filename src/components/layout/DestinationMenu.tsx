import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { popularDestinations, allCountries, regionalDestinations, cityDestinations } from "@/data/destinations"
import { DestinationItem } from "../ui/DestinationItem"
import { cn } from '@/lib/utils';

export function DestinationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Destinos <ChevronDown className="ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    to="/destinations"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Todos los Destinos
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Encuentra planes para cualquier país, región o ciudad.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/plans?destination=europa" title="Europa">
                Planes para todo el continente.
              </ListItem>
              <ListItem href="/plans?destination=estados-unidos" title="Estados Unidos">
                Planes para USA y sus regiones.
              </ListItem>
              <ListItem href="/plans?destination=mexico" title="México">
                Planes para México.
              </ListItem>
              <ListItem href="/plans?destination=asia" title="Asia">
                Planes para el continente asiático.
              </ListItem>
              <ListItem href="/plans?destination=caribe" title="Caribe">
                Planes para las islas del Caribe.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Popular</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {popularDestinations.slice(0, 6).map((dest) => (
                <DestinationItem key={dest.value} {...dest} variant="list" />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Ciudades</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {cityDestinations.slice(0, 6).map((city) => (
                <DestinationItem key={city.value} {...city} variant="list" />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/plans?destination=global">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Plan Global
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';