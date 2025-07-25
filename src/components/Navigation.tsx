import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* Main container with group class restored */}
      <div className="relative group">
        {/* Clickable area - separate from theme toggle */}
        <div 
  className={`absolute inset-0 z-10 ${isMobile ? 'block' : 'hidden group-hover:hidden'}`}
  style={{ pointerEvents: isOpen ? 'none' : 'auto' }}
  onClick={() => setIsOpen(!isOpen)}
/>

        
        {/* Central circle */}
        <div 
          className={`w-16 h-16 rounded-full bg-surface/90 backdrop-blur-md border border-border/30 shadow-lg flex items-center justify-center transition-all duration-300 ${
            isMobile ? (isOpen ? "w-72 h-72" : "") : "group-hover:w-72 group-hover:h-72"
          }`}
        >
          {/* Menu label */}
          <span 
            className={`text-text-primary font-medium absolute transition-opacity text-sm tracking-wider font-sans ${
              isMobile 
                ? (isOpen ? "opacity-0" : "opacity-100")
                : "opacity-100 group-hover:opacity-0"
            }`}
          >
            MENU
          </span>
          
          {/* Navigation items */}
          {navItems.map((item, index) => {
            const angle = (index * 90) - 45;
            const radius = 80;
            
            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`absolute transition-opacity duration-200 hover:scale-110 ${
                  isMobile
                    ? (isOpen ? "opacity-100" : "opacity-0")
                    : "opacity-0 group-hover:opacity-100"
                }`}
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                }}
              >
                <div className="w-12 h-12 rounded-full bg-surface border border-border/30 flex items-center justify-center shadow-sm hover:bg-surface-secondary transition-colors">
                  <span className="text-xs font-medium text-text-primary tracking-tight font-sans">
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
          
          {/* Theme toggle - now properly isolated */}
          <div 
            className={`absolute bottom-2 right-2 transition-opacity ${
              isMobile
                ? (isOpen ? "opacity-100" : "opacity-0")
                : "opacity-0 group-hover:opacity-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}