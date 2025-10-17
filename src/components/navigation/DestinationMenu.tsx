import React from 'react';

export const DestinationMenu = () => {
  // Placeholder for a dropdown or complex navigation item
  return (
    <div className="text-gray-500 hover:text-gray-900 font-medium relative group transition-colors duration-300 cursor-pointer">
      Destinations
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </div>
  );
};