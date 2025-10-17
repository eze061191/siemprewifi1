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
import { popularDestinations, allCountries, regionalDestinations } from "@/data/destinations"
import { cities } from "@/data/cities"
import { DestinationItem } from "../ui/DestinationItem"

export function DestinationMenu() {
  const [search, setSearch] = React.useState('');

  const filterByName = (item: { name: string } | { label: string }) => {
    const name = 'name' in item ? item.name : item.label;
    return name.toLowerCase().includes(search.toLowerCase());
  };

  const filteredPopular = React.useMemo(() => popularDestinations.filter(filterByName), [search]);
  const filteredRegional = React.useMemo(() => regionalDestinations.filter(filterByName), [search]);
  const filteredCountries = React.useMemo(() => allCountries.filter(filterByName), [search]);
  const filteredCities = React.useMemo(() => cities.filter(filterByName), [search]);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Destinos</NavigationMenuTrigger>
          <NavigationMenuContent>
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
                      <DestinationItem key={city.value} name={city.label} value={city.value} flag={city.flag} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="all" className="pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-[300px] overflow-y-auto">
                    {filteredRegional.map((dest) => (
                      <DestinationItem key={dest.value} {...dest} variant="list" />
                    ))}
                    {filteredCountries.map((dest) => (
                      <DestinationItem key={dest.value} {...dest} variant="list" />
                    ))}
                     {filteredCities.map((city) => (
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