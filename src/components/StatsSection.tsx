import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FolderGit, Activity, Zap, Github } from "lucide-react";

const USERNAME = "HIMANSHU-PATEL9691";

type GitHubUser = {
  public_repos: number;
  created_at: string;
};

type GitHubRepo = {
  language: string | null;
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [stats, setStats] = useState({
    repos: 0,
    activeDays: 0,
    ecosystem: "—",
  });

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        /* Fetch user profile */
        const userRes = await fetch(
          `https://api.github.com/users/${USERNAME}`
        );
        const user: GitHubUser = await userRes.json();

        /* Fetch repositories */
        const repoRes = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?per_page=100`
        );
        const repos: GitHubRepo[] = await repoRes.json();

        /* Calculate active days (TypeScript-safe) */
        const createdAt = new Date(user.created_at).getTime();
        const now = Date.now();
        const activeDays = Math.ceil(
          (now - createdAt) / (1000 * 60 * 60 * 24)
        );

        /* Detect ecosystem */
        const hasJS = repos.some(
          (repo) =>
            repo.language === "JavaScript" ||
            repo.language === "TypeScript"
        );

        setStats({
          repos: user.public_repos,
          activeDays,
          ecosystem: hasJS ? "MERN" : "JavaScript",
        });

        setLoading(false);
      } catch (error) {
        console.error("GitHub API error:", error);
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  const cards = [
    {
      icon: FolderGit,
      value: loading ? "…" : stats.repos,
      label: "Public Repositories",
    },
    {
      icon: Activity,
      value: loading ? "…" : stats.activeDays,
      label: "Days Since First Commit",
    },
    {
      icon: Zap,
      value: loading ? "…" : stats.ecosystem,
      label: "Core Ecosystem",
    },
    {
      icon: Github,
      value: "Live",
      label: "GitHub Synced",
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div ref={ref} className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Live GitHub Data
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Growth <span className="gradient-text">Analytics</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="p-6 rounded-2xl glass-card text-center group"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4">
                <card.icon className="w-6 h-6 text-primary" />
              </div>

              <div className="text-3xl md:text-4xl font-display font-bold mb-1 gradient-text">
                {card.value}
              </div>

              <div className="text-sm text-muted-foreground">
                {card.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-3xl glass-card"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-display font-semibold mb-1">
                GitHub Contribution Activity
              </h3>
              <p className="text-sm text-muted-foreground">
                Live data from github.com/{USERNAME}
              </p>
            </div>

            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              API Connected
            </span>
          </div>

          <div className="overflow-x-auto pb-4">
            <img
              src={`https://ghchart.rshah.org/3b82f6/${USERNAME}`}
              alt="GitHub contribution graph"
              className="w-full min-w-[600px] rounded-xl"
              loading="lazy"
            />
          </div>

          <div className="text-center pt-4 border-t border-border/50">
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              Open GitHub Profile →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
