import React from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40">
      <div className="flex flex-col p-4 space-y-2">
        <Link to="/about-us" className="block py-2 text-gray-700 hover:bg-gray-50" onClick={onClose}>
          About Us
        </Link>
        <Link to="/contact" className="block py-2 text-gray-700 hover:bg-gray-50" onClick={onClose}>
          Contact
        </Link>
        <Link to="/blog" className="block py-2 text-gray-700 hover:bg-gray-50" onClick={onClose}>
          Blog
        </Link>
        <Link to="/login" className="block py-2 text-orange-600 hover:bg-gray-50" onClick={onClose}>
          Login
        </Link>
      </div>
    </div>
  );
};