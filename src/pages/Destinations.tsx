import React from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { popularDestinations, allCountries, regionalDestinations, cityDestinations } from "@/data/destinations"
import { DestinationItem } from "@/components/ui/DestinationItem"

// Definición de tipo para los elementos de destino
interface Destination {
  name: string;
  value: string;
  flag?: string;
  isRegional?: boolean;
}

export function Destinations() {
  const [search, setSearch] = React.useState('');

  const filterByName = (item: Destination) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  };

  const filteredPopular = React.useMemo(() => popularDestinations.filter(filterByName), [search]);
  const filteredRegional = React.useMemo(() => regionalDestinations.filter(filterByName), [search]);
  const filteredCountries = React.useMemo(() => allCountries.filter(filterByName), [search]);
  const filteredCities = React.useMemo(() => cityDestinations.filter(filterByName), [search]);

  // Lista combinada para la pestaña 'Todos los destinos'
  const allCombinedDestinations = React.useMemo(() => {
    const combined = [...regionalDestinations, ...allCountries, ...cityDestinations];
    // Usamos un Set para asegurar unicidad por 'value'
    const uniqueDestinations = Array.from(new Map(combined.map(item => [item.value, item])).values());
    return uniqueDestinations.sort((a, b) => a.name.localeCompare(b.name)).filter(filterByName);
  }, [search]);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">Destinos</h1>
      <p className="text-gray-600 mb-6">Encuentra el plan perfecto para tu viaje.</p>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Buscar destino..."
          className="pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Tabs defaultValue="popular" className="w-full">
        <TabsList className="flex flex-wrap h-auto">
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="regional">Planes regionales</TabsTrigger>
          <TabsTrigger value="countries">Países</TabsTrigger>
          <TabsTrigger value="cities">Ciudades</TabsTrigger>
          <TabsTrigger value="all">Todos los destinos</TabsTrigger>
        </TabsList>
        <TabsContent value="popular" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPopular.map((dest) => (
              <DestinationItem key={dest.value} {...dest} variant="card" />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="regional" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRegional.map((dest) => (
              <DestinationItem key={dest.value} {...dest} variant="card" />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="countries" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCountries.map((dest) => (
              <DestinationItem key={dest.value} {...dest} variant="card" />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="cities" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCities.map((city) => (
              <DestinationItem key={city.value} {...city} variant="card" />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="all" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allCombinedDestinations.map((dest) => (
              <DestinationItem key={dest.value} {...dest} variant="card" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Destinations;