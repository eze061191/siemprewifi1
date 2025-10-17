import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import TopDestinations from "@/components/sections/TopDestinations";
import TravelGuides from "@/components/sections/TravelGuides";
import Testimonials from "@/components/sections/Testimonials";
import Cta from "@/components/sections/Cta";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <TrustBadges />
        <TopDestinations />
        <TravelGuides />
        <Testimonials />
        <Cta />
      </main>
    </div>
  );
};

export default Index;