import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAijgUR59JHEA1MRxNqj1xQtENphALVODo",
    authDomain: "sgic-mario-plan.firebaseapp.com",
    databaseURL: "https://sgic-mario-plan.firebaseio.com",
    projectId: "sgic-mario-plan",
    storageBucket: "sgic-mario-plan.appspot.com",
    messagingSenderId: "398272202483",
    appId: "1:398272202483:web:57af1753086968fc131986",
    measurementId: "G-FLNEE4XWTB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase