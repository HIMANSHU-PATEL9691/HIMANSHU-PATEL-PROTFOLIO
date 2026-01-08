import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/HIMANSHU-PATEL9691", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/himanshu-patel-a43200329/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:himanshupatel9691@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-background border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-display text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            HIMANSHU<span className="gradient-text">.</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Himanshu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
