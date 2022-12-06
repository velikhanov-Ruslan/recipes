import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAqzICMx6SEOwy-VL0bqzYtBrmPfa-nMYA",
	authDomain: "todo-8677c.firebaseapp.com",
	projectId: "todo-8677c",
	storageBucket: "todo-8677c.appspot.com",
	messagingSenderId: "1093026794517",
	appId: "1:1093026794517:web:6d35307521e647c19c121c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
