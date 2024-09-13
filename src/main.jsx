import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw_fyQYPqzecAGwmZzgOOt2ZCbi1chkjk",
  authDomain: "react-funkoworld.firebaseapp.com",
  projectId: "react-funkoworld",
  storageBucket: "react-funkoworld.appspot.com",
  messagingSenderId: "47254016951",
  appId: "1:47254016951:web:426f956b621ad215dace32",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
