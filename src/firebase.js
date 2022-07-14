import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdU3AciSv59_w9iSfgK0W2S0uhUo-RL68",
  authDomain: "disney-plus-clone-780b0.firebaseapp.com",
  projectId: "disney-plus-clone-c00df",
  storageBucket: "disney-plus-clone-c00df.appspot.com",
  messagingSenderId: "261141755022",
  appId: "1:261141755022:web:c539562f74bca4a243c5df",
  measurementId: "G-CLRGWHR6BN",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
