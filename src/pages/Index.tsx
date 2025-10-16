import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Features } from "@/components/sections/Features";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { EsimOrSim } from "@/components/sections/EsimOrSim";
import { Testimonials } from "@/components/sections/Testimonials";
import { Coverage } from "@/components/sections/Coverage";
import { BusinessSolutions } from "@/components/sections/BusinessSolutions";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";

const Index = () => {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Features />
      <SocialProof />
      <HowItWorks />
      <Pricing />
      <EsimOrSim />
      <Testimonials />
      <Coverage />
      <BusinessSolutions />
      <Faq />
      <Cta />
    </>
  );
};

export default Index;