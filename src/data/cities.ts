export interface City {
  value: string;
  label: string;
  country: string;
  flag: string;
}

export const cities: City[] = [
  // South America
  { value: "buenos-aires", label: "Buenos Aires", country: "Argentina", flag: "🇦🇷" },
  { value: "sao-paulo", label: "São Paulo", country: "Brasil", flag: "🇧🇷" },
  { value: "rio-de-janeiro", label: "Río de Janeiro", country: "Brasil", flag: "🇧🇷" },
  { value: "santiago", label: "Santiago", country: "Chile", flag: "🇨🇱" },
  { value: "bogota", label: "Bogotá", country: "Colombia", flag: "🇨🇴" },
  { value: "medellin", label: "Medellín", country: "Colombia", flag: "🇨🇴" },
  { value: "lima", label: "Lima", country: "Perú", flag: "🇵🇪" },
  { value: "caracas", label: "Caracas", country: "Venezuela", flag: "🇻🇪" },
  
  // North America
  { value: "mexico-city", label: "Ciudad de México", country: "México", flag: "🇲🇽" },
  { value: "cancun", label: "Cancún", country: "México", flag: "🇲🇽" },
  { value: "new-york", label: "Nueva York", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "los-angeles", label: "Los Ángeles", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "miami", label: "Miami", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "toronto", label: "Toronto", country: "Canadá", flag: "🇨🇦" },

  // Europe
  { value: "madrid", label: "Madrid", country: "España", flag: "🇪🇸" },
  { value: "barcelona", label: "Barcelona", country: "España", flag: "🇪🇸" },
  { value: "paris", label: "París", country: "Francia", flag: "🇫🇷" },
  { value: "london", label: "Londres", country: "Reino Unido", flag: "🇬🇧" },
  { value: "rome", label: "Roma", country: "Italia", flag: "🇮🇹" },
  { value: "berlin", label: "Berlín", country: "Alemania", flag: "🇩🇪" },
  { value: "amsterdam", label: "Ámsterdam", country: "Países Bajos", flag: "🇳🇱" },

  // Asia
  { value: "tokyo", label: "Tokio", country: "Japón", flag: "🇯🇵" },
  { value: "seoul", label: "Seúl", country: "Corea del Sur", flag: "🇰🇷" },
  { value: "beijing", label: "Pekín", country: "China", flag: "🇨🇳" },
  { value: "singapore", label: "Singapur", country: "Singapur", flag: "🇸🇬" },

  // Oceania
  { value: "sydney", label: "Sídney", country: "Australia", flag: "🇦🇺" },
];