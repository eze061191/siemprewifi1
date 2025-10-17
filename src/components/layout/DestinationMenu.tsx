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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Europa",
    href: "/destinations/europe",
    description:
      "Conéctate en más de 40 países europeos con planes flexibles.",
  },
  {
    title: "Norteamérica",
    href: "/destinations/north-america",
    description:
      "Cobertura completa en Estados Unidos, Canadá y México.",
  },
  {
    title: "Sudamérica",
    href: "/destinations/south-america",
    description:
      "Planes de datos para toda la región andina y el cono sur.",
  },
  {
    title: "Asia",
    href: "/destinations/asia",
    description: "Datos de alta velocidad en Japón, Corea, Tailandia y más.",
  },
  {
    title: "Oceanía",
    href: "/destinations/oceania",
    description: "Australia y Nueva Zelanda, siempre conectado.",
  },
  {
    title: "Global",
    href: "/destinations/global",
    description: "Cobertura mundial para viajeros frecuentes.",
  },
]

export function DestinationMenu() {
  const triggerClasses = "hover:shadow-md hover:shadow-primary/50 rounded-md transition-all duration-200";

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClasses}>
            ¿A dónde viajas?
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-[300px] md:w-[600px] lg:w-[800px]">
              <div className="flex justify-between items-center mb-4 gap-4">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <ListItem href="/destinations" title="Ver todos los destinos">
                    Explora todos los planes disponibles por región.
                  </ListItem>
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
                <div className="hidden md:block w-[200px] lg:w-[300px] bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                        Recomendado
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                        ¡El plan Global es perfecto si tienes múltiples paradas!
                    </p>
                    <Link to="/destinations/global" className="text-sm text-primary hover:text-primary/80 font-medium">
                        Ver Plan Global &rarr;
                    </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link // Fixed: Pass href as 'to' prop
          ref={ref}
          to={href || "#"} // Use href as 'to', providing a fallback
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
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"