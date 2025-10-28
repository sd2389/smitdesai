/* eslint-disable @typescript-eslint/no-unsafe-function-type */
"use client";

import { useEffect } from 'react';

export function DeferredAnalytics() {
  useEffect(() => {
    // Only load analytics after page is fully loaded
    const loadAnalytics = () => {
      // Load Vercel Analytics asynchronously
      import('@vercel/analytics/react').then(() => {
        // Create analytics component dynamically
        const analyticsElement = document.createElement('div');
        analyticsElement.innerHTML = '<div id="vercel-analytics"></div>';
        document.body.appendChild(analyticsElement);
        
        // Initialize analytics
        if (typeof window !== 'undefined') {
          (window as unknown as { va?: Function }).va = (window as unknown as { va?: Function }).va || function(...args: unknown[]) {
            ((window as unknown as { vaq?: unknown[] }).vaq = (window as unknown as { vaq?: unknown[] }).vaq || []).push(args);
          };
        }
      }).catch(console.error);
    };

    // Load analytics after page load
    if (document.readyState === 'complete') {
      setTimeout(loadAnalytics, 2000); // 2 second delay
    } else {
      window.addEventListener('load', () => {
        setTimeout(loadAnalytics, 2000); // 2 second delay
      });
    }
  }, []);

  return null;
}
