import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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

/* Magnetic Hover Wrapper */
const Magnetic = ({ children }) => (
  <motion.div
    whileHover={{ x: 2, y: -2 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  >
    {children}
  </motion.div>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds, 120);

  /* Scroll-based animation */
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 100], [1, 0.96]);
  const padding = useTransform(scrollY, [0, 100], ["1.5rem", "0.9rem"]);
  const shadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 rgba(0,0,0,0)", "0 15px 40px rgba(0,0,0,0.2)"]
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 px-4"
    >
      {/* Gradient Border Glow */}
      <motion.div style={{ scale }} className="relative max-w-6xl mx-auto mt-4">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
          from-primary via-purple-500 to-pink-500 blur-lg opacity-60 animate-gradient" />

        <motion.nav
          style={{ padding, boxShadow: shadow }}
          className="relative rounded-2xl bg-background/80 backdrop-blur-xl 
          border border-border/50 px-6"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Magnetic>
              <motion.a
                href="#home"
                className="font-display text-xl font-bold tracking-wide"
                whileTap={{ scale: 0.95 }}
              >
                HIMANSHU
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  .
                </span>
              </motion.a>
            </Magnetic>

            {/* Desktop Nav */}
            <div className="relative hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    whileHover={{ y: -2 }}
                  >
                    {item.label}

                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] 
                        rounded-full bg-gradient-to-r from-primary to-purple-500"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Magnetic>
                <Button variant="hero" asChild>
                  <a
                    href="https://drive.google.com/file/d/1uS0r0479-QL106cncMKVGSn9u65KWSeM/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Resume
                  </a>
                </Button>
              </Magnetic>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 overflow-hidden"
              >
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        whileTap={{ scale: 0.96 }}
                        className={cn(
                          "flex items-center gap-2 text-sm font-medium px-2 py-1 rounded-md",
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        )}
                        {item.label}
                      </motion.a>
                    );
                  })}

                  <div className="flex items-center gap-3 pt-2">
                    <ThemeToggle />
                    <Button variant="hero" asChild className="flex-1">
                      <a
                        href="https://drive.google.com/file/d/1uS0r0479-QL106cncMKVGSn9u65KWSeM/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.div>
    </motion.header>
  );
};

export default Navigation;
