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

const Navigation = ({ onTranslate, isTranslating, isTranslated }: NavigationProps) => {
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
    <nav className="sticky top-0 z-50 w-full bg-black bg-opacity-95 text-white shadow-lg animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-extrabold tracking-widest hover:text-accent transition-colors duration-200">
          THE OTHER SIDE
        </a>
        <div className="flex gap-8 items-center">
          <NavLink href="/book">Book</NavLink>
          <NavLink href="/characters">Characters</NavLink>
          <NavLink href="/maps">Maps</NavLink>
          <NavLink href="/ContactSection">Contact</NavLink>
          <button
            onClick={onTranslate}
            className={`ml-4 px-4 py-2 rounded bg-white text-black font-semibold transition-transform duration-200 hover:scale-105 focus:outline-none ${isTranslating ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isTranslating}
          >
            {isTranslated ? 'EN' : 'AR'}
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const isActive = typeof window !== 'undefined' && window.location.pathname === href;
  return (
    <a
      href={href}
      className={`relative px-2 py-1 font-semibold transition-colors duration-200 hover:text-accent ${isActive ? 'text-accent' : ''}`}
    >
      {children}
      {isActive && (
        <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-accent rounded-full animate-fadeIn" />
      )}
    </a>
  );
};

export default Navigation;