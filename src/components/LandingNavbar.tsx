
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LandingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-task-primary flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v14M2 9h20M7 20l5-5 5 5"/>
            </svg>
          </div>
          <span className="text-xl font-display font-bold text-task-foreground">TaskFlow</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-task-foreground/80 hover:text-task-primary transition-colors">
            Features
          </Link>
          <Link to="/" className="text-sm font-medium text-task-foreground/80 hover:text-task-primary transition-colors">
            Pricing
          </Link>
          <Link to="/" className="text-sm font-medium text-task-foreground/80 hover:text-task-primary transition-colors">
            Resources
          </Link>
          <Link to="/" className="text-sm font-medium text-task-foreground/80 hover:text-task-primary transition-colors">
            About
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-sm font-medium">
            Log in
          </Button>
          <Button className="bg-task-primary hover:bg-task-primary/90 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-task-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12"/>
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t mt-1 py-4 px-4 animate-slide-down">
          <nav className="flex flex-col gap-4 mb-6">
            <Link to="/" className="text-sm font-medium text-task-foreground/80 hover:text-task-primary transition-colors py-2">
              Features
            </Link>
            <Link to="/" className="text-sm font-medium text-task-foreground/80 hover:text-task-primary transition-colors py-2">
              Pricing
            </Link>
            <Link to="/" className="text-sm font-medium text-task-foreground/80 hover:text-task-primary transition-colors py-2">
              Resources
            </Link>
            <Link to="/" className="text-sm font-medium text-task-foreground/80 hover:text-task-primary transition-colors py-2">
              About
            </Link>
          </nav>
          <div className="flex flex-col gap-3">
            <Button variant="outline" className="w-full justify-center">
              Log in
            </Button>
            <Button className="w-full justify-center bg-task-primary hover:bg-task-primary/90 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default LandingNavbar;
