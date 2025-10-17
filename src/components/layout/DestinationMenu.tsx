"use client"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useNavigate } from "react-router-dom"
import { popularDestinations } from "@/data/destinations"

export function DestinationMenu() {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");

  const handleDestinationClick = (destination: string) => {
    navigate(`/plans?destination=${destination}&days=7`);
  };

  const filteredDestinations = popularDestinations.filter(dest =>
    dest.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium text-gray-500 hover:text-gray-900 bg-transparent text-base p-0 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
            ¿A dónde viajas?
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-6 w-[600px] lg:w-[800px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Destinos</h3>
              </div>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="¿A dónde viajas?"
                  className="pl-10 h-12 text-base"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Tabs defaultValue="popular" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="regional">Planes regionales</TabsTrigger>
                  <TabsTrigger value="all">Todos los destinos</TabsTrigger>
                </TabsList>
                <TabsContent value="popular" className="pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {filteredDestinations.map((dest) => (
                      <button
                        key={dest.value}
                        onClick={() => handleDestinationClick(dest.value)}
                        className="flex items-center p-3 rounded-lg border hover:bg-accent text-left transition-colors"
                      >
                        <span className="text-2xl mr-3">{dest.flag}</span>
                        <span className="font-medium">{dest.name}</span>
                      </button>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="regional" className="pt-4 text-center text-muted-foreground">
                  <p>Planes regionales próximamente.</p>
                </TabsContent>
                <TabsContent value="all" className="pt-4 text-center text-muted-foreground">
                  <p>Todos los destinos próximamente.</p>
                </TabsContent>
              </Tabs>
              <div className="mt-6 text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  Explorar Destinos
                </Button>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}