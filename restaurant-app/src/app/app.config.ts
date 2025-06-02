import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({ projectId: "putwebowe", appId: "1:595010973869:web:7c4ac2cfe0e351c4179624", storageBucket: "putwebowe.firebasestorage.app", apiKey: "AIzaSyB_j9xwVoo-sfHClEF9sLQRvfQ3XsWhEy0", authDomain: "putwebowe.firebaseapp.com", messagingSenderId: "595010973869" })), provideFirestore(() => getFirestore())]
};
