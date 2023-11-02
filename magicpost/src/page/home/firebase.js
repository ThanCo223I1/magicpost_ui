import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDxULALldqixi4Ov5zx0pC9EQKZZmK-S5s",
    authDomain: "magicpost-9167d.firebaseapp.com",
    databaseURL: "https://magicpost-9167d-default-rtdb.firebaseio.com",
    projectId: "magicpost-9167d",
    storageBucket: "magicpost-9167d.appspot.com",
    messagingSenderId: "231790561755",
    appId: "1:231790561755:web:4e10f278c132d10775fffe",
    measurementId: "G-PLXD1VGJ51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);