// Data/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Si usas Firestore
import { getStorage } from "firebase/storage"; // Si usas Storage

const firebaseConfig = {
  apiKey: "AIzaSyD6_evoUlJ6LgTp7YB6JYpWgZLidOSmTqI",
  authDomain: "juanfeterest.firebaseapp.com",
  projectId: "juanfeterest",
  storageBucket: "juanfeterest.appspot.com",
  messagingSenderId: "620162388885",
  appId: "1:620162388885:web:b2f0ccb6a435c56b8c9c9c",
};

const app = initializeApp(firebaseConfig);

// Exporta los servicios que vas a usar en tu aplicación
export const auth = getAuth(app);
export const db = getFirestore(app); // Si usas Firestore
export const storage = getStorage(app); // Si usas Storage

export default app;
