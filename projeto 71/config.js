import firebase from "firebase";
require("@firebase/firestore");

  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyBBsc9-Jj3F6boSWUFjXH-ZDCCo17YF2gQ",
    authDomain: "projeto-71-f872c.firebaseapp.com",
    projectId: "projeto-71-f872c",
    storageBucket: "projeto-71-f872c.appspot.com",
    messagingSenderId: "869669392774",
    appId: "1:869669392774:web:9ab8537b2f544d9686dc07"
  };
  


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
