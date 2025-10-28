/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
"use client";

import { useEffect, useRef } from 'react';

export function EnhancedPerformanceMonitor() {
  const metricsRef = useRef<Record<string, unknown>>({});
  const longTasksRef = useRef<number[]>([]);

  useEffect(() => {
    // Only run in production and if performance API is available
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return;
    }

    const observers: PerformanceObserver[] = [];

    try {
      // Enhanced Core Web Vitals monitoring
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint (LCP) - Enhanced
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          const lcpTime = lastEntry.startTime;
          
          metricsRef.current.lcp = lcpTime;
          console.log('LCP:', lcpTime);
          
          // Send to analytics
          sendMetric('LCP', Math.round(lcpTime));
        });
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        observers.push(lcpObserver);

        // First Input Delay (FID) - Enhanced
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as PerformanceEntry & { processingStart: number };
            const fid = fidEntry.processingStart - fidEntry.startTime;
            metricsRef.current.fid = fid;
            console.log('FID:', fid);
            
            sendMetric('FID', Math.round(fid));
          });
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });
        observers.push(fidObserver);

        // Cumulative Layout Shift (CLS) - Enhanced
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const clsEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
            if (!clsEntry.hadRecentInput) {
              clsValue += clsEntry.value;
            }
          });
          metricsRef.current.cls = clsValue;
          console.log('CLS:', clsValue);
          
          sendMetric('CLS', Math.round(clsValue * 1000) / 1000);
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        observers.push(clsObserver);

        // Enhanced Long Task Detection
        const longTaskObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.duration > 50) { // Tasks longer than 50ms
              longTasksRef.current.push(entry.duration);
              console.warn('Long Task Detected:', entry.duration, 'ms');
              
              // Send long task metrics
              sendMetric('LONG_TASK', Math.round(entry.duration));
            }
          });
        });
        
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        observers.push(longTaskObserver);

        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            metricsRef.current.fcp = entry.startTime;
            console.log('FCP:', entry.startTime);
            sendMetric('FCP', Math.round(entry.startTime));
          });
        });
        
        fcpObserver.observe({ entryTypes: ['paint'] });
        observers.push(fcpObserver);

        // Time to Interactive (TTI) approximation
        const ttiObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-input') {
              const tti = entry.startTime;
              metricsRef.current.tti = tti;
              console.log('TTI:', tti);
              sendMetric('TTI', Math.round(tti));
            }
          });
        });
        
        ttiObserver.observe({ entryTypes: ['first-input'] });
        observers.push(ttiObserver);
      }

      // Monitor main thread work
      const monitorMainThreadWork = () => {
        const startTime = performance.now();
        
        // Use requestIdleCallback for non-critical monitoring
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(() => {
            const endTime = performance.now();
            const workTime = endTime - startTime;
            
            if (workTime > 16) { // More than one frame (60fps)
              console.log('Main thread work:', workTime, 'ms');
              sendMetric('MAIN_THREAD_WORK', Math.round(workTime));
            }
          });
        }
      };

      // Monitor every 5 seconds
      const monitoringInterval = setInterval(monitorMainThreadWork, 5000);

      // Send comprehensive metrics on page unload
      const sendComprehensiveMetrics = () => {
        const comprehensiveMetrics = {
          ...metricsRef.current,
          longTasks: longTasksRef.current,
          longTaskCount: longTasksRef.current.length,
          averageLongTask: longTasksRef.current.length > 0 
            ? longTasksRef.current.reduce((a, b) => a + b, 0) / longTasksRef.current.length 
            : 0,
          timestamp: Date.now(),
        };

        // Send to service worker for background processing
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: 'PERFORMANCE_METRICS',
            metrics: comprehensiveMetrics,
          });
        }

        // Send to analytics
        sendMetric('COMPREHENSIVE_METRICS', comprehensiveMetrics);
      };

      // Send metrics on page unload
      window.addEventListener('beforeunload', sendComprehensiveMetrics);
      window.addEventListener('pagehide', sendComprehensiveMetrics);

      // Send metric to analytics
      const sendMetric = (name: string, value: unknown) => {
        // Send to Google Analytics if available
        if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
          ((window as unknown as { gtag: Function }).gtag)('event', 'web_vitals', {
            name: name,
            value: value,
          });
        }

        // Send to Vercel Analytics if available
        if (typeof window !== 'undefined' && (window as unknown as { va?: Function }).va) {
          ((window as unknown as { va: Function }).va)('track', name, { value });
        }
      };

      // Cleanup function
      return () => {
        clearInterval(monitoringInterval);
        observers.forEach(observer => {
          try {
            observer.disconnect();
          } catch (error) {
            console.warn('Error disconnecting observer:', error);
          }
        });
      };
    } catch (error) {
      console.warn('Enhanced performance monitoring not supported:', error);
    }
  }, []);

  return null; // This component doesn't render anything
}
