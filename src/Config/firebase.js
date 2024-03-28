import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_StJJtmkpRcy1csV2j4cTJCPFEvMj_t8",
  authDomain: "firechat-87f14.firebaseapp.com",
  projectId: "firechat-87f14",
  storageBucket: "firechat-87f14.appspot.com",
  messagingSenderId: "983786110352",
  appId: "1:983786110352:web:f23270e0ad0f6dd5084715",
  measurementId: "G-C63E9BQEG9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth(app);

export const storage = getStorage();
