"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Users, Zap, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "DevERP",
    subtitle: "Enterprise Resource Planning for Jewelry Industry",
    description:
      "A comprehensive ERP system featuring customer management, real-time inventory synchronization, 4-tier pricing hierarchy, and order processing. Handles 2,200+ products with sub-second response times using Redis caching and optimized database queries.",
    icon: ShoppingCart,
    metrics: [
      "2,200+ Products",
      "<100ms Response Time",
      "4-Tier Pricing System",
      "Real-time Sync",
    ],
    technologies: [
      "Django",
      "Python",
      "MySQL",
      "Redis",
      "JavaScript",
      "Nginx",
      "Gunicorn",
    ],
    highlights: [
      "Enterprise-grade security with rate limiting",
      "Advanced approval workflows",
      "Beautiful HTML email templates",
      "Real-time external API integration",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "DevSolutions",
    subtitle: "AI-Powered Marketing Platform",
    description:
      "A modern marketing website for showcasing AI-powered solutions for jewelry businesses and SMBs. Features MDX blog, contact forms with validation, SEO optimization, and responsive design achieving 95+ Lighthouse scores.",
    icon: Zap,
    metrics: [
      "95+ Lighthouse Score",
      "<1s Load Time",
      "MDX Blog",
      "SEO Optimized",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MDX",
      "Vercel",
    ],
    highlights: [
      "Server-side rendering for optimal SEO",
      "Advanced form validation with Zod",
      "Email integration with Nodemailer",
      "Complete accessibility (WCAG compliant)",
    ],
    link: "https://dev-solutions-inky.vercel.app/",
    github: "https://github.com/sd2389/DevSolution",
  },
  {
    title: "TownHall",
    subtitle: "Civic Engagement Platform",
    description:
      "A full-stack platform connecting citizens, government officials, and business owners. Features include AI-generated proposal summaries, structured voting systems, event management, and role-based access control for different stakeholder types.",
    icon: Users,
    metrics: [
      "3 User Roles",
      "AI Summaries",
      "Real-time Voting",
      "Event Management",
    ],
    technologies: [
      "Django",
      "Next.js 15",
      "TypeScript",
      "MySQL",
      "Tailwind CSS",
      "Framer Motion",
    ],
    highlights: [
      "Role-based authentication system",
      "AI-powered content summarization",
      "Admin moderation tools",
      "Interactive data visualizations",
    ],
    link: "#",
    github: "https://github.com/sd2389/TownHall",
  },
  {
    title: "Preeti Varma Portfolio",
    subtitle: "Award-Winning Professional Portfolio",
    description:
      "A high-performance Next.js portfolio showcasing 15+ years of expertise in global consumer research and strategy. Features 14 detailed case studies, advanced filtering, smooth animations, and comprehensive SEO with JSON-LD structured data.",
    icon: TrendingUp,
    metrics: [
      "14 Case Studies",
      "50+ Markets",
      "Perfect SEO",
      "275KB Bundle",
    ],
    technologies: [
      "Next.js 15.5",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
    highlights: [
      "Optimized images (AVIF/WebP)",
      "JSON-LD structured data",
      "Dynamic sitemap generation",
      "Glassmorphism design effects",
    ],
    link: "#",
    github: "https://github.com/sd2389/preetivarma",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of enterprise-grade applications built with modern
              technologies and best practices
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div key={project.title} variants={cardVariants}>
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group">
                  {/* Project Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <project.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="hover:text-primary"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:text-primary"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary/80 font-medium mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="px-3 py-2 bg-primary/5 border border-primary/20 rounded-lg text-sm font-medium text-center"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                      KEY FEATURES
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                      TECH STACK
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

