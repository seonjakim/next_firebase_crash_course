// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCPfurAOO2wAiKhU802JzhIRCK2WDP1-14',
  authDomain: 'crash-course-926bf.firebaseapp.com',
  projectId: 'crash-course-926bf',
  storageBucket: 'crash-course-926bf.appspot.com',
  messagingSenderId: '549092228171',
  appId: '1:549092228171:web:5eac54a78c3514bdbf61ce',
  measurementId: 'G-828999C9PS',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const db = getFirestore()
export { db }
