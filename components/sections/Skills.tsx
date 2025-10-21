"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Backend",
    skills: [
      { name: "Django", level: 85 },
      { name: "Python", level: 88 },
      { name: "FastAPI", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 82 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    category: "Database & Caching",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Redis", level: 85 },
      { name: "MongoDB", level: 65 },
      { name: "Database Optimization", level: 82 },
    ],
  },
  {
    category: "Project Management",
    skills: [
      { name: "Agile/Scrum", level: 80 },
      { name: "Kanban", level: 75 },
      { name: "Jira", level: 85 },
      { name: "User Stories", level: 88 },
      { name: "Sprint Planning", level: 82 },
      { name: "Retrospectives", level: 78 },
    ],
  },
  {
    category: "Product & Business",
    skills: [
      { name: "Product Ownership", level: 75 },
      { name: "Requirements Analysis", level: 82 },
      { name: "Stakeholder Management", level: 70 },
      { name: "Business Analysis", level: 78 },
      { name: "User Experience", level: 72 },
      { name: "Technical Writing", level: 85 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Nginx", level: 78 },
      { name: "Gunicorn", level: 80 },
      { name: "Linux", level: 82 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 section-title">
              Skills & Expertise
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              A comprehensive toolkit for building modern, scalable web
              applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {skillCategories.map((category) => (
              <motion.div key={category.category} variants={cardVariants}>
                <Card className="p-4 sm:p-6 md:p-8 h-full bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary">
                    {category.category}
                  </h3>
                  <div className="space-y-4 sm:space-y-5">
                    {category.skills.map((skill, index) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm sm:text-base font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{
                              duration: 1,
                              delay: index * 0.1,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={cardVariants} className="mt-10 sm:mt-12 text-center">
            <Card className="p-4 sm:p-6 md:p-8 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300 max-w-4xl mx-auto">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Additional Technologies & Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {[
                  "Three.js",
                  "Elasticsearch",
                  "Kubernetes",
                  "Terraform",
                  "GitHub Actions",
                  "Stripe",
                  "SendGrid",
                  "Apollo GraphQL",
                  "WebSockets",
                  "JWT Authentication",
                  "OAuth",
                  "Vercel",
                  "Netlify",
                  "CloudFront",
                  "S3",
                  "React Native",
                  "Prisma",
                  "Supabase",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 border-primary/30 border rounded-md hover:bg-primary/10 hover:border-primary/50 transition-all inline-block"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

