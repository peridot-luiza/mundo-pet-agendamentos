import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white pet-shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold text-pet-blue">🐾 Mundo Pet</h1>
          </Link>
          
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

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              ☰
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;