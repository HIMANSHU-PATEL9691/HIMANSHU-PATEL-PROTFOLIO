import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "himanshupatel9691@gmail.com",
    action: "Send Mail",
    href: "mailto:himanshupatel9691@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9691365052",
    action: "Connect Now",
    href: "tel:+919691365052",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Let's Chat",
    action: "Connect Now",
    href: "https://wa.me/919691365052",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/5 to-transparent blur-3xl" />
      
      <div ref={ref} className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Let's Build Something
            <br />
            <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently seeking new opportunities to solve complex problems. 
            Whether you have a specific project or just want to connect, my inbox is always open.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label === "WhatsApp" ? "_blank" : undefined}
              rel={method.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="group p-6 rounded-2xl glass-card text-center block"
            >
              <div className="inline-flex p-4 rounded-2xl accent-gradient mb-4 group-hover:shadow-glow transition-shadow">
                <method.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-semibold mb-1">{method.label}</h3>
              <p className="text-sm text-muted-foreground mb-3">{method.value}</p>
              <span className="inline-flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                {method.action}
                <Send className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass-card">
            <div className="p-2 rounded-xl bg-primary/10">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Current Location</p>
              <p className="font-medium">Indore, Madhya Pradesh, India</p>
            </div>
            <span className="ml-4 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-medium">
              Available for Remote
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
