
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDH5VrzA9PEWmZ7V46cpAV2h9Foxq6oV4A",
  authDomain: "recipe-book-fbbc3.firebaseapp.com",
  projectId: "recipe-book-fbbc3",
  storageBucket: "recipe-book-fbbc3.firebasestorage.app",
  messagingSenderId: "427327755994",
  appId: "1:427327755994:web:b488fa81533a9f1dcdf7e3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;