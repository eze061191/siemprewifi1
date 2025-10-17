import React, { useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { popularDestinations, regionalDestinations, allCountries } from '@/data/destinations';
import { cities } from '@/data/cities';
import { DestinationItem } from '@/components/ui/DestinationItem';

const DestinationsPage = () => {
  const [search, setSearch] = React.useState('');

  const filterByName = (item: { name: string } | { label: string }) => {
    const name = 'name' in item ? item.name : item.label;
    return name.toLowerCase().includes(search.toLowerCase());
  };

  const allDestinations = useMemo(() => {
    const combined = [
      ...popularDestinations,
      ...regionalDestinations.map(r => ({ ...r, flag: '🇪🇺' })), // Add a default flag for regions
      ...allCountries,
      ...cities.map(c => ({ name: c.label, value: c.value, flag: c.flag })),
    ];

    const uniqueDestinations = Array.from(
      new Map(combined.map(item => [item.value, item])).values()
    );
    
    return uniqueDestinations.sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filteredPopular = useMemo(() => popularDestinations.filter(filterByName), [search]);
  const filteredRegions = useMemo(() => regionalDestinations.filter(filterByName), [search]);
  const filteredCountries = useMemo(() => allCountries.filter(filterByName), [search]);
  const filteredCities = useMemo(() => cities.filter(filterByName), [search]);
  const filteredAll = useMemo(() => {
    if (!search) return allDestinations;
    return allDestinations.filter(dest => dest.name.toLowerCase().includes(search.toLowerCase()));
  }, [search, allDestinations]);

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Descubre nuestros más de 160 destinos disponibles</h1>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="¿A dónde viajas?"
            className="pl-12 h-14 text-base rounded-xl border-gray-300 focus-visible:ring-primary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Tabs defaultValue="popular" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="regional">Planes regionales</TabsTrigger>
            <TabsTrigger value="countries">Países</TabsTrigger>
            <TabsTrigger value="cities">Ciudades</TabsTrigger>
            <TabsTrigger value="all">Todos los destinos</TabsTrigger>
          </TabsList>

          <TabsContent value="popular" className="pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPopular.map((dest) => (
                <DestinationItem key={dest.value} {...dest} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="regional" className="pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRegions.map((dest) => (
                <DestinationItem key={dest.value} {...dest} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="countries" className="pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCountries.map((dest) => (
                <DestinationItem key={dest.value} {...dest} variant="list" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cities" className="pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCities.map((city) => (
                <DestinationItem key={city.value} name={city.label} value={city.value} flag={city.flag} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAll.map((dest) => (
                <DestinationItem key={dest.value} {...dest} variant="list" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DestinationsPage;