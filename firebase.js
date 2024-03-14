import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = {
    apiKey: "AIzaSyACg1j0R9lu2IErPohknawUoej2OQdNFrE",
    authDomain: "chat-app-libros.firebaseapp.com",
    projectId: "chat-app-libros",
    storageBucket: "chat-app-libros.appspot.com",
    messagingSenderId: "643460956045",
    appId: "1:643460956045:web:27807c6bd61733c61547c4"
}


const app = initializeApp(firebaseApp);

const db = getFirestore(app);

const auth = getAuth(app);


export {auth, app, db}