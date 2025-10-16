export interface Destination {
  value: string;
  label: string;
  flag: string;
}

export const destinations: Destination[] = [
  { value: "estados-unidos", label: "Estados Unidos", flag: "🇺🇸" },
  { value: "canada", label: "Canadá", flag: "🇨🇦" },
  { value: "mexico", label: "México", flag: "🇲🇽" },
  { value: "brasil", label: "Brasil", flag: "🇧🇷" },
  { value: "argentina", label: "Argentina", flag: "🇦🇷" },
  { value: "reino-unido", label: "Reino Unido", flag: "🇬🇧" },
  { value: "alemania", label: "Alemania", flag: "🇩🇪" },
  { value: "francia", label: "Francia", flag: "🇫🇷" },
  { value: "italia", label: "Italia", flag: "🇮🇹" },
  { value: "espana", label: "España", flag: "🇪🇸" },
  { value: "japon", label: "Japón", flag: "🇯🇵" },
  { value: "china", label: "China", flag: "🇨🇳" },
  { value: "australia", label: "Australia", flag: "🇦🇺" },
  { value: "europa", label: "Europa", flag: "🇪🇺" },
];