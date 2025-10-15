import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wifi, Zap, ShieldCheck, Star, Check, Users, Mail, QrCode, PlaneTakeoff, Globe, Tag, CheckCircle, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const ColorSwatch = ({ color, name, hex }: { color: string; name: string; hex: string }) => (
  <div>
    <div className={`h-20 w-full rounded-lg ${color} border border-gray-200`}></div>
    <p className="mt-2 font-semibold">{name}</p>
    <p className="text-sm text-muted-foreground">{hex}</p>
  </div>
);

const IconDisplay = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="text-primary">{React.cloneElement(icon as React.ReactElement, { size: 32 })}</div>
    <p className="text-xs text-muted-foreground">{name}</p>
  </div>
);

const StyleGuide = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-2">Guía de Estilos</h1>
        <p className="text-lg text-muted-foreground">
          El sistema de diseño y componentes para SiempreWIFI.
        </p>
      </header>

      {/* Colors Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b">Colores</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <ColorSwatch color="bg-primary" name="Primary" hex="#F78700" />
          <ColorSwatch color="bg-secondary" name="Secondary" hex="#F8F9FA" />
          <ColorSwatch color="bg-background" name="Background" hex="#FFFFFF" />
          <ColorSwatch color="bg-foreground" name="Foreground" hex="#212529" />
          <ColorSwatch color="bg-accent" name="Accent" hex="#F8F9FA" />
          <ColorSwatch color="bg-destructive" name="Destructive" hex="#DC3545" />
          <ColorSwatch color="bg-black" name="Black" hex="#000000" />
        </div>
      </section>

      {/* Typography Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b">Tipografía</h2>
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground">Familia de Fuente: Inter</p>
          <h1 className="text-6xl font-extrabold">Heading 1</h1>
          <h2 className="text-4xl font-bold">Heading 2</h2>
          <h3 className="text-2xl font-semibold">Heading 3</h3>
          <p className="text-lg">
            Body Large - El rápido zorro marrón salta sobre el perro perezoso.
          </p>
          <p>
            Body Regular - El rápido zorro marrón salta sobre el perro perezoso.
          </p>
          <a href="#" className="text-primary hover:underline">
            Este es un enlace de ejemplo.
          </a>
        </div>
      </section>

      {/* Icons Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b">Iconos</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6 text-center">
          <IconDisplay icon={<Wifi />} name="Wifi" />
          <IconDisplay icon={<Zap />} name="Zap" />
          <IconDisplay icon={<ShieldCheck />} name="ShieldCheck" />
          <IconDisplay icon={<Star />} name="Star" />
          <IconDisplay icon={<Check />} name="Check" />
          <IconDisplay icon={<Users />} name="Users" />
          <IconDisplay icon={<Mail />} name="Mail" />
          <IconDisplay icon={<QrCode />} name="QrCode" />
          <IconDisplay icon={<PlaneTakeoff />} name="PlaneTakeoff" />
          <IconDisplay icon={<Globe />} name="Globe" />
          <IconDisplay icon={<Tag />} name="Tag" />
          <IconDisplay icon={<CheckCircle />} name="CheckCircle" />
          <IconDisplay icon={<Phone />} name="Phone" />
          <IconDisplay icon={<Facebook />} name="Facebook" />
          <IconDisplay icon={<Twitter />} name="Twitter" />
          <IconDisplay icon={<Instagram />} name="Instagram" />
        </div>
      </section>

      {/* Components Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b">Componentes</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Botones</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button>Primario</Button>
              <Button variant="secondary">Secundario</Button>
              <Button variant="outline">Contorno</Button>
              <Button variant="destructive">Destructivo</Button>
              <Button variant="ghost">Fantasma</Button>
              <Button variant="link">Enlace</Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Entradas y Etiquetas</h3>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email-example">Email</Label>
              <Input type="email" id="email-example" placeholder="tu@email.com" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Selector</h3>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="opcion1">Opción 1</SelectItem>
                <SelectItem value="opcion2">Opción 2</SelectItem>
                <SelectItem value="opcion3">Opción 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Tarjeta</h3>
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Título de la Tarjeta</CardTitle>
                <CardDescription>Descripción de la tarjeta.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>El contenido de la tarjeta va aquí.</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Acordeón</h3>
            <Accordion type="single" collapsible className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Es accesible?</AccordionTrigger>
                <AccordionContent>
                  Sí. Se adhiere al patrón de diseño WAI-ARIA.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Tiene estilos?</AccordionTrigger>
                <AccordionContent>
                  Sí. Viene con estilos por defecto que coinciden con el sistema de diseño.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Pestañas</h3>
            <Tabs defaultValue="cuenta" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="cuenta">Cuenta</TabsTrigger>
                <TabsTrigger value="contrasena">Contraseña</TabsTrigger>
              </TabsList>
              <TabsContent value="cuenta">
                Realiza cambios en tu cuenta aquí.
              </TabsContent>
              <TabsContent value="contrasena">
                Cambia tu contraseña aquí.
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Animations & Effects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b">Animaciones y Efectos</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Animaciones CSS</h3>
            <p className="mb-4 text-muted-foreground">
              Utilizamos animaciones sutiles para mejorar la experiencia del usuario. Estas están definidas en `tailwind.config.ts`.
            </p>
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Animación de Acordeón</CardTitle>
                <CardDescription>
                  El componente de acordeón utiliza las siguientes animaciones:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <code className="bg-muted px-2 py-1 rounded">accordion-down</code>: Desliza el contenido hacia abajo al abrir.
                  </li>
                  <li>
                    <code className="bg-muted px-2 py-1 rounded">accordion-up</code>: Desliza el contenido hacia arriba al cerrar.
                  </li>
                </ul>
                <p className="mt-4">
                  Puedes ver esta animación en acción en el componente de Acordeón de arriba.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Efectos Interactivos (p5.js)</h3>
            <p className="mb-4 text-muted-foreground">
              Para una experiencia más dinámica, utilizamos efectos visuales creados con p5.js.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Efecto de Partículas en Hero</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Un efecto de partículas flotantes que se encuentra en el fondo de la sección principal (Hero). Proporciona un ambiente sutil y tecnológico.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Componente: <code className="bg-muted px-2 py-1 rounded">HeroParticleEffect.tsx</code>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Efecto de Cursor WiFi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Un efecto que genera ondas de señal WiFi al hacer clic en cualquier parte de la página, haciendo la interacción más atractiva.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Componente: <code className="bg-muted px-2 py-1 rounded">WifiCursorEffect.tsx</code>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;