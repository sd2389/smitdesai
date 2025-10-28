"use client";

import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy load heavy animation components
const AnimatedPath = lazy(() => import('@/components/AnimatedPath'));

interface LazyAnimationProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function LazyAnimation({ children, fallback }: LazyAnimationProps) {
  return (
    <Suspense fallback={fallback || <div className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded h-4 w-full" />}>
      {children}
    </Suspense>
  );
}

// Optimized motion component with reduced motion support
export function OptimizedMotion({ 
  children, 
  className = "",
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Performance-optimized scroll-triggered animation
export function ScrollAnimation({ 
  children, 
  className = "",
  delay = 0 
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export { AnimatedPath };
