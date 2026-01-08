import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Rocket, Lightbulb } from "lucide-react";

const philosophyItems = [
  {
    icon: Code2,
    title: "Full-Stack Expertise",
    description: "Mastering MERN & React Native",
  },
  {
    icon: Rocket,
    title: "Production Focused",
    description: "Building real-world scalable apps",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Applying DSA to complex logic",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
      </div>

      <div ref={ref} className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Discovery
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Transforming complex code into
            <br />
            <span className="gradient-text">seamless user experiences</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am <strong className="text-foreground">Himanshu Patel</strong>, a Software Engineering student (8th Sem) 
              at SAGE University, Indore, driven by the challenge of full-stack architecture.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, as a Full-Stack Developer intern at <strong className="text-foreground">Digital Fly High Solutions</strong>, 
              I specialize in the MERN ecosystem and React Native. I don't just write code; I build tools that solve user 
              pain points—from dynamic e-commerce logic like ExpireEx to performance-optimized mobile interfaces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a solid foundation in JavaScript fundamentals and Data Structures, I focus on creating clean, 
              scalable APIs and intuitive frontend designs that bridge the gap between backend complexity and human interaction.
            </p>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium">MERN Stack</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 border border-accent/20">
                <Smartphone className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">React Native</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Philosophy Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              My Philosophy
            </h3>
            {philosophyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="p-5 rounded-2xl glass-card cursor-default group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
