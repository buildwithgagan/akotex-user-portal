
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/70753024-7e70-4502-981c-d3cc6d7218b7.png" 
                  alt="Akotex Group Logo" 
                  className="h-10 w-auto" // Changed from h-8 to h-10 to make the logo bigger
                />
              </Link>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-akotex-black hover:text-akotex-red px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/investments" className="text-akotex-black hover:text-akotex-red px-3 py-2 text-sm font-medium">
              Investments
            </Link>
            <Link to="/performance" className="text-akotex-black hover:text-akotex-red px-3 py-2 text-sm font-medium">
              Performance
            </Link>
            <Button asChild variant="outline" className="border-akotex-black text-akotex-black hover:bg-akotex-black hover:text-white">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-akotex-red hover:bg-akotex-darkred text-white">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-akotex-black hover:text-akotex-red hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-akotex-black hover:text-akotex-red hover:bg-gray-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/investments" 
              className="block px-3 py-2 rounded-md text-akotex-black hover:text-akotex-red hover:bg-gray-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Investments
            </Link>
            <Link 
              to="/performance" 
              className="block px-3 py-2 rounded-md text-akotex-black hover:text-akotex-red hover:bg-gray-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Performance
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3 gap-2">
                <Button asChild variant="outline" className="w-full border-akotex-black text-akotex-black hover:bg-akotex-black hover:text-white">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                </Button>
                <Button asChild className="w-full bg-akotex-red hover:bg-akotex-darkred text-white">
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
