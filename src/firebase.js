import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC7I1kBK5urX0_AAk_z4JwhgY2BKOamM10",
    authDomain: "react-firebase-auth-dev-284ad.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-dev-284ad.firebaseio.com",
    projectId: "react-firebase-auth-dev-284ad",
    storageBucket: "react-firebase-auth-dev-284ad.appspot.com",
    messagingSenderId: "195605340857",
    appId: "1:195605340857:web:d7fe5c73360191606b3168"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;