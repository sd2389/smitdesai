"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Smit Desai
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Full-Stack Developer crafting enterprise solutions
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-foreground">Connect</h4>
              <div className="flex gap-3 sm:gap-4">
                <motion.a
                  href="https://github.com/smitdesai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/smssmit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </motion.a>
                <motion.a
                  href="mailto:smssmit@gmail.com"
                  className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Smit Desai. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 text-center">
              Built with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" />{" "}
              using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

