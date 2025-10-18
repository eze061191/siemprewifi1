import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { allDestinations, Destination } from "@/data/all-destinations";
import { ChevronsUpDown } from "lucide-react";

export const PlanFinder = () => {
  const [open, setOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const navigate = useNavigate();

  const handleSelect = (destination: Destination) => {
    setSelectedDestination(destination);
    setOpen(false);
    navigate(`/plans/${destination.value}`);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Encuentra el plan perfecto para tu próximo viaje
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Selecciona tu destino y descubre nuestras ofertas de eSIM.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <div>
            <label htmlFor="destination" className="block text-lg font-semibold text-gray-800 mb-2">
              ¿A dónde viajas?
            </label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <button
                  role="combobox"
                  aria-expanded={open}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full justify-between h-14 text-left text-lg"
                  )}
                >
                  {selectedDestination
                    ? selectedDestination.label
                    : "Selecciona un destino..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[450px] p-0">
                <Command>
                  <CommandInput placeholder="Buscar destino..." />
                  <CommandList>
                    <CommandEmpty>No se encontró el destino.</CommandEmpty>
                    <CommandGroup>
                      {allDestinations.map((destination) => (
                        <CommandItem
                          key={destination.value}
                          value={destination.value}
                          onSelect={() => handleSelect(destination)}
                        >
                          {destination.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </section>
  );
};