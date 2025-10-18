"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Search } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { allDestinations } from "@/data/all-destinations"

export function PlanFinder() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const navigate = useNavigate();

  const handleSelect = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);
    if (currentValue) {
      navigate(`/plans?destination=${currentValue}`);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
      <div className="flex items-center space-x-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                aria-expanded={open}
                className="w-full justify-between pl-9 text-left font-normal text-gray-500"
              >
                {value
                  ? allDestinations.find((dest) => dest.value === value)?.label
                  : "Elige tu destino..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
              <Command>
                <CommandInput placeholder="Buscar destino..." />
                <CommandList>
                  <CommandEmpty>No se encontró el destino.</CommandEmpty>
                  <CommandGroup>
                    {allDestinations.map((dest) => (
                      <CommandItem
                        key={dest.value}
                        value={dest.value}
                        onSelect={handleSelect}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === dest.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {dest.label}
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
  )
}