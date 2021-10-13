// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDYf5kNwOSkb3Jo4KAKS_U_tOXGdEko6TI',
  authDomain: 'jurre-gram.firebaseapp.com',
  projectId: 'jurre-gram',
  storageBucket: 'jurre-gram.appspot.com',
  messagingSenderId: '1047746741780',
  appId: '1:1047746741780:web:b30ce028be1af35b3e8901'
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
