import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Sparkles, Building2, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import himanshuImage from "@/assets/himanshu.jpg";

const orbVariant = (reduced) => ({
  animate: reduced
    ? {}
    : {
        scale: [1, 1.18, 1],
        x: [0, 30, 0],
        y: [0, -20, 0],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      },
});

const floatVariant = (y = 10, d = 3, r = false) => ({
  animate: r
    ? {}
    : {
        y: [0, -y, 0],
        transition: { duration: d, repeat: Infinity, ease: "easeInOut" },
      },
});

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden grain-overlay"
      aria-label="Hero"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl"
        variants={orbVariant(shouldReduceMotion)}
        animate="animate"
        aria-hidden
      />
      <motion.div
        className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        variants={orbVariant(shouldReduceMotion)}
        animate="animate"
        style={{ zIndex: 0 }}
        aria-hidden
      />

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Text Content */}
          <div className="text-white order-2 lg:order-1">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6"
              role="status"
              aria-live="polite"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Open to Internships & Full-Time Roles</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4"
            >
              Himanshu
              <br />
              <span className="gradient-text">Patel</span>
            </motion.h1>

            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-xl md:text-2xl font-medium text-white/80 mb-6"
            >
              MERN Stack & React Native Developer
            </motion.h2>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-lg text-white/60 max-w-lg mb-8 leading-relaxed"
            >
              I specialize in building scalable, real-world applications and smart platforms.
              Focused on crafting seamless user experiences that solve complex problems.
            </motion.p>

            {/* Info Cards */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl glass-dark">
                <Building2 className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider">Current Role</p>
                  <p className="text-sm font-medium">Digital Fly High Solutions</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-xl glass-dark">
                <GraduationCap className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider">Education</p>
                  <p className="text-sm font-medium">8th Sem, SAGE University</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#contact" aria-label="Connect with Himanshu">Let's Connect</a>
              </Button>

              <Button
                variant="heroOutline"
                size="xl"
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <a href="#projects" aria-label="View Projects">View Projects</a>
              </Button>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative" aria-hidden={false}>
              {/* Accent Glow */}
              <div className="absolute inset-0 accent-gradient rounded-3xl blur-3xl opacity-30 scale-105" />

              {/* Image Container */}
              <motion.div
                className="relative w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-white/10"
                whileHover={!useReducedMotion() ? { scale: 1.02, rotate: 2 } : {}}
                transition={{ duration: 0.28 }}
              >
                <img
                  src={himanshuImage}
                  alt="Portrait of Himanshu Patel"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 glass-dark rounded-xl"
                variants={floatVariant(10, 3)}
                animate="animate"
                aria-hidden
              >
                <p className="text-xs text-accent uppercase tracking-wider">Expertise</p>
                <p className="text-sm font-semibold text-white">MERN Stack</p>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 glass-dark rounded-xl"
                variants={floatVariant(10, 3, false)}
                animate="animate"
                transition={{ delay: 1.5 }}
                aria-hidden
              >
                <p className="text-xs text-accent uppercase tracking-wider">Focus</p>
                <p className="text-sm font-semibold text-white">React Native</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden={false}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
          animate={!shouldReduceMotion ? { y: [0, 8, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
