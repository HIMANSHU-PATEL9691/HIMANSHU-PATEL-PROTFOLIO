import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitCommit, FolderGit, Activity, Zap } from "lucide-react";

const stats = [
  { icon: GitCommit, value: "16+", label: "Lifetime Commits" },
  { icon: FolderGit, value: "15+", label: "Repositories" },
  { icon: Activity, value: "365", label: "Days Tracked" },
  { icon: Zap, value: "MERN", label: "Core Ecosystem" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div ref={ref} className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Live Technical Evolution
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Growth <span className="gradient-text">Analytics</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="p-6 rounded-2xl glass-card text-center group cursor-default"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold mb-1 gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Activity Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-3xl glass-card"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-display font-semibold mb-1">Code Activity Heatmap</h3>
              <p className="text-sm text-muted-foreground">
                Real-time log of development consistency from @himanshu-patel9691
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                API Connection: Secure
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Deployment: Stable
              </span>
            </div>
          </div>
          
          <div className="overflow-x-auto pb-4">
            <img
              src="https://ghchart.rshah.org/3b82f6/HIMANSHU-PATEL9691"
              alt="GitHub Contributions"
              className="w-full min-w-[600px] rounded-xl"
            />
          </div>

          <div className="text-center pt-4 border-t border-border/50">
            <a
              href="https://github.com/HIMANSHU-PATEL9691"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              Launch Full Repository View
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
