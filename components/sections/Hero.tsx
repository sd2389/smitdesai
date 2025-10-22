"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown, Code2, Database, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
    },
  };

  return (
            <section
              id="home"
              className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20 sm:pt-0"
            >
      {/* Simple Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(70, 130, 180, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(70, 130, 180, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Floating Icons - Responsive sizing */}
          <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-4 sm:mb-6 md:mb-8">
            <motion.div variants={iconVariants} className="p-1.5 sm:p-2 md:p-3 bg-primary/10 rounded-full">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-primary" />
            </motion.div>
            <motion.div variants={iconVariants} className="p-1.5 sm:p-2 md:p-3 bg-primary/10 rounded-full">
              <Database className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-primary" />
            </motion.div>
            <motion.div variants={iconVariants} className="p-1.5 sm:p-2 md:p-3 bg-primary/10 rounded-full">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-primary" />
            </motion.div>
          </div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight hero-title px-4 sm:px-0"
          >
            Hey there! I&apos;m Smit Desai
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-muted-foreground font-modern">
              Full-Stack Developer & Code Whisperer
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0"
          >
            I turn coffee into code and complex business problems into{" "}
            <span className="text-primary font-semibold">elegant solutions</span>. 
            When I&apos;m not debugging at 2 AM or optimizing database queries, 
            I&apos;m building enterprise-grade applications that actually{" "}
            <span className="text-primary font-semibold">work</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <a href="#projects">See My Magic ✨</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-full border-2 border-primary hover:bg-primary/10"
            >
              <a href="#contact">Let&apos;s Chat 💬</a>
            </Button>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-muted-foreground px-4 sm:px-0"
          >
            {["Django", "React", "Next.js", "TypeScript", "Python", "MySQL", "Redis", "AWS"].map(
              (tech) => (
                <motion.span
                  key={tech}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors tech-badge text-xs sm:text-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-xs sm:text-sm">Scroll to explore</span>
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

