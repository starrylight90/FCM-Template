// env-loader.js
// This is a template file for Firebase configuration
// Copy env-loader.development.js to this file for local development
// DO NOT commit actual credentials to version control

// Detect if we're in a service worker context
const isServiceWorker = typeof importScripts === 'function';
const globalScope = isServiceWorker ? self : window;

// Template Firebase Configuration - Replace with your actual values
globalScope.FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
  vapidKey: "YOUR_VAPID_KEY"
};
