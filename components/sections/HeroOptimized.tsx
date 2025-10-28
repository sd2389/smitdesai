"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { ArrowDown, Code2, Database, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroOptimized() {
  const shouldReduceMotion = useReducedMotion();

  // Ultra-optimized variants for minimal main-thread work
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion 
        ? { duration: 0.05 } // Ultra-fast for reduced motion
        : {
            staggerChildren: 0.05, // Reduced from 0.1
            delayChildren: 0.05,    // Reduced from 0.1
          },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 }, // Reduced from 20
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion ? { duration: 0.05 } : { duration: 0.2 }, // Reduced from 0.3
    },
  };

  const iconVariants: Variants = {
    hidden: { 
      scale: shouldReduceMotion ? 1 : 0.8, // Reduced scale change
      rotate: shouldReduceMotion ? 0 : -90  // Reduced rotation
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: shouldReduceMotion ? { duration: 0.05 } : { duration: 0.3 }, // Reduced from 0.5
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading with optimized animation */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            <span className="block">Smit Desai</span>
            <span className="block text-blue-600 dark:text-blue-400">
              Full-Stack Developer
            </span>
          </motion.h1>

          {/* Subtitle with minimal animation */}
          <motion.p
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Enterprise Solutions Expert | Django & React Specialist
          </motion.p>

          {/* Skills icons with optimized animations */}
          <motion.div
            className="flex justify-center items-center gap-8 mb-12"
            variants={containerVariants}
          >
            {[
              { Icon: Code2, label: "Frontend" },
              { Icon: Database, label: "Backend" },
              { Icon: Rocket, label: "DevOps" },
            ].map(({ Icon, label }) => (
              <motion.div
                key={label}
                className="flex flex-col items-center gap-2"
                variants={iconVariants}
                whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons with minimal animation */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 px-8 py-3"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          {/* Scroll indicator with minimal animation */}
          <motion.div
            className="mt-16 flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-6 h-6 text-slate-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}