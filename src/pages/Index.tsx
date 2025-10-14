import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { SocialProof } from "@/components/sections/SocialProof";

const Index = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <SocialProof />
      <Testimonials />
      <Faq />
    </>
  );
};

export default Index;