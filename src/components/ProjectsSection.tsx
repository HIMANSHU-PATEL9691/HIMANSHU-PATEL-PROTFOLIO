import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Petro Shop",
    category: "E-Commerce",
    description: "A high-performance online marketplace for petrol pump essentials. Focused on optimizing B2B operational efficiency through a seamless MERN architecture.",
    image: "https://portfolio-web-mu-weld.vercel.app/projects/petroshop.png",
    link: "https://thepetroshop.com/",
    tags: ["React", "Tailwind", "Firebase", "Express", "MongoDB"],
  },
  {
    title: "Electronics Repair",
    category: "Service Platform",
    description: "A specialized service booking engine. Integrates WhatsApp Business API to facilitate instant repair tracking and customer engagement.",
    image: "https://portfolio-web-mu-weld.vercel.app/projects/patel.png",
    link: "https://patel-electronics-shop.vercel.app/",
    tags: ["React", "Tailwind", "WhatsApp API"],
  },
  {
    title: "School Portfolio",
    category: "Institutional",
    description: "An interactive educational portal featuring a fluid user interface and modern accessibility standards built for academic institutions.",
    image: "https://portfolio-web-mu-weld.vercel.app/projects/school.png",
    link: "https://school-website-iio4.vercel.app/",
    tags: ["React", "Framer Motion", "Tailwind"],
  },
  {
    title: "Standard Petro",
    category: "Corporate",
    description: "A corporate digital showcase for industrial engineering. Highlights large-scale PEB structures and petrol pump canopy deployments.",
    image: "https://portfolio-web-mu-weld.vercel.app/projects/standard.png",
    link: "https://standardpetro.in/",
    tags: ["MERN Stack", "Tailwind", "Node.js"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div ref={ref} className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-4">
            Selected Works
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Featured <span className="gradient-text">Deployments</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Architecting scalable digital solutions using the MERN ecosystem and React Native
          </p>
          <Button variant="heroOutline" className="border-white/20 text-white hover:bg-white/10" asChild>
            <a href="https://github.com/HIMANSHU-PATEL9691" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              View All Repos
            </a>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-dark rounded-3xl overflow-hidden border border-white/10">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Launch Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-white/5 text-white/60 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
