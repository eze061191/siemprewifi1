import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { allDestinations, Destination } from "@/data/all-destinations"
import { DestinationItem } from "../ui/DestinationItem"

// Definiciones manuales para la pestaña Popular (basadas en la imagen de referencia y la lista consolidada)
const popularDestinationsManual: Destination[] = [
    allDestinations.find(d => d.label === "España"),
    allDestinations.find(d => d.label === "Estados Unidos"),
    allDestinations.find(d => d.label === "Marruecos"),
    allDestinations.find(d => d.label === "Japón"),
    allDestinations.find(d => d.label === "China"),
    allDestinations.find(d => d.label === "México"),
    allDestinations.find(d => d.label === "Turquía"),
    allDestinations.find(d => d.label === "Suiza"),
    allDestinations.find(d => d.label === "Reino Unido"),
].filter((d): d is Destination => d !== undefined && d !== null);


export function DestinationMenu() {
  const [search, setSearch] = React.useState('');

  const filterByName = (item: Destination) => {
    return item.label.toLowerCase().includes(search.toLowerCase());
  };

  const filteredPopular = React.useMemo(() => popularDestinationsManual.filter(filterByName), [search]);
  
  const filteredRegional = React.useMemo(() => 
    allDestinations.filter(d => d.type === 'Región').filter(filterByName), 
    [search]
  );
  
  const filteredCountries = React.useMemo(() => 
    allDestinations.filter(d => d.type === 'País').filter(filterByName), 
    [search]
  );
  
  const filteredCities = React.useMemo(() => 
    allDestinations.filter(d => d.type === 'Ciudad').filter(filterByName), 
    [search]
  );

  const filteredAll = React.useMemo(() => 
    allDestinations.filter(filterByName), 
    [search]
  );

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>¿A dónde viajas?</NavigationMenuTrigger>
          <NavigationMenuContent className="z-[51]"> {/* Aumentamos el z-index aquí */}
            <div className="p-4 w-[300px] md:w-[600px] lg:w-[800px]">
              <div className="flex justify-between items-center mb-4 gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar destino..."
                    className="pl-9"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <Link to="/destinations">
                  <Button>Explorar destinos</Button>
                </Link>
              </div>
              <Tabs defaultValue="popular" className="w-full">
                <TabsList>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="regional">Planes regionales</TabsTrigger>
                  <TabsTrigger value="countries">Países</TabsTrigger>
                  <TabsTrigger value="cities">Ciudades</TabsTrigger>
                  <TabsTrigger value="all">Todos los destinos</TabsTrigger>
                </TabsList>
                <TabsContent value="popular" className="pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-[300px] overflow-y-auto">
                    {filteredPopular.slice(0, 9).map((dest) => (
                      <DestinationItem key={dest.value} {...dest} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="regional" className="pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-[300px] overflow-y-auto">
                    {filteredRegional.map((dest) => (
                      <DestinationItem key={dest.value} {...dest} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="countries" className="pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-[300px] overflow-y-auto">
                    {filteredCountries.map((dest) => (
                      <DestinationItem key={dest.value} {...dest} variant="list" />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="cities" className="pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-[300px] overflow-y-auto">
                    {filteredCities.map((city) => (
                      <DestinationItem key={city.value} {...city} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="all" className="pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-[300px] overflow-y-auto">
                    {filteredAll.map((dest) => (
                      <DestinationItem key={dest.value} {...dest} variant="list" />
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