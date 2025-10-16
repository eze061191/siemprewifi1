export interface City {
  value: string;
  label: string;
  country: string;
  flag: string;
}

// A much more comprehensive list of world cities
export const cities: City[] = [
  // North America
  { value: "new-york", label: "Nueva York", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "los-angeles", label: "Los Ángeles", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "chicago", label: "Chicago", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "houston", label: "Houston", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "phoenix", label: "Phoenix", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "philadelphia", label: "Filadelfia", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "san-antonio", label: "San Antonio", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "san-diego", label: "San Diego", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "dallas", label: "Dallas", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "san-jose", label: "San José", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "toronto", label: "Toronto", country: "Canadá", flag: "🇨🇦" },
  { value: "montreal", label: "Montreal", country: "Canadá", flag: "🇨🇦" },
  { value: "vancouver", label: "Vancouver", country: "Canadá", flag: "🇨🇦" },
  { value: "mexico-city", label: "Ciudad de México", country: "México", flag: "🇲🇽" },
  { value: "cancun", label: "Cancún", country: "México", flag: "🇲🇽" },
  { value: "guadalajara", label: "Guadalajara", country: "México", flag: "🇲🇽" },

  // South America
  { value: "sao-paulo", label: "São Paulo", country: "Brasil", flag: "🇧🇷" },
  { value: "rio-de-janeiro", label: "Río de Janeiro", country: "Brasil", flag: "🇧🇷" },
  { value: "buenos-aires", label: "Buenos Aires", country: "Argentina", flag: "🇦🇷" },
  { value: "cordoba-ar", label: "Córdoba", country: "Argentina", flag: "🇦🇷" },
  { value: "lima", label: "Lima", country: "Perú", flag: "🇵🇪" },
  { value: "bogota", label: "Bogotá", country: "Colombia", flag: "🇨🇴" },
  { value: "medellin", label: "Medellín", country: "Colombia", flag: "🇨🇴" },
  { value: "santiago", label: "Santiago", country: "Chile", flag: "🇨🇱" },
  { value: "caracas", label: "Caracas", country: "Venezuela", flag: "🇻🇪" },
  { value: "quito", label: "Quito", country: "Ecuador", flag: "🇪🇨" },
  { value: "montevideo", label: "Montevideo", country: "Uruguay", flag: "🇺🇾" },

  // Europe
  { value: "london", label: "Londres", country: "Reino Unido", flag: "🇬🇧" },
  { value: "manchester", label: "Mánchester", country: "Reino Unido", flag: "🇬🇧" },
  { value: "berlin", label: "Berlín", country: "Alemania", flag: "🇩🇪" },
  { value: "hamburg", label: "Hamburgo", country: "Alemania", flag: "🇩🇪" },
  { value: "munich", label: "Múnich", country: "Alemania", flag: "🇩🇪" },
  { value: "madrid", label: "Madrid", country: "España", flag: "🇪🇸" },
  { value: "barcelona", label: "Barcelona", country: "España", flag: "🇪🇸" },
  { value: "valencia", label: "Valencia", country: "España", flag: "🇪🇸" },
  { value: "paris", label: "París", country: "Francia", flag: "🇫🇷" },
  { value: "marseille", label: "Marsella", country: "Francia", flag: "🇫🇷" },
  { value: "rome", label: "Roma", country: "Italia", flag: "🇮🇹" },
  { value: "milan", label: "Milán", country: "Italia", flag: "🇮🇹" },
  { value: "moscow", label: "Moscú", country: "Rusia", flag: "🇷🇺" },
  { value: "saint-petersburg", label: "San Petersburgo", country: "Rusia", flag: "🇷🇺" },
  { value: "amsterdam", label: "Ámsterdam", country: "Países Bajos", flag: "🇳🇱" },
  { value: "brussels", label: "Bruselas", country: "Bélgica", flag: "🇧🇪" },
  { value: "vienna", label: "Viena", country: "Austria", flag: "🇦🇹" },
  { value: "zurich", label: "Zúrich", country: "Suiza", flag: "🇨🇭" },
  { value: "athens", label: "Atenas", country: "Grecia", flag: "🇬🇷" },
  { value: "lisbon", label: "Lisboa", country: "Portugal", flag: "🇵🇹" },
  { value: "stockholm", label: "Estocolmo", country: "Suecia", flag: "🇸🇪" },
  { value: "oslo", label: "Oslo", country: "Noruega", flag: "🇳🇴" },
  { value: "copenhagen", label: "Copenhague", country: "Dinamarca", flag: "🇩🇰" },
  { value: "dublin", label: "Dublín", country: "Irlanda", flag: "🇮🇪" },
  { value: "prague", label: "Praga", country: "República Checa", flag: "🇨🇿" },
  { value: "warsaw", label: "Varsovia", country: "Polonia", flag: "🇵🇱" },

  // Asia
  { value: "tokyo", label: "Tokio", country: "Japón", flag: "🇯🇵" },
  { value: "osaka", label: "Osaka", country: "Japón", flag: "🇯🇵" },
  { value: "delhi", label: "Delhi", country: "India", flag: "🇮🇳" },
  { value: "mumbai", label: "Mumbai", country: "India", flag: "🇮🇳" },
  { value: "shanghai", label: "Shanghái", country: "China", flag: "🇨🇳" },
  { value: "beijing", label: "Pekín", country: "China", flag: "🇨🇳" },
  { value: "seoul", label: "Seúl", country: "Corea del Sur", flag: "🇰🇷" },
  { value: "jakarta", label: "Yakarta", country: "Indonesia", flag: "🇮🇩" },
  { value: "bangkok", label: "Bangkok", country: "Tailandia", flag: "🇹🇭" },
  { value: "hong-kong", label: "Hong Kong", country: "Hong Kong", flag: "🇭🇰" },
  { value: "singapore", label: "Singapur", country: "Singapur", flag: "🇸🇬" },
  { value: "dubai", label: "Dubái", country: "Emiratos Árabes Unidos", flag: "🇦🇪" },
  { value: "istanbul", label: "Estambul", country: "Turquía", flag: "🇹🇷" },
  { value: "tel-aviv", label: "Tel Aviv", country: "Israel", flag: "🇮🇱" },

  // Africa
  { value: "lagos", label: "Lagos", country: "Nigeria", flag: "🇳🇬" },
  { value: "cairo", label: "El Cairo", country: "Egipto", flag: "🇪🇬" },
  { value: "kinshasa", label: "Kinsasa", country: "RD Congo", flag: "🇨🇩" },
  { value: "johannesburg", label: "Johannesburgo", country: "Sudáfrica", flag: "🇿🇦" },
  { value: "cape-town", label: "Ciudad del Cabo", country: "Sudáfrica", flag: "🇿🇦" },
  { value: "nairobi", label: "Nairobi", country: "Kenia", flag: "🇰🇪" },
  { value: "casablanca", label: "Casablanca", country: "Marruecos", flag: "🇲🇦" },

  // Oceania
  { value: "sydney", label: "Sídney", country: "Australia", flag: "🇦🇺" },
  { value: "melbourne", label: "Melbourne", country: "Australia", flag: "🇦🇺" },
  { value: "brisbane", label: "Brisbane", country: "Australia", flag: "🇦🇺" },
  { value: "auckland", label: "Auckland", country: "Nueva Zelanda", flag: "🇳🇿" },
];