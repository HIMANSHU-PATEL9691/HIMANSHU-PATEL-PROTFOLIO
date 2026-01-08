import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    period: "Sept 2024 — Present",
    title: "Full Stack Developer Intern",
    organization: "Digital Fly High Solutions",
    location: "Indore, India",
    description: "Leading the development of production-ready features using the MERN stack and React Native.",
    highlights: [
      "Architecting scalable REST APIs and modern frontends",
      "Deploying cross-platform mobile solutions",
      "Optimizing application performance by 30%",
    ],
  },
  {
    type: "education",
    period: "2022 — 2026",
    title: "Bachelor of Technology (B.Tech)",
    organization: "SAGE University, Indore",
    location: "Indore, India",
    description: "Specializing in Software Engineering with a focus on data structures and full-stack architecture.",
    highlights: [
      "8th Semester Student (Final Year)",
      "Core focus on JavaScript & Advanced DSA",
      "Developed 10+ academic & personal projects",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />
      
      <div ref={ref} className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            6+ Months Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Experience & <span className="gradient-text">Growth</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-background border-4 border-primary hidden md:flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.01, y: -4 }}
                  className="md:ml-20 p-6 md:p-8 rounded-2xl glass-card group"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${exp.type === 'work' ? 'accent-gradient' : 'bg-primary'}`}>
                        {exp.type === 'work' ? (
                          <Briefcase className="w-5 h-5 text-white" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {exp.type === 'work' ? 'Professional Experience' : 'Academic Background'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-medium text-primary mb-2">{exp.organization}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t border-border/50">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
