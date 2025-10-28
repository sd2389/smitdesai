// Enhanced Service Worker for Performance Optimization
const CACHE_NAME = 'smitdesai-v1.2';
const STATIC_CACHE = 'static-v1.2';
const DYNAMIC_CACHE = 'dynamic-v1.2';

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/_next/static/css/app/layout.css',
  '/_next/static/chunks/main.js',
  '/_next/static/chunks/react.js',
  '/_next/static/chunks/nextjs.js',
];

// Resources to cache on demand
const CACHE_PATTERNS = [
  /^\/_next\/static\//,
  /^\/static\//,
  /\.(?:js|css|png|jpg|jpeg|gif|svg|woff2?)$/,
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(CRITICAL_RESOURCES);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE;
          })
          .map((cacheName) => {
            return caches.delete(cacheName);
          })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Strategy: Cache First for static assets
  if (CACHE_PATTERNS.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) {
          return response;
        }
        
        return fetch(request).then((fetchResponse) => {
          // Don't cache if not a valid response
          if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
            return fetchResponse;
          }

          // Clone the response
          const responseToCache = fetchResponse.clone();

          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });

          return fetchResponse;
        });
      })
    );
  }

  // Strategy: Network First for HTML pages
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response.status === 200) {
            const responseToCache = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(request);
        })
    );
  }
});

// Background sync for performance metrics
self.addEventListener('sync', (event) => {
  if (event.tag === 'performance-metrics') {
    event.waitUntil(sendPerformanceMetrics());
  }
});

// Send performance metrics to analytics
async function sendPerformanceMetrics() {
  try {
    const metrics = await getPerformanceMetrics();
    if (metrics) {
      // Send to your analytics endpoint
      await fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metrics),
      });
    }
  } catch (error) {
    console.log('Failed to send performance metrics:', error);
  }
}

// Collect performance metrics
async function getPerformanceMetrics() {
  if (!('performance' in self)) {
    return null;
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');
  
  return {
    timestamp: Date.now(),
    navigation: {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstByte: navigation.responseStart - navigation.requestStart,
    },
    paint: {
      firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
      firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
    },
    memory: (performance as any).memory ? {
      usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
      totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
    } : null,
  };
}

// Message handling for performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    // Store metrics for background sync
    event.waitUntil(
      caches.open(DYNAMIC_CACHE).then((cache) => {
        return cache.put('/performance-metrics', new Response(JSON.stringify(event.data.metrics)));
      })
    );
  }
});

