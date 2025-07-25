// firebase-config.js
// This file loads Firebase configuration from environment variables or defaults

// For client-side applications, we need to make environment variables available
// This can be done through build tools or by serving this file dynamically

// Detect if we're in a service worker context
const isServiceWorker = typeof importScripts === 'function';
const globalScope = isServiceWorker ? self : window;

// Firebase Configuration object
const firebaseConfig = {
  apiKey: globalScope.FIREBASE_CONFIG?.apiKey || "YOUR_API_KEY",
  authDomain: globalScope.FIREBASE_CONFIG?.authDomain || "YOUR_PROJECT.firebaseapp.com",
  projectId: globalScope.FIREBASE_CONFIG?.projectId || "YOUR_PROJECT_ID",
  storageBucket: globalScope.FIREBASE_CONFIG?.storageBucket || "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: globalScope.FIREBASE_CONFIG?.messagingSenderId || "YOUR_SENDER_ID",
  appId: globalScope.FIREBASE_CONFIG?.appId || "YOUR_APP_ID",
  measurementId: globalScope.FIREBASE_CONFIG?.measurementId || "YOUR_MEASUREMENT_ID"
};

const vapidKey = globalScope.FIREBASE_CONFIG?.vapidKey || "YOUR_VAPID_KEY";

// Make available globally
globalScope.firebaseConfig = firebaseConfig;
globalScope.vapidKey = vapidKey;
