
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {

  apiKey: "AIzaSyAIcUf46TZ3uDmeubsiYMjCQAe-FMengaY",

  authDomain: "proyecto-2entrega-lnd.firebaseapp.com",

  projectId: "proyecto-2entrega-lnd",

  storageBucket: "proyecto-2entrega-lnd.firebasestorage.app",

  messagingSenderId: "1087635450180",

  appId: "1:1087635450180:web:e1f841fabab164f49c4f11",

  measurementId: "G-KP6807J6JV"

};

  


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;
