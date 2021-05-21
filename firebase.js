import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBs6qOzgEP5iuF58jhaMj3r4yVLW9UQs1s",
  authDomain: "homebook-b9b95.firebaseapp.com",
  projectId: "homebook-b9b95",
  storageBucket: "homebook-b9b95.appspot.com",
  messagingSenderId: "91387153223",
  appId: "1:91387153223:web:0bc8aea0b5c2055ded9a62",
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export { db, storage }