"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { ArrowDown, Code2, Database, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Optimized variants for better performance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion 
        ? { duration: 0.1 }
        : {
            staggerChildren: 0.1, // Reduced from 0.2
            delayChildren: 0.1,    // Reduced from 0.3
          },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion ? { duration: 0.1 } : { duration: 0.3 },
    },
  };

  const iconVariants: Variants = {
    hidden: { 
      scale: shouldReduceMotion ? 1 : 0, 
      rotate: shouldReduceMotion ? 0 : -180 
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: shouldReduceMotion ? { duration: 0.1 } : { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-blue-50/20 dark:to-blue-950/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Hey there! I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                Smit Desai
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Full-Stack Developer & Code Whisperer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            I turn coffee into code and complex business problems into elegant solutions. 
            When I'm not debugging at 2 AM or optimizing database queries, I'm building 
            enterprise-grade applications that actually work.
          </motion.p>

          {/* Tech Stack Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {["Django", "React", "Next.js", "TypeScript", "Python", "MySQL", "Redis", "AWS"].map((tech, index) => (
              <motion.span
                key={tech}
                variants={iconVariants}
                className="px-4 py-2 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium"
              asChild
            >
              <a href="#projects">
                See My Magic ✨
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-3 text-lg font-medium"
              asChild
            >
              <a href="#contact">
                Let's Chat 💬
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
