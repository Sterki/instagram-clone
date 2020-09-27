import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkAKSkuQFFtmXJx9ykCWv0FtVxWOOM82U",
  authDomain: "instagram-clone-b47fa.firebaseapp.com",
  databaseURL: "https://instagram-clone-b47fa.firebaseio.com",
  projectId: "instagram-clone-b47fa",
  storageBucket: "instagram-clone-b47fa.appspot.com",
  messagingSenderId: "377681850446",
  appId: "1:377681850446:web:eb5b9cea796173c92dd31f",
  measurementId: "G-LVBB1VD319",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { auth, db, storage };
