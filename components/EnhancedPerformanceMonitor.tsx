"use client";

import { useEffect } from 'react';

// Type definitions for performance monitoring
interface PerformanceEntryWithProcessing extends PerformanceEntry {
  processingStart?: number;
  processingEnd?: number;
  hadRecentInput?: boolean;
  value?: number;
}

interface WindowWithGtag extends Window {
  gtag?: (command: string, targetId: string, config: Record<string, unknown>) => void;
}

export function EnhancedPerformanceMonitor() {
  useEffect(() => {
    // Only run in production and if performance API is available
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return;
    }

    // Enhanced performance monitoring with more metrics
    const observers: PerformanceObserver[] = [];

    try {
      // Core Web Vitals with enhanced tracking
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint (LCP) - Enhanced
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          const lcpValue = lastEntry.startTime;
          
          console.log('LCP:', lcpValue);
          
          // Send to analytics with enhanced data
          const windowWithGtag = window as WindowWithGtag;
          if (windowWithGtag.gtag) {
            windowWithGtag.gtag('event', 'web_vitals', {
              name: 'LCP',
              value: Math.round(lcpValue),
              custom_parameter_1: 'enhanced_monitor',
            });
          }

          // Track LCP performance
          if (lcpValue > 2500) {
            console.warn('Poor LCP performance:', lcpValue);
          }
        });
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        observers.push(lcpObserver);

        // First Input Delay (FID) - Enhanced
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as PerformanceEntryWithProcessing;
            const fid = (fidEntry.processingStart || 0) - fidEntry.startTime;
            console.log('FID:', fid);
            
            const windowWithGtag = window as WindowWithGtag;
            if (windowWithGtag.gtag) {
              windowWithGtag.gtag('event', 'web_vitals', {
                name: 'FID',
                value: Math.round(fid),
                custom_parameter_1: 'enhanced_monitor',
              });
            }

            // Track FID performance
            if (fid > 100) {
              console.warn('Poor FID performance:', fid);
            }
          });
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });
        observers.push(fidObserver);

        // Cumulative Layout Shift (CLS) - Enhanced
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const clsEntry = entry as PerformanceEntryWithProcessing;
            if (!clsEntry.hadRecentInput) {
              clsValue += clsEntry.value || 0;
            }
          });
          console.log('CLS:', clsValue);
          
          const windowWithGtag = window as WindowWithGtag;
          if (windowWithGtag.gtag) {
            windowWithGtag.gtag('event', 'web_vitals', {
              name: 'CLS',
              value: Math.round(clsValue * 1000) / 1000,
              custom_parameter_1: 'enhanced_monitor',
            });
          }

          // Track CLS performance
          if (clsValue > 0.1) {
            console.warn('Poor CLS performance:', clsValue);
          }
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        observers.push(clsObserver);
      }

      // Enhanced main thread work monitoring
      const longTaskObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 50) { // Tasks longer than 50ms
            console.log('Long Task:', entry.duration);
            
            // Track long tasks
            const windowWithGtag = window as WindowWithGtag;
            if (windowWithGtag.gtag) {
              windowWithGtag.gtag('event', 'long_task', {
                duration: Math.round(entry.duration),
                custom_parameter_1: 'enhanced_monitor',
              });
            }
          }
        });
      });
      
      longTaskObserver.observe({ entryTypes: ['longtask'] });
      observers.push(longTaskObserver);

      // Resource timing monitoring
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 1000) { // Resources taking >1s
            console.log('Slow Resource:', entry.name, entry.duration);
          }
        });
      });
      
      resourceObserver.observe({ entryTypes: ['resource'] });
      observers.push(resourceObserver);

      // Navigation timing monitoring
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const navEntry = entry as PerformanceEntryWithProcessing;
          console.log('Navigation Timing:', {
            domContentLoaded: (navEntry.processingStart || 0) - (navEntry.processingEnd || 0),
            loadComplete: entry.duration,
            totalTime: entry.startTime,
          });
        });
      });
      
      navigationObserver.observe({ entryTypes: ['navigation'] });
      observers.push(navigationObserver);

    } catch (error) {
      console.warn('Enhanced performance monitoring not supported:', error);
    }

    // Enhanced cleanup function
    return () => {
      observers.forEach(observer => {
        try {
          observer.disconnect();
        } catch (error) {
          console.warn('Error disconnecting enhanced observer:', error);
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
}