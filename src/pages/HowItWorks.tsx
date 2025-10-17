import React from 'react';
import { HowItWorks as HowItWorksSection } from '@/components/sections/HowItWorks';

export const HowItWorks = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center mb-8">Cómo Funciona</h1>
      <HowItWorksSection 
        title="Conectarte es así de fácil" 
        subtitle="En solo 4 simples pasos estarás conectado en cualquier parte del mundo." 
      />
    </div>
  );
};

export default HowItWorks;