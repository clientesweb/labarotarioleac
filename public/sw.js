const CACHE_NAME = "leac-laboratorio-v1"
const urlsToCache = [
  "/",
  "/servicios",
  "/nosotros",
  "/novedades",
  "/resultados",
  "/podcast",
  "/contacto",
  "/images/leac-logo.jpg",
  "/images/banner-principal-leac-actualizado.webp",
  "/favicon-leac.png",
  "/manifest.json",
]

// Install event - cache resources
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...")
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Opened cache")
        return cache.addAll(urlsToCache)
      })
      .catch((error) => {
        console.error("Failed to cache resources:", error)
      }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...")
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName)
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return
  }

  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response
        }

        return fetch(event.request).then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response
          }

          // Clone the response
          const responseToCache = response.clone()

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })

          return response
        })
      })
      .catch(() => {
        // Return offline page for navigation requests
        if (event.request.destination === "document") {
          return caches.match("/")
        }
      }),
  )
})

// Background sync for form submissions
self.addEventListener("sync", (event) => {
  if (event.tag === "contact-form-sync") {
    event.waitUntil(syncContactForm())
  }
})

// Push notifications
self.addEventListener("push", (event) => {
  const options = {
    body: event.data ? event.data.text() : "Nueva notificación de LEAC",
    icon: "/favicon-leac.png",
    badge: "/favicon-leac.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "Ver más",
        icon: "/favicon-leac.png",
      },
      {
        action: "close",
        title: "Cerrar",
        icon: "/favicon-leac.png",
      },
    ],
  }

  event.waitUntil(self.registration.showNotification("LEAC Laboratorio", options))
})

// Notification click
self.addEventListener("notificationclick", (event) => {
  event.notification.close()

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/"))
  }
})

// Helper function for contact form sync
async function syncContactForm() {
  try {
    // Get pending form submissions from IndexedDB
    const pendingForms = await getPendingForms()

    for (const form of pendingForms) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form.data),
        })

        if (response.ok) {
          await removePendingForm(form.id)
        }
      } catch (error) {
        console.error("Failed to sync form:", error)
      }
    }
  } catch (error) {
    console.error("Background sync failed:", error)
  }
}

// IndexedDB helpers (simplified)
async function getPendingForms() {
  // Implementation would use IndexedDB to get pending forms
  return []
}

async function removePendingForm(id) {
  // Implementation would remove form from IndexedDB
  console.log("Removing form:", id)
}
