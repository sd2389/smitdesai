"use client";

import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy load heavy components to reduce initial bundle size
const AnimatedPath = lazy(() => import('@/components/AnimatedPath').then(module => ({ default: module.AnimatedPath })));
const HeroOptimized = lazy(() => import('@/components/sections/HeroOptimized').then(module => ({ default: module.HeroOptimized })));
const AboutOptimized = lazy(() => import('@/components/sections/AboutOptimized').then(module => ({ default: module.AboutOptimized })));

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="animate-pulse bg-gray-200 rounded-lg w-full h-32"></div>
    </div>
  );
}

// Lazy animation wrapper with optimized performance
export function LazyAnimation({ 
  children, 
  fallback = <LoadingFallback />,
  className = ""
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}) {
  return (
    <Suspense fallback={fallback}>
      <div className={className}>
        {children}
      </div>
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
  [key: string]: unknown;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }} // Reduced from 0.3
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
      transition={{ 
        duration: 0.3, 
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

// Export lazy components
export { AnimatedPath, HeroOptimized, AboutOptimized };
