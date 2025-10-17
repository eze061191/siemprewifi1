import React from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { popularDestinations, allCountries, regionalDestinations } from "@/data/destinations"
import { cities } from "@/data/cities"
import { DestinationItem } from "@/components/ui/DestinationItem"

export function Destinations() {
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
              <DestinationItem key={city.value} name={city.label} value={city.value} flag={city.flag} variant="card" />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="all" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Regional destinations */}
            {filteredRegional.map((dest) => (
              <DestinationItem key={dest.value} {...dest} variant="card" />
            ))}
            {/* Countries */}
            {filteredCountries.map((dest) => (
              <DestinationItem key={dest.value} {...dest} variant="card" />
            ))}
            {/* Cities */}
            {filteredCities.map((city) => (
              <DestinationItem key={city.value} name={city.label} value={city.value} flag={city.flag} variant="card" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Destinations;