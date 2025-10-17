export interface City {
  value: string;
  label: string;
  country: string;
  flag: string;
}

export const cities: City[] = [
  // Africa
  { value: "casablanca", label: "Casablanca", country: "Marruecos", flag: "🇲🇦" },
  { value: "cairo", label: "El Cairo", country: "Egipto", flag: "🇪🇬" },
  { value: "lagos", label: "Lagos", country: "Nigeria", flag: "🇳🇬" },
  { value: "kinshasa", label: "Kinshasa", country: "RD Congo", flag: "🇨🇩" },
  { value: "johannesburg", label: "Johannesburgo", country: "Sudáfrica", flag: "🇿🇦" },
  { value: "nairobi", label: "Nairobi", country: "Kenia", flag: "🇰🇪" },
  { value: "addis-ababa", label: "Adís Abeba", country: "Etiopía", flag: "🇪🇹" },
  { value: "cape-town", label: "Ciudad del Cabo", country: "Sudáfrica", flag: "🇿🇦" },
  
  // Asia
  { value: "tokyo", label: "Tokio", country: "Japón", flag: "🇯🇵" },
  { value: "delhi", label: "Delhi", country: "India", flag: "🇮🇳" },
  { value: "shanghai", label: "Shanghái", country: "China", flag: "🇨🇳" },
  { value: "mumbai", label: "Mumbai", country: "India", flag: "🇮🇳" },
  { value: "beijing", label: "Pekín", country: "China", flag: "🇨🇳" },
  { value: "dhaka", label: "Daca", country: "Bangladesh", flag: "🇧🇩" },
  { value: "osaka", label: "Osaka", country: "Japón", flag: "🇯🇵" },
  { value: "karachi", label: "Karachi", country: "Pakistán", flag: "🇵🇰" },
  { value: "jakarta", label: "Yakarta", country: "Indonesia", flag: "🇮🇩" },
  { value: "seoul", label: "Seúl", country: "Corea del Sur", flag: "🇰🇷" },
  { value: "bangkok", label: "Bangkok", country: "Tailandia", flag: "🇹🇭" },
  { value: "ho-chi-minh-city", label: "Ciudad Ho Chi Minh", country: "Vietnam", flag: "🇻🇳" },
  { value: "hong-kong", label: "Hong Kong", country: "Hong Kong", flag: "🇭🇰" },
  { value: "singapore", label: "Singapur", country: "Singapur", flag: "🇸🇬" },
  { value: "kuala-lumpur", label: "Kuala Lumpur", country: "Malasia", flag: "🇲🇾" },
  { value: "dubai", label: "Dubái", country: "Emiratos Árabes Unidos", flag: "🇦🇪" },
  { value: "istanbul", label: "Estambul", country: "Turquía", flag: "🇹🇷" },
  { value: "tel-aviv", label: "Tel Aviv", country: "Israel", flag: "🇮🇱" },

  // Europe
  { value: "moscow", label: "Moscú", country: "Rusia", flag: "🇷🇺" },
  { value: "london", label: "Londres", country: "Reino Unido", flag: "🇬🇧" },
  { value: "berlin", label: "Berlín", country: "Alemania", flag: "🇩🇪" },
  { value: "madrid", label: "Madrid", country: "España", flag: "🇪🇸" },
  { value: "rome", label: "Roma", country: "Italia", flag: "🇮🇹" },
  { value: "paris", label: "París", country: "Francia", flag: "🇫🇷" },
  { value: "kiev", label: "Kiev", country: "Ucrania", flag: "🇺🇦" },
  { value: "amsterdam", label: "Ámsterdam", country: "Países Bajos", flag: "🇳🇱" },
  { value: "athens", label: "Atenas", country: "Grecia", flag: "🇬🇷" },
  { value: "lisbon", label: "Lisboa", country: "Portugal", flag: "🇵🇹" },
  { value: "vienna", label: "Viena", country: "Austria", flag: "🇦🇹" },
  { value: "prague", label: "Praga", country: "República Checa", flag: "🇨🇿" },
  { value: "stockholm", label: "Estocolmo", country: "Suecia", flag: "🇸🇪" },
  { value: "dublin", label: "Dublín", country: "Irlanda", flag: "🇮🇪" },
  { value: "brussels", label: "Bruselas", country: "Bélgica", flag: "🇧🇪" },
  { value: "copenhagen", label: "Copenhague", country: "Dinamarca", flag: "🇩🇰" },
  { value: "warsaw", label: "Varsovia", country: "Polonia", flag: "🇵🇱" },
  { value: "budapest", label: "Budapest", country: "Hungría", flag: "🇭🇺" },
  { value: "oslo", label: "Oslo", country: "Noruega", flag: "🇳🇴" },
  { value: "helsinki", label: "Helsinki", country: "Finlandia", flag: "🇫🇮" },
  { value: "zurich", label: "Zúrich", country: "Suiza", flag: "🇨🇭" },

  // North America
  { value: "mexico-city", label: "Ciudad de México", country: "México", flag: "🇲🇽" },
  { value: "new-york", label: "Nueva York", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "los-angeles", label: "Los Ángeles", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "toronto", label: "Toronto", country: "Canadá", flag: "🇨🇦" },
  { value: "chicago", label: "Chicago", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "houston", label: "Houston", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "havana", label: "La Habana", country: "Cuba", flag: "🇨🇺" },
  { value: "montreal", label: "Montreal", country: "Canadá", flag: "🇨🇦" },
  { value: "miami", label: "Miami", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "san-francisco", label: "San Francisco", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "vancouver", label: "Vancouver", country: "Canadá", flag: "🇨🇦" },
  { value: "las-vegas", label: "Las Vegas", country: "Estados Unidos", flag: "🇺🇸" },
  { value: "cancun", label: "Cancún", country: "México", flag: "🇲🇽" },

  // South America
  { value: "sao-paulo", label: "São Paulo", country: "Brasil", flag: "🇧🇷" },
  { value: "buenos-aires", label: "Buenos Aires", country: "Argentina", flag: "🇦🇷" },
  { value: "rio-de-janeiro", label: "Río de Janeiro", country: "Brasil", flag: "🇧🇷" },
  { value: "bogota", label: "Bogotá", country: "Colombia", flag: "🇨🇴" },
  { value: "lima", label: "Lima", country: "Perú", flag: "🇵🇪" },
  { value: "santiago", label: "Santiago", country: "Chile", flag: "🇨🇱" },
  { value: "caracas", label: "Caracas", country: "Venezuela", flag: "🇻🇪" },
  { value: "medellin", label: "Medellín", country: "Colombia", flag: "🇨🇴" },
  { value: "montevideo", label: "Montevideo", country: "Uruguay", flag: "🇺🇾" },
  { value: "quito", label: "Quito", country: "Ecuador", flag: "🇪🇨" },
  { value: "la-paz", label: "La Paz", country: "Bolivia", flag: "🇧🇴" },
  { value: "cusco", label: "Cusco", country: "Perú", flag: "🇵🇪" },

  // Oceania
  { value: "sydney", label: "Sídney", country: "Australia", flag: "🇦🇺" },
  { value: "melbourne", label: "Melbourne", country: "Australia", flag: "🇦🇺" },
  { value: "auckland", label: "Auckland", country: "Nueva Zelanda", flag: "🇳🇿" },
  { value: "brisbane", label: "Brisbane", country: "Australia", flag: "🇦🇺" },
  { value: "perth", label: "Perth", country: "Australia", flag: "🇦🇺" },
  { value: "wellington", label: "Wellington", country: "Nueva Zelanda", flag: "🇳🇿" },
];