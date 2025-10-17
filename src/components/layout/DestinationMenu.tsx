import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Define los datos de los destinos
const destinations = [
  {
    title: "Europa",
    href: "/destinations/europe",
    description: "Conéctate en más de 40 países europeos con un solo plan.",
    image: "europe.jpg",
  },
  {
    title: "América del Norte",
    href: "/destinations/north-america",
    description: "Planes de datos para Estados Unidos, Canadá y México.",
    image: "north-america.jpg",
  },
  {
    title: "Asia",
    href: "/destinations/asia",
    description: "Cobertura en Japón, Corea del Sur, Tailandia y más.",
    image: "asia.jpg",
  },
  {
    title: "América del Sur",
    href: "/destinations/south-america",
    description: "Mantente conectado en Brasil, Argentina, Colombia y el resto de la región.",
    image: "south-america.jpg",
  },
  {
    title: "Oceanía",
    href: "/destinations/oceania",
    description: "Planes para Australia, Nueva Zelanda y las islas del Pacífico.",
    image: "oceania.jpg",
  },
  {
    title: "Global",
    href: "/destinations/global",
    description: "Conexión mundial en más de 150 países.",
    image: "global.jpg",
  },
]

// Componente de lista para los destinos
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
  )
})
ListItem.displayName = "ListItem"


export function DestinationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* Aplicamos las clases de sombreado naranja al hacer hover */}
          <NavigationMenuTrigger className="hover:shadow-md hover:shadow-primary/50 transition-all duration-200 rounded-md">
            ¿A dónde viajas?
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-[300px] md:w-[600px] lg:w-[800px]">
              <div className="flex justify-between items-center mb-4 gap-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Explora nuestros planes por región
                </h4>
                <Link to="/destinations">
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Ver todos los destinos <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <ul className="grid w-full gap-3 md:grid-cols-2 lg:grid-cols-3">
                {destinations.map((destination) => (
                  <ListItem
                    key={destination.title}
                    title={destination.title}
                    href={destination.href}
                  >
                    {destination.description}
                  </ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}