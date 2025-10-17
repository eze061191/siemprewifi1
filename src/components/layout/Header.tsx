import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { DestinationMenu } from '../../navigation/DestinationMenu';
import { MobileMenu } from '../../navigation/MobileMenu';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Base classes for navigation links
  const navLinkClasses = "font-medium text-gray-500 hover:text-gray-900 relative group transition-colors duration-300";
  const underlineClasses = "absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              TravelApp
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-2 items-center">
            <DestinationMenu />
            {/* Applying the new hover effect */}
            <Link to="/about-us" className={navLinkClasses}>
              About Us
              <span className={underlineClasses}></span>
            </Link>
            <Link to="/contact" className={navLinkClasses}>
              Contact
              <span className={underlineClasses}></span>
            </Link>
            <Link to="/blog" className={navLinkClasses}>
              Blog
              <span className={underlineClasses}></span>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="ml-4">
                Login
              </Button>
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
    </header>
  );
};