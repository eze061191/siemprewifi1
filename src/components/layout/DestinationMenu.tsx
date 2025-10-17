import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { popularDestinations, allCountries, regionalDestinations } from "@/data/destinations"
import { cities } from "@/data/cities"
import { DestinationItem } from "../ui/DestinationItem"

export function DestinationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Destinos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-[300px] md:w-[600px] lg:w-[800px]">
              <Tabs defaultValue="popular" className="w-full">
                <TabsList>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="regional">Planes regionales</TabsTrigger>
                  <TabsTrigger value="countries">Países</TabsTrigger>
                  <TabsTrigger value="cities">Ciudades</TabsTrigger>
                  <TabsTrigger value="all">Todos los destinos</TabsTrigger>
                </TabsList>
                <TabsContent value="popular" className="pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {popularDestinations.slice(0, 9).map((dest) => (
                      <DestinationItem key={dest.value} {...dest} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="regional" className="pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-[300px] overflow-y-auto">
                    {regionalDestinations.map((dest) => (
                      <DestinationItem key={dest.value} {...dest} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="countries" className="pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-[300px] overflow-y-auto">
                    {allCountries.map((dest) => (
                      <DestinationItem key={dest.value} {...dest} variant="list" />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="cities" className="pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-[300px] overflow-y-auto">
                    {cities.map((city) => (
                      <DestinationItem key={city.value} name={city.label} value={city.value} flag={city.flag} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="all" className="pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-[300px] overflow-y-auto">
                    {regionalDestinations.map((dest) => (
                      <DestinationItem key={dest.value} {...dest} variant="list" />
                    ))}
                    {allCountries.map((dest) => (
                      <DestinationItem key={dest.value} {...dest} variant="list" />
                    ))}
                     {cities.map((city) => (
                      <DestinationItem key={city.value} name={city.label} value={city.value} flag={city.flag} variant="list" />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}