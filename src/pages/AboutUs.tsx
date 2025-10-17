import React from 'react';

export const AboutUs = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center mb-8">Sobre Nosotros</h1>
      <p className="text-lg text-center text-gray-600">
        Somos SiempreWIFI, tu compañero de viaje para mantenerte conectado en todo el mundo.
        Nuestra misión es ofrecerte internet rápido, seguro y sin complicaciones,
        para que disfrutes al máximo de cada aventura.
      </p>
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-secondary p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
          <p className="text-gray-700">
            Creemos que la conectividad no debería ser una barrera para explorar el mundo.
            Por eso, trabajamos para que cada viajero tenga acceso a internet de alta calidad,
            sin importar su destino.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Confiabilidad: Conexión estable dondequiera que vayas.</li>
            <li>Simplicidad: Fácil de usar, sin complicaciones.</li>
            <li>Soporte: Siempre estamos aquí para ayudarte.</li>
            <li>Innovación: Siempre buscando las mejores soluciones.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;