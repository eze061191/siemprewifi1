// src/data/cities.ts

export interface City {
  label: string;
  value: string;
  flag?: string;
}

export const cities: City[] = [
  { label: "Madrid", value: "madrid", flag: "🇪🇸" },
  { label: "Barcelona", value: "barcelona", flag: "🇪🇸" },
  { label: "París", value: "paris", flag: "🇫🇷" },
  { label: "Roma", value: "roma", flag: "🇮🇹" },
  { label: "Nueva York", value: "new-york", flag: "🇺🇸" },
  { label: "Londres", value: "london", flag: "🇬🇧" },
];