// firebase-messaging-sw.js

// Import the 'compat' versions of Firebase App and Messaging SDKs
// Make sure this version matches the one in your index.html
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// Import configuration (this will be replaced by build process in production)
importScripts('env-loader.js');
importScripts('firebase-config.js');

// Get Firebase configuration from the loaded scripts
const firebaseConfig = self.firebaseConfig;

// Initialize Firebase App within the service worker
// Use firebase.initializeApp() from the compat library
firebase.initializeApp(firebaseConfig);

// Get the Messaging service instance
const messaging = firebase.messaging(); // This is correct for compat library

// Handle background messages
// This will be triggered when a message is sent to the browser and the app is not in focus.
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Customize the notification that appears
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png', // Ensure this icon path is correct relative to your public folder
    data: payload.data // You can pass custom data here for handling when the user clicks the notification
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Optional: Handle notification click event (when user clicks the notification)
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification clicked:', event);
  event.notification.close(); // Close the notification

  const urlToOpen = event.notification.data?.url || '/'; // Get URL from data or default to root

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus(); // If tab is already open, focus it
          }
        }
        return clients.openWindow(urlToOpen); // Otherwise, open a new tab/window
      })
  );
});