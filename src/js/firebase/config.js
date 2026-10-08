import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD07_y5C0poJfTUbHfi_DvKFdU6lbrDuUM",
  authDomain: "kasir-minimarket-c0c10.firebaseapp.com",
  projectId: "kasir-minimarket-c0c10",
  storageBucket: "kasir-minimarket-c0c10.firebasestorage.app",
  messagingSenderId: "17545608956",
  appId: "1:17545608956:web:d10bfb045f18b831e1e179"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;