"use client";

import { useEffect } from 'react';

export function ServiceWorkerRegistration() {
  useEffect(() => {
    // Only register service worker in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    if ('serviceWorker' in navigator) {
      // Register enhanced service worker
      navigator.serviceWorker.register('/sw-enhanced.js')
        .then((registration) => {
          console.log('Enhanced Service Worker registered successfully:', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New service worker is available
                  console.log('New service worker available');
                  // You could show a notification to the user here
                }
              });
            }
          });
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });

      // Listen for service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'CACHE_UPDATED') {
          console.log('Cache updated:', event.data.cacheName);
        }
      });
    }
  }, []);

  return null;
}