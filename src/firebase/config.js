import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCFD3uFgl_PCRus6TbS2nX2lgYbqCirwJA",
  authDomain: "mymoney-35ea5.firebaseapp.com",
  projectId: "mymoney-35ea5",
  storageBucket: "mymoney-35ea5.appspot.com",
  messagingSenderId: "716905042789",
  appId: "1:716905042789:web:06ebedf2ac84be96d6878c"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
export { projectFirestore, projectAuth }