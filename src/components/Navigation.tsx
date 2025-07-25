import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative group">
        {/* Central circle with refined typography */}
        <div className="w-16 h-16 rounded-full bg-surface/90 backdrop-blur-md border border-border/30 shadow-lg flex items-center justify-center transition-all duration-300 group-hover:w-72 group-hover:h-72">
          <span className="text-text-primary font-medium absolute opacity-100 group-hover:opacity-0 transition-opacity text-sm tracking-wider font-sans">
            MENU
          </span>
          
          {/* Circular navigation items with improved fonts */}
          {navItems.map((item, index) => {
            const angle = (index * 90) - 45;
            const radius = 80;
            
            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110"
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
          
          {/* Theme toggle */}
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}