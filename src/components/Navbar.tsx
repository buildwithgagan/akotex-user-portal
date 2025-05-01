
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-akotex-blue text-2xl font-bold">AKOTEX</span>
                <span className="text-akotex-gold ml-1 text-2xl font-bold">WEALTH</span>
              </Link>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-akotex-blue px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/investments" className="text-gray-700 hover:text-akotex-blue px-3 py-2 text-sm font-medium">
              Investments
            </Link>
            <Link to="/performance" className="text-gray-700 hover:text-akotex-blue px-3 py-2 text-sm font-medium">
              Performance
            </Link>
            <Button asChild variant="outline" className="border-akotex-blue text-akotex-blue hover:bg-akotex-blue hover:text-white">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-akotex-blue hover:bg-akotex-darkblue text-white">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-akotex-blue hover:bg-gray-100"
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
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-akotex-blue hover:bg-gray-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/investments" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-akotex-blue hover:bg-gray-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Investments
            </Link>
            <Link 
              to="/performance" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-akotex-blue hover:bg-gray-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Performance
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3 gap-2">
                <Button asChild variant="outline" className="w-full border-akotex-blue text-akotex-blue hover:bg-akotex-blue hover:text-white">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                </Button>
                <Button asChild className="w-full bg-akotex-blue hover:bg-akotex-darkblue text-white">
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
