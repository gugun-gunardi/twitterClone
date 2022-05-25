// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQ0vT-vIkXSbF8964rMMuOq8SDPi7zLMQ',
  authDomain: 'twitterclone-b4e2a.firebaseapp.com',
  projectId: 'twitterclone-b4e2a',
  storageBucket: 'twitterclone-b4e2a.appspot.com',
  messagingSenderId: '381059891813',
  appId: '1:381059891813:web:a0a08b87b7a7999ddcfc8c',
  measurementId: 'G-3FHRMED3L2',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
