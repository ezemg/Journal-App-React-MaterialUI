// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDPd3EnCwK7GbFJLVYvItME4JWMckkjO7I',
  authDomain: 'react-course-7ce0f.firebaseapp.com',
  projectId: 'react-course-7ce0f',
  storageBucket: 'react-course-7ce0f.appspot.com',
  messagingSenderId: '1010194232617',
  appId: '1:1010194232617:web:9490959485ac4fa1cc3338',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
