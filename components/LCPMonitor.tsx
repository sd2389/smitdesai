"use client";

import { useEffect } from 'react';

/**
 * LCP (Largest Contentful Paint) monitoring component
 * Tracks and reports LCP performance metrics
 */
export function LCPMonitor() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
        element?: Element;
        size?: number;
        url?: string;
      };
      
      // Log LCP metrics for debugging
      console.log('LCP Element:', lastEntry.element);
      console.log('LCP Time:', lastEntry.startTime);
      console.log('LCP Size:', lastEntry.size);
      console.log('LCP URL:', lastEntry.url);
      
      // Report to analytics if available
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as { gtag: (event: string, action: string, params: Record<string, unknown>) => void }).gtag('event', 'LCP', {
          event_category: 'Performance',
          event_label: 'Largest Contentful Paint',
          value: Math.round(lastEntry.startTime)
        });
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP monitoring not supported:', error);
    }

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}