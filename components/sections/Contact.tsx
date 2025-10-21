"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "smssmit@gmail.com",
    href: "mailto:smssmit@gmail.com",
    color: "text-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/smssmit",
    href: "https://www.linkedin.com/in/smssmit",
    color: "text-[#0077B5]",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/smitdesai",
    href: "https://github.com/smitdesai",
    color: "text-foreground",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available for Remote Work",
    href: "#",
    color: "text-primary",
  },
];

export function Contact() {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const drawVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
    },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary"
            variants={drawVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <motion.path
            d="M0,200 Q250,150 500,200 T1000,200 T1500,200 T2000,200"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary"
            variants={drawVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 section-title">
              Let&apos;s Work Together
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Got a project that&apos;s been giving you nightmares? Or maybe you just want to chat about 
              the latest JavaScript framework that&apos;s going to change everything (again)? 
              I&apos;m here for both. Let&apos;s build something that doesn&apos;t suck.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {contactMethods.map((method) => (
              <motion.div key={method.label} variants={itemVariants}>
                <Card className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                      <method.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${method.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                        {method.label}
                      </p>
                      <p className="text-sm sm:text-base font-medium text-foreground group-hover:text-primary transition-colors truncate">
                        {method.value}
                      </p>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div variants={itemVariants}>
            <Card className="p-6 sm:p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Ready to Make Something Awesome?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
                Whether you need a full-stack application that doesn&apos;t break, 
                performance optimization that actually works, or just someone to 
                complain about JavaScript with - I&apos;m your guy. Let&apos;s turn 
                your wildest tech dreams into reality (with proper error handling).
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <a href="mailto:smssmit@gmail.com">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Hit Me Up 📧
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-full border-2 border-primary hover:bg-primary/10 group"
                >
                  <a
                    href="https://www.linkedin.com/in/smssmit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Let&apos;s Connect 💼
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            variants={itemVariants}
            className="text-center text-xs sm:text-sm text-muted-foreground mt-8 sm:mt-12 px-4 sm:px-0"
          >
            Available for freelance gigs, full-time adventures, and collaborations 
            that don&apos;t involve fixing legacy code from 2010
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

