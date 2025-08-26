import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white pet-shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold text-pet-blue">🐾 Mundo Pet</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/banho-tosa" 
              className={`transition-smooth hover:text-pet-blue ${
                location.pathname === '/banho-tosa' ? 'text-pet-blue font-medium' : 'text-foreground'
              }`}
            >
              Banho & Tosa
            </Link>
            <Link 
              to="/veterinario" 
              className={`transition-smooth hover:text-pet-blue ${
                location.pathname === '/veterinario' ? 'text-pet-blue font-medium' : 'text-foreground'
              }`}
            >
              Veterinário
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/banho-tosa" 
                className={`block py-2 px-3 rounded-lg transition-smooth hover:bg-pet-blue-light ${
                  location.pathname === '/banho-tosa' ? 'bg-pet-blue-light text-pet-blue font-medium' : 'text-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                🛁 Banho & Tosa
              </Link>
              <Link 
                to="/veterinario" 
                className={`block py-2 px-3 rounded-lg transition-smooth hover:bg-pet-blue-light ${
                  location.pathname === '/veterinario' ? 'bg-pet-blue-light text-pet-blue font-medium' : 'text-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                🩺 Veterinário
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;