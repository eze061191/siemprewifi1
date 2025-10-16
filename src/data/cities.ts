export interface City {
  value: string;
  label: string;
  country: string;
  flag: string;
}

export const cities: City[] = [
  // North America
  { value: "new-york", label: "Nueva York", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "los-angeles", label: "Los Ángeles", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "chicago", label: "Chicago", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "miami", label: "Miami", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "toronto", label: "Toronto", country: "Canadá", flag: "🇨🇦" },
  { value: "vancouver", label: "Vancouver", country: "Canadá", flag: "🇨🇦" },
  { value: "mexico-city", label: "Ciudad de México", country: "México", flag: "🇲🇽" },
  { value: "cancun", label: "Cancún", country: "México", flag: "🇲🇽" },

  // South America
  { value: "buenos-aires", label: "Buenos Aires", country: "Argentina", flag: "🇦🇷" },
  { value: "sao-paulo", label: "São Paulo", country: "Brasil", flag: "🇧🇷" },
  { value: "rio-de-janeiro", label: "Río de Janeiro", country: "Brasil", flag: "🇧🇷" },
  { value: "santiago", label: "Santiago", country: "Chile", flag: "🇨🇱" },
  { value: "bogota", label: "Bogotá", country: "Colombia", flag: "🇨🇴" },
  { value: "medellin", label: "Medellín", country: "Colombia", flag: "🇨🇴" },
  { value: "lima", label: "Lima", country: "Perú", flag: "🇵🇪" },
  { value: "caracas", label: "Caracas", country: "Venezuela", flag: "🇻🇪" },
  { value: "quito", label: "Quito", country: "Ecuador", flag: "🇪🇨" },
  { value: "montevideo", label: "Montevideo", country: "Uruguay", flag: "🇺🇾" },

  // Europe
  { value: "london", label: "Londres", country: "Reino Unido", flag: "🇬🇧" },
  { value: "paris", label: "París", country: "Francia", flag: "🇫🇷" },
  { value: "madrid", label: "Madrid", country: "España", flag: "🇪🇸" },
  { value: "barcelona", label: "Barcelona", country: "España", flag: "🇪🇸" },
  { value: "rome", label: "Roma", country: "Italia", flag: "🇮🇹" },
  { value: "berlin", label: "Berlín", country: "Alemania", flag: "🇩🇪" },
  { value: "amsterdam", label: "Ámsterdam", country: "Países Bajos", flag: "🇳🇱" },
  { value: "lisbon", label: "Lisboa", country: "Portugal", flag: "🇵🇹" },
  { value: "dublin", label: "Dublín", country: "Irlanda", flag: "🇮🇪" },
  { value: "prague", label: "Praga", country: "República Checa", flag: "🇨🇿" },
  { value: "vienna", label: "Viena", country: "Austria", flag: "🇦🇹" },
  { value: "athens", label: "Atenas", country: "Grecia", flag: "🇬🇷" },
  { value: "moscow", label: "Moscú", country: "Rusia", flag: "🇷🇺" },

  // Asia
  { value: "tokyo", label: "Tokio", country: "Japón", flag: "🇯🇵" },
  { value: "beijing", label: "Pekín", country: "China", flag: "🇨🇳" },
  { value: "shanghai", label: "Shanghái", country: "China", flag: "🇨🇳" },
  { value: "hong-kong", label: "Hong Kong", country: "Hong Kong", flag: "🇭🇰" },
  { value: "seoul", label: "Seúl", country: "Corea del Sur", flag: "🇰🇷" },
  { value: "singapore", label: "Singapur", country: "Singapur", flag: "🇸🇬" },
  { value: "bangkok", label: "Bangkok", country: "Tailandia", flag: "🇹🇭" },
  { value: "dubai", label: "Dubái", country: "Emiratos Árabes Unidos", flag: "🇦🇪" },
  { value: "istanbul", label: "Estambul", country: "Turquía", flag: "🇹🇷" },
  { value: "mumbai", label: "Mumbai", country: "India", flag: "🇮🇳" },

  // Africa
  { value: "cairo", label: "El Cairo", country: "Egipto", flag: "🇪🇬" },
  { value: "cape-town", label: "Ciudad del Cabo", country: "Sudáfrica", flag: "🇿🇦" },
  { value: "lagos", label: "Lagos", country: "Nigeria", flag: "🇳🇬" },
  { value: "nairobi", label: "Nairobi", country: "Kenia", flag: "🇰🇪" },

  // Oceania
  { value: "sydney", label: "Sídney", country: "Australia", flag: "🇦🇺" },
  { value: "melbourne", label: "Melbourne", country: "Australia", flag: "🇦🇺" },
  { value: "auckland", label: "Auckland", country: "Nueva Zelanda", flag: "🇳🇿" },
];