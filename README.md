# FCM Template

A Firebase Cloud Messaging (FCM) template for web applications.

## Setup Instructions

### 1. Environment Configuration

This project uses environment variables to keep Firebase credentials secure. Follow these steps:

1. **Copy the development configuration:**
   ```bash
   copy public\env-loader.development.js public\env-loader.js
   ```

2. **Update the credentials** in `public/env-loader.js` with your Firebase project configuration:
   - Get your Firebase config from the Firebase Console → Project Settings → General → Your apps → Web app → Config
   - Get your VAPID key from Firebase Console → Project Settings → Cloud Messaging → Web Push certificates

**IMPORTANT**: Never commit `public/env-loader.js` with actual credentials to version control!

### 2. Local Development

1. Serve the files using a local web server (required for service workers):
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js http-server
   npx http-server public -p 8000
   ```

2. Open `http://localhost:8000` in your browser

### 3. Production Deployment

For production deployment:

1. **DO NOT** copy `env-loader.development.js` to production
2. Instead, configure your deployment environment to inject the Firebase configuration
3. Update `public/env-loader.js` with your production values or use build-time replacement

### File Structure

- `.env` - Environment variables (not used directly in client-side code)
- `public/env-loader.js` - Placeholder configuration file
- `public/env-loader.development.js` - Development configuration (excluded from git)
- `public/firebase-config.js` - Configuration loader that works in both window and service worker contexts
- `public/index.html` - Main application
- `public/firebase-messaging-sw.js` - Service worker for background FCM handling

### Security Notes

- **NEVER** commit actual Firebase credentials to version control
- The `.env` file contains your credentials for reference but is excluded from git
- The `public/env-loader.js` file should be excluded from git when it contains real credentials
- The `public/env-loader.development.js` file is excluded from git and contains your development credentials
- In production, use environment variables or secure configuration management
- Always use the template version of `env-loader.js` in your repository

### Firebase Console Setup

1. Enable Cloud Messaging in your Firebase project
2. Generate a Web Push certificate (VAPID key) in Project Settings → Cloud Messaging
3. Configure your authorized domains in Authentication → Settings → Authorized domains

## Usage

1. Click "Request Notification Permission" to enable notifications
2. Enter your Firebase User ID
3. Click "Get & Save FCM Token" to register for notifications
4. Use "Create Test Alert" to test the notification system

The application will save FCM tokens to Firestore and can receive both foreground and background notifications.
