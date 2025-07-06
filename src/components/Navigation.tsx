import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: "HOME",
    href: "#home"
  }, {
    name: "ABOUT THE MISSION",
    href: "#mission"
  }, {
    name: "NEWS",
    href: "#news"
  }, {
    name: "CONTACTS",
    href: "#contacts"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary cosmic-glow">
            inferagenix
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="nav-item text-sm font-medium tracking-wider"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground hover:text-primary transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="nav-item text-sm font-medium tracking-wider" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;