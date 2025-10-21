"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedPathProps {
  className?: string;
}

export function AnimatedPath({ className = "" }: AnimatedPathProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
    },
  };

  return (
    <div ref={ref} className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
      >
        {/* Animated Path 1 */}
        <motion.path
          d="M50,500 Q250,400 500,500 T950,500"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary/30"
          variants={pathVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Animated Path 2 */}
        <motion.path
          d="M50,300 Q350,200 650,300 T950,300"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary/20"
          variants={pathVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 2.5, delay: 0.2, ease: "easeInOut" }}
        />
        
        {/* Animated Path 3 */}
        <motion.path
          d="M50,700 Q450,600 750,700 T950,700"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary/20"
          variants={pathVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 2.5, delay: 0.4, ease: "easeInOut" }}
        />

        {/* Animated Dots */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            cx={200 + i * 150}
            cy={500}
            r="4"
            className="fill-primary"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5 + i * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

