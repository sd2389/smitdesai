"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Layers, Zap, Users, Target, Brain, GitBranch } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Wizardry",
    description: "I speak fluent Django, React, and TypeScript. I can make your backend sing and your frontend dance - sometimes at the same time!",
  },
  {
    icon: Layers,
    title: "Enterprise Architecture",
    description: "Building systems that scale like your ambitions but don't break like your coffee machine. KISS principles, Fortune 100 standards.",
  },
  {
    icon: Zap,
    title: "Performance Obsession",
    description: "I optimize code like I optimize my coffee brewing process - every millisecond matters. Sub-second response times or it didn't happen.",
  },
  {
    icon: Users,
    title: "Industry Maverick",
    description: "From jewelry ERP systems to civic engagement platforms, I've built solutions that actually solve real problems (shocking, I know).",
  },
  {
    icon: Target,
    title: "Project Management Pro",
            description: "I don't just build software - I orchestrate entire projects from chaos to completion. Agile, Scrum, Kanban? I speak them all fluently.",
  },
  {
    icon: Brain,
    title: "Problem-Solving Ninja",
    description: "Give me a complex problem and I'll break it down into bite-sized solutions. I turn 'impossible' into 'implemented' before you finish your coffee.",
  },
  {
    icon: GitBranch,
    title: "Product Owner Mindset",
    description: "I think like a product owner - user stories, acceptance criteria, and business value are my second language. I bridge the gap between tech and business.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 section-title">
              About Me
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              A passionate full-stack developer who believes that good code is like good coffee - 
              it should be strong, smooth, and keep you awake at night (but for the right reasons). 
              I build enterprise-level applications that are scalable, performant, and actually 
              <span className="text-primary font-semibold"> make sense</span>.
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <Card className="p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90 mb-4 sm:mb-6">
                I&apos;m the developer who actually <span className="text-primary font-semibold">reads the documentation </span> 
                and writes code that your future self will thank you for. I specialize in turning 
                &ldquo;impossible&rdquo; requirements into elegant, high-performance solutions that don&apos;t 
                break when you look at them wrong.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90 mb-4 sm:mb-6">
                My superpower? Making complex enterprise systems feel simple. From jewelry ERP 
                systems that handle thousands of products to civic engagement platforms that 
                actually get people involved, I build solutions that{" "}
                <span className="text-primary font-semibold">work in the real world</span> - 
                not just in demos.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90">
                But I don&apos;t just code - I orchestrate entire projects from chaos to completion. 
                I think like a product owner, manage like a project manager, and solve problems 
                like a detective with a keyboard. I bridge the gap between{" "}
                <span className="text-primary font-semibold">tech and business</span>, 
                turning stakeholder dreams into deployable reality.
              </p>
            </Card>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {highlights.map((highlight) => (
              <motion.div key={highlight.title} variants={itemVariants}>
                <Card className="p-4 sm:p-6 h-full bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <highlight.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="mt-12 sm:mt-16 text-center">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-0">
              {[
                "Enterprise Architecture",
                "API Development",
                "Database Design",
                "Performance Optimization",
                "Project Management",
                "Product Ownership",
                "Problem Solving",
                "Agile/Scrum",
                "Stakeholder Management",
                "Technical Leadership",
                "UI/UX Implementation",
                "DevOps & Deployment",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 border-primary/30 border rounded-md hover:bg-primary/10 hover:border-primary/50 transition-all inline-block tech-badge"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

