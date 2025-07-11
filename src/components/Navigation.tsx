import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useState } from "react";

import TranslationButton from "./TranslationButton";

interface NavigationProps {
  onTranslate?: () => void;
  isTranslating?: boolean;
  isTranslated?: boolean;
}

const Navigation = ({ onTranslate, isTranslating = false, isTranslated = false }: NavigationProps) => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass-bg backdrop-blur-glass border-b border-glass-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-foreground  transition-white text-white" >
          TOS
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/">
              <Button 
                variant={location.pathname === "/" ? "default" : "ghost"}
                className="text-foreground text-white "
              >
                Home
              </Button>
            </Link>
            <Link to="/book">
              <Button 
                variant={location.pathname === "/book" ? "default" : "ghost"}
                className="text-foreground text-white"
              >
                Book
              </Button>
            </Link>
            <Link to="/characters">
              <Button 
                variant={location.pathname === "/characters" ? "default" : "ghost"}
                className="text-foreground text-white"
              >
                Characters
              </Button>
            </Link>
            <Link to="/maps">
              <Button 
                variant={location.pathname === "/maps" ? "default" : "ghost"}
                className="text-foreground text-white"
              >
                Maps
              </Button>
            </Link>
            
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;