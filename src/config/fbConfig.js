import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAB86sxzhvwDJ0UktPNxg2ObBEWQX3-khY",
    authDomain: "my-plan-2051c.firebaseapp.com",
    databaseURL: "https://my-plan-2051c.firebaseio.com",
    projectId: "my-plan-2051c",
    storageBucket: "my-plan-2051c.appspot.com",
    messagingSenderId: "798656169496",
    appId: "1:798656169496:web:45604ed06bd412f167a56d",
    measurementId: "G-YPHHKWT36K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;