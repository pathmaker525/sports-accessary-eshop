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

//firebase initialization
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//connecting User profile with Database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return; // if user = null

    const userRef = firestore.doc(`users/${userAuth.uid}`); //doc.ref for CRUD user data
    const snapShot = await userRef.get(); //just a user data

    if (!snapShot.exists) { //checking data. If no data - creating user with userAuth object.
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ displayName, email, createdAt, ...additionalData })
        } catch (error) {
            console.log('error creating user!', error.message)
        }
    }

    return userRef;
}

//Google userAuth setup with popup window
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;