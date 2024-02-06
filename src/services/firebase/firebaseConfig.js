import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDG8m8lbrqHSjIk0191X3glUdnNU_Mptxo",
  authDomain: "cafeteria-garcia-47.firebaseapp.com",
  projectId: "cafeteria-garcia-47",
  storageBucket: "cafeteria-garcia-47.appspot.com",
  messagingSenderId: "338153555776",
  appId: "1:338153555776:web:c4e9109d45088a0d3a1ca5"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
// Obtener instancia de Firestore
const BD = getFirestore(app)
export { BD };