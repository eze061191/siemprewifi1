import React from 'react';
import { Faq as FaqSection } from '@/components/sections/Faq';

export const Faq = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center mb-8">Preguntas Frecuentes</h1>
      <FaqSection />
    </div>
  );
};

export default Faq;