import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Rocket, Lightbulb } from "lucide-react";

const philosophyItems = [
  {
    icon: Code2,
    title: "Full-Stack Expertise",
    description: "Mastering MERN & React Native with real-world architecture",
  },
  {
    icon: Rocket,
    title: "Production Focused",
    description: "Building scalable, maintainable applications",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Applying DSA & logic to complex engineering challenges",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-background"
    >
      {/* Soft Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
            Discovery
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
            Transforming complex code into
            <br />
            <span className="gradient-text">seamless user experiences</span>
          </h2>

          <div className="mx-auto w-24 h-[2px] rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-14 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am{" "}
              <strong className="text-foreground">
                Himanshu Patel
              </strong>
              , a Software Engineering student (8th Sem) at SAGE University,
              Indore—driven by the challenge of building full-stack systems
              that scale.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently working as a Full-Stack Developer intern at{" "}
              <strong className="text-foreground">
                Digital Fly High Solutions
              </strong>
              , I specialize in the MERN ecosystem and React Native. I don’t
              just write code—I build tools that solve real user pain points.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in JavaScript and Data Structures, I
              focus on clean APIs, optimized frontend performance, and
              intuitive UX that bridges backend complexity with human
              interaction.
            </p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium">MERN Stack</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 border border-accent/20">
                <Smartphone className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">React Native</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              My Philosophy
            </h3>

            {philosophyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.12 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl glass-card group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
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
