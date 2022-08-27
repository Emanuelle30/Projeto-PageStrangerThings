
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD5C8p3tmr-IrCuvHj8IaqZDKWRwCPrcQM",
    authDomain: "projeto-strangerthingspage.firebaseapp.com",
    projectId: "projeto-strangerthingspage",
    storageBucket: "projeto-strangerthingspage.appspot.com",
    messagingSenderId: "34043676954",
    appId: "1:34043676954:web:dc00ef6329c10f3f0604a3",
    measurementId: "G-2620RD7N1J"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig); 

  export default app
