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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-max px-6">
      <div className="flex flex-wrap items-center justify-center gap-2 px-6 py-3 bg-surface/80 backdrop-blur-md border border-border/40 rounded-full shadow-xl">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className="px-6 py-3 text-base font-semibold text-text-secondary hover:text-text-primary transition-colors duration-200 rounded-full hover:bg-surface-secondary"
          >
            {item.label}
          </button>
        ))}
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
