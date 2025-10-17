import React from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { allDestinations, Destination } from "@/data/all-destinations"
import { DestinationItem } from "@/components/ui/DestinationItem"
import { DestinationCta } from "@/components/sections/DestinationCta" // Importar CTA

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


export function Destinations() {
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
    <>
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
              {filteredAll.map((dest) => (
                <DestinationItem key={dest.value} {...dest} variant="card" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <DestinationCta />
    </>
  )
}

export default Destinations;