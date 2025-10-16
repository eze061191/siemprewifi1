import Hero from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <TrustBadges />
        {/* Aquí puedes agregar más secciones de tu página */}
      </main>
    </div>
  );
};

export default Index;