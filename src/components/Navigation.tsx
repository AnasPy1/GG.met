import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import TranslationButton from "./TranslationButton";

interface NavigationProps {
  onTranslate?: () => void;
  isTranslating?: boolean;
  isTranslated?: boolean;
}

const Navigation = ({ onTranslate, isTranslating = false, isTranslated = false }: NavigationProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/book", label: "Book" },
    { path: "/characters", label: "Characters" },
    { path: "/maps", label: "Maps" },
    { path: "/ContactSection", label: "Contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass-bg backdrop-blur-glass border-b border-glass-border">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-foreground transition-white text-white" onClick={closeMenu}>
            TOS
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button 
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className="text-foreground text-white"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            
            {onTranslate && (
              <div className="relative">
                <TranslationButton 
                  onTranslate={onTranslate} 
                  isTranslating={isTranslating}
                  isTranslated={isTranslated}
                />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-glass-bg backdrop-blur-glass border-glass-border">
                <SheetHeader>
                  <SheetTitle className="text-left text-white">Navigation</SheetTitle>
                </SheetHeader>
                
                <div className="mt-8 flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <Link key={item.path} to={item.path} onClick={closeMenu}>
                      <Button 
                        variant={location.pathname === item.path ? "default" : "ghost"}
                        className="w-full justify-start text-white text-lg py-3 h-auto"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                  
                  {onTranslate && (
                    <div className="pt-4 border-t border-glass-border">
                      <TranslationButton 
                        onTranslate={onTranslate} 
                        isTranslating={isTranslating}
                        isTranslated={isTranslated}
                      />
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;