import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { SocialProof } from "@/components/sections/SocialProof";
import { WifiCursorEffect } from "@/components/effects/WifiCursorEffect";

const Index = () => {
  return (
    <div className="bg-white relative">
      <WifiCursorEffect />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <SocialProof />
          <Testimonials />
          <Faq />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;