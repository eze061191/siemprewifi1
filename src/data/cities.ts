export interface City {
  value: string;
  label: string;
  country: string;
  flag: string;
}

export const cities: City[] = [
  // USA
  { value: "new-york", label: "Nueva York", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "los-angeles", label: "Los Ángeles", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "miami", label: "Miami", country: "Estados Unidos", flag: "🇺🇸" },
  // Spain
  { value: "madrid", label: "Madrid", country: "España", flag: "🇪🇸" },
  { value: "barcelona", label: "Barcelona", country: "España", flag: "🇪🇸" },
  // France
  { value: "paris", label: "París", country: "Francia", flag: "🇫🇷" },
  // UK
  { value: "london", label: "Londres", country: "Reino Unido", flag: "🇬🇧" },
  // Italy
  { value: "rome", label: "Roma", country: "Italia", flag: "🇮🇹" },
  // Japan
  { value: "tokyo", label: "Tokio", country: "Japón", flag: "🇯🇵" },
  // Argentina
  { value: "buenos-aires", label: "Buenos Aires", country: "Argentina", flag: "🇦🇷" },
  // Mexico
  { value: "mexico-city", label: "Ciudad de México", country: "México", flag: "🇲🇽" },
  { value: "cancun", label: "Cancún", country: "México", flag: "🇲🇽" },
];