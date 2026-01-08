import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds, 120);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <nav className="max-w-6xl mx-auto glass-card rounded-2xl px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="font-display text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            HIMANSHU<span className="gradient-text">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {item.label}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full"
                    initial={false}
                    animate={{ 
                      width: isActive ? "100%" : "0%",
                      opacity: isActive ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/50 transition-all duration-300 rounded-full",
                    !isActive && "group-hover:w-full"
                  )} />
                </motion.a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="hero" size="default" asChild>
              <a href="https://docs.google.com/document/d/1PkiuD3HtuQh9x7N1knalj0Q_SF-0kKFhTxg66TSjMts/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors flex items-center gap-2",
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="mobile-active-indicator"
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <Button variant="hero" size="default" asChild className="flex-1">
                  <a href="https://docs.google.com/document/d/1PkiuD3HtuQh9x7N1knalj0Q_SF-0kKFhTxg66TSjMts/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navigation;
