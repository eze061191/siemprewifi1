import Hero from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Cta } from "@/components/sections/Cta";

const Index = () => {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
};

export default Index;