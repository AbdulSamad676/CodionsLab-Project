// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC7Uh6ho9E03H1sGNyd6VBtZiEAbmxSs_E',
  authDomain: 'news-feed-443e0.firebaseapp.com',
  projectId: 'news-feed-443e0',
  storageBucket: 'news-feed-443e0.appspot.com',
  messagingSenderId: '927927529082',
  appId: '1:927927529082:web:b8c74a6bb60462666695c3',
  measurementId: 'G-W3YGDL9JP7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
