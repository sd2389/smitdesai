// Enhanced Service Worker for Maximum Performance
const CACHE_VERSION = 'smitdesai-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';
const API_CACHE = 'api-v2';

// Critical assets to cache immediately
const CRITICAL_ASSETS = [
  '/',
  '/_next/static/css/app/layout.css',
  '/_next/static/chunks/main.js',
  '/_next/static/chunks/webpack.js',
  '/_next/static/chunks/pages/_app.js',
  '/_next/static/chunks/pages/_error.js',
  '/_next/static/chunks/react.js',
  '/_next/static/chunks/nextjs.js',
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  console.log('Enhanced Service Worker installing...');
  
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('Caching critical static assets');
        return cache.addAll(CRITICAL_ASSETS);
      }),
      self.skipWaiting()
    ])
  );
});

// Activate event - clean up old caches and claim clients
self.addEventListener('activate', (event) => {
  console.log('Enhanced Service Worker activating...');
  
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return !cacheName.startsWith(CACHE_VERSION);
            })
            .map((cacheName) => {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      }),
      self.clients.claim()
    ]).then(() => {
      // Notify clients that service worker is ready
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'SW_READY' });
        });
      });
    })
  );
});

// Enhanced fetch event with intelligent caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests (except for analytics)
  if (url.origin !== location.origin) {
    // Allow analytics requests to pass through
    if (url.hostname.includes('vercel') || url.hostname.includes('google')) {
      return;
    }
    return;
  }

  // Intelligent caching strategy based on request type
  if (request.destination === 'document') {
    // HTML pages - Network First with Stale While Revalidate
    event.respondWith(
      networkFirstWithStaleWhileRevalidate(request, DYNAMIC_CACHE)
    );
  } else if (request.destination === 'script' || request.destination === 'style') {
    // JS/CSS - Cache First with Network Fallback
    event.respondWith(
      cacheFirstWithNetworkFallback(request, STATIC_CACHE)
    );
  } else if (request.destination === 'image') {
    // Images - Cache First with Network Fallback
    event.respondWith(
      cacheFirstWithNetworkFallback(request, DYNAMIC_CACHE)
    );
  } else if (url.pathname.startsWith('/api/')) {
    // API requests - Network First with Cache Fallback
    event.respondWith(
      networkFirstWithCacheFallback(request, API_CACHE)
    );
  } else {
    // Other assets - Stale While Revalidate
    event.respondWith(
      staleWhileRevalidate(request, DYNAMIC_CACHE)
    );
  }
});

// Network First with Stale While Revalidate strategy
async function networkFirstWithStaleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    if (networkResponse.status === 200) {
      // Update cache with fresh response
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Network failed, try cache
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page if available
    return cache.match('/offline.html') || new Response('Offline', { status: 503 });
  }
}

// Cache First with Network Fallback strategy
async function cacheFirstWithNetworkFallback(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    throw error;
  }
}

// Network First with Cache Fallback strategy
async function networkFirstWithCacheFallback(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Stale While Revalidate strategy
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  // Always try to fetch fresh content in background
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => {
    // Ignore network errors for background updates
  });
  
  // Return cached response immediately if available
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Wait for network response if no cache
  return fetchPromise;
}

// Background sync for analytics and other data
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(sendQueuedAnalytics());
  } else if (event.tag === 'cache-update') {
    event.waitUntil(updateCaches());
  }
});

// Send queued analytics data
async function sendQueuedAnalytics() {
  try {
    // Get queued analytics from IndexedDB
    const queuedData = await getQueuedAnalytics();
    
    for (const data of queuedData) {
      try {
        await fetch('/api/analytics', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        });
        
        // Remove from queue after successful send
        await removeQueuedAnalytics(data.id);
      } catch (error) {
        console.error('Failed to send analytics data:', error);
      }
    }
  } catch (error) {
    console.error('Analytics sync failed:', error);
  }
}

// Update caches with fresh content
async function updateCaches() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    
    // Update critical assets
    for (const asset of CRITICAL_ASSETS) {
      try {
        const response = await fetch(asset);
        if (response.status === 200) {
          await cache.put(asset, response);
        }
      } catch (error) {
        console.warn('Failed to update asset:', asset, error);
      }
    }
    
    // Notify clients of cache update
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({ 
          type: 'CACHE_UPDATED', 
          cacheName: DYNAMIC_CACHE 
        });
      });
    });
  } catch (error) {
    console.error('Cache update failed:', error);
  }
}

// Helper functions for IndexedDB operations
async function getQueuedAnalytics() {
  // Implementation for getting queued analytics from IndexedDB
  return [];
}

async function removeQueuedAnalytics(id) {
  // Implementation for removing analytics from queue
  return true;
}

// Message handling for communication with main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  } else if (event.data && event.data.type === 'CACHE_URLS') {
    const urls = event.data.urls;
    event.waitUntil(
      caches.open(DYNAMIC_CACHE).then((cache) => {
        return cache.addAll(urls);
      })
    );
  }
});