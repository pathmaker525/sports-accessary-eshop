import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDmwZqGB-r0x5f153AGpQ4R9DIPdBS9Zyw",
    authDomain: "sports-db-1c370.firebaseapp.com",
    databaseURL: "https://sports-db-1c370.firebaseio.com",
    projectId: "sports-db-1c370",
    storageBucket: "",
    messagingSenderId: "267268503105",
    appId: "1:267268503105:web:60a879eae3db0a3be1f8c0",
    measurementId: "G-1G8B72ZMLQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;