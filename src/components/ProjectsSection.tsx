import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Petro Shop",
    category: "E-Commerce",
    description:
      "A high-performance B2B marketplace for petrol pump essentials, focused on operational efficiency using a scalable MERN architecture.",
    image: "https://portfolio-web-mu-weld.vercel.app/projects/petroshop.png",
    link: "https://thepetroshop.com/",
    tags: ["React", "Tailwind", "Firebase", "Express", "MongoDB"],
  },
  {
    title: "Electronics Repair",
    category: "Service Platform",
    description:
      "A service booking and repair-tracking platform integrated with WhatsApp Business API for instant customer engagement.",
    image: "https://portfolio-web-mu-weld.vercel.app/projects/patel.png",
    link: "https://patel-electronics-shop.vercel.app/",
    tags: ["React", "Tailwind", "WhatsApp API"],
  },
  {
    title: "School Portfolio",
    category: "Institutional",
    description:
      "An interactive educational portal with modern accessibility standards and fluid UI animations.",
    image: "https://portfolio-web-mu-weld.vercel.app/projects/school.png",
    link: "https://school-website-iio4.vercel.app/",
    tags: ["React", "Framer Motion", "Tailwind"],
  },
  {
    title: "Standard Petro",
    category: "Corporate",
    description:
      "A corporate digital showcase highlighting industrial PEB structures and petrol pump canopy deployments.",
    image: "https://portfolio-web-mu-weld.vercel.app/projects/standard.png",
    link: "https://standardpetro.in/",
    tags: ["MERN Stack", "Tailwind", "Node.js"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden hero-gradient"
    >
      {/* Ambient Glow */}
      <motion.div
        className="absolute top-24 right-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div ref={ref} className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-5">
            Selected Works
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-5">
            Featured <span className="gradient-text">Deployments</span>
          </h2>

          <p className="text-lg text-white/60 mb-8">
            Architecting scalable digital solutions using MERN and modern frontend tooling
          </p>

          <Button
            variant="heroOutline"
            className="border-white/20 text-white hover:bg-white/10"
            asChild
          >
            <a
              href="https://github.com/HIMANSHU-PATEL9691"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-1" />
              View All Repos
            </a>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative glass-dark rounded-3xl overflow-hidden border border-white/10">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90" />

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* External Link */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="absolute top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tech Tags */}
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

                  <p className="text-sm text-white/60 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
