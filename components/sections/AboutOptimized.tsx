"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScrollAnimation } from "@/components/LazyComponents";

export function AboutOptimized() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
            >
              About Me
            </motion.h2>

            <motion.div
              className="prose prose-lg max-w-none text-slate-600 dark:text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.3, delay: 0.1 }}
            >
              <p className="text-xl leading-relaxed mb-6">
                I&apos;m a passionate full-stack developer with expertise in building 
                enterprise-grade applications using Django, React, and Next.js. 
                I specialize in turning complex business problems into elegant, 
                scalable solutions.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                With experience in ERP systems, e-commerce platforms, and civic 
                engagement tools, I bring a unique perspective to every project. 
                I&apos;m passionate about clean code, performance optimization, and 
                creating exceptional user experiences.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <motion.div
                  className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Technical Expertise
                  </h3>
                  <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• Django & Python Backend Development</li>
                    <li>• React & Next.js Frontend Development</li>
                    <li>• Database Design & Optimization</li>
                    <li>• API Development & Integration</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Business Skills
                  </h3>
                  <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                    <li>• Project Management & Leadership</li>
                    <li>• Stakeholder Communication</li>
                    <li>• Business Analysis & Requirements</li>
                    <li>• Agile/Scrum Methodologies</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
