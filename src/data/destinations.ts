// src/data/destinations.ts

export interface Destination {
  name: string;
  value: string;
  flag?: string;
}

export const popularDestinations: Destination[] = [
  { name: "Europa", value: "europa", flag: "🇪🇺" },
  { name: "Estados Unidos", value: "usa", flag: "🇺🇸" },
  { name: "México", value: "mexico", flag: "🇲🇽" },
  { name: "Colombia", value: "colombia", flag: "🇨🇴" },
  { name: "Chile", value: "chile", flag: "🇨🇱" },
  { name: "Argentina", value: "argentina", flag: "🇦🇷" },
];

export const regionalDestinations: Destination[] = [
  { name: "Europa", value: "europa", flag: "🇪🇺" },
  { name: "Asia", value: "asia", flag: "🌏" },
  { name: "Múltiples destinos", value: "multiple", flag: "🗺️" },
];

export const allCountries: Destination[] = [
  { name: "España", value: "spain", flag: "🇪🇸" },
  { name: "Francia", value: "france", flag: "🇫🇷" },
  { name: "Italia", value: "italy", flag: "🇮🇹" },
  { name: "Alemania", value: "germany", flag: "🇩🇪" },
  { name: "Canadá", value: "canada", flag: "🇨🇦" },
  { name: "Brasil", value: "brazil", flag: "🇧🇷" },
  { name: "Perú", value: "peru", flag: "🇵🇪" },
  { name: "Ecuador", value: "ecuador", flag: "🇪🇨" },
  { name: "Uruguay", value: "uruguay", flag: "🇺🇾" },
  { name: "Paraguay", value: "paraguay", flag: "🇵🇾" },
];