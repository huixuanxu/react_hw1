import{ getApps, getApp, initializeApp} from'firebase/app';
import{ getFirestore, collection, addDoc, deleteDoc, setDoc, getDocs, doc} from "firebase/firestore";
import images from "../json/images.json"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APPID
};

const app_length = getApps().length>0;

//Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

//REFERENCE COLLECTION
const productsCollection = collection(db, "images");

// images.forEach(async(doc) => {
//     await addDoc(productsCollection, doc)
// });

export const feedProducts = async () =>{
    //DELETE ALL EXISTING DOCS
    const querySnapshot = await getDocs(productsCollection);
    querySnapshot.forEach(async(image) => {
        await deleteDoc(doc(db,"images",image.id));
    });
    //ADD NEW DOCS
    images.forEach(async(image) => {
        const docRef = await doc(productsCollection);
        await setDoc(docRef, {...image, id:docRef.id});
    });
};

export const getimages = async () =>{
    const querySnapshot = await getDocs (productsCollection);
    //convert the query to a json array
    let result = [];
    querySnapshot.forEach(async(image) =>{
        await result.push(image.data());
    });
    return result;
};