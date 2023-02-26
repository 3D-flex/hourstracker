import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCJYRK9IjQ6sjqWJHslq0CXELI0KmwWSRQ",
    authDomain: "hourstracker-cs.firebaseapp.com",
    projectId: "hourstracker-cs",
    storageBucket: "hourstracker-cs.appspot.com",
    messagingSenderId: "122071479757",
    appId: "1:122071479757:web:f8f333cba041c082640084",
    measurementId: "G-CDM7FH0HEH"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export default app;