import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6iMMoMr3r0jzVo9gnnH7J4MMPC993QNE",
  authDomain: "recipes-7508b.firebaseapp.com",
  projectId: "recipes-7508b",
  storageBucket: "recipes-7508b.appspot.com",
  messagingSenderId: "612613389475",
  appId: "1:612613389475:web:8a799ed5ee0ffac650d316"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
