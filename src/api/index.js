import{ getApps, getApp, initializeApp} from'firebase/app';
import{
    getFirestore, collection, addDoc} from "firebase/firestore";
    
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APPID
};

const app_length = getApp().length>0;

//Initialize Firebase
const app = app_lengt ? getApp() : initializeApp(firebaseConfig);