import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA9QwxZT3-G6nhhSpw_CKp5scDkQPyp4gg',
  authDomain: 'reveille-recruiter-935fc.firebaseapp.com',
  databaseURL: 'https://reveille-recruiter-935fc.firebaseio.com',
  projectId: 'reveille-recruiter-935fc',
  storageBucket: 'reveille-recruiter-935fc.appspot.com',
  messagingSenderId: '1051223552155',
  appId: '1:1051223552155:web:60c750b7677848e612563e',
  measurementId: 'G-8H4N34VGY3'
}
// initializing firebase
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection refs
const nameCollection = db.collection('Names')
const resumeCollection = db.collection('Resumes')
const emailCollection = db.collection('Emails')
const jobCollection = db.collection('Jobs')

// export utils/references to firebase
export {
  db,
  auth,
  nameCollection,
  resumeCollection,
  emailCollection,
  jobCollection
}
// we will need access to the store so we need to change around how its exported
const store = new Vuex.Store({
  // apps state
})

export default store