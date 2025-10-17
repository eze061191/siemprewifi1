import { useMemo } from 'react';
import { allCountries, regionalDestinations, Destination } from '@/data/destinations';
import { cities, City } from '@/data/cities';

interface DestinationItem {
  name: string;
  value: string;
  flag?: string;
  type: 'region' | 'country' | 'city';
}

export const useDestinations = () => {
  const allDestinations = useMemo(() => {
    const regions: DestinationItem[] = regionalDestinations.map(d => ({ ...d, type: 'region' }));
    const countries: DestinationItem[] = allCountries.map(d => ({ ...d, type: 'country' }));
    const cityList: DestinationItem[] = cities.map(c => ({ 
      name: c.label, 
      value: c.value, 
      flag: c.flag, 
      type: 'city' 
    }));

    // Combinar y eliminar duplicados (si un país aparece como región y país, priorizamos la categoría)
    const combined = [...regions, ...countries, ...cityList];
    
    // Simple deduplicación basada en 'value'
    const uniqueDestinations = combined.reduce((acc, current) => {
      if (!acc.some(item => item.value === current.value)) {
        acc.push(current);
      }
      return acc;
    }, [] as DestinationItem[]);

    return uniqueDestinations;
  }, []);

  const categorizedDestinations = useMemo(() => {
    const categories = {
      regions: allDestinations.filter(d => d.type === 'region'),
      countries: allDestinations.filter(d => d.type === 'country'),
      cities: allDestinations.filter(d => d.type === 'city'),
    };
    return categories;
  }, [allDestinations]);

  return { allDestinations, categorizedDestinations };
};