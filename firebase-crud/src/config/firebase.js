import  firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyB_RKJLaboLe5sSFFEfd1oP45EoPzhJluA",
  authDomain: "crud-6a6f3.firebaseapp.com",
  databaseURL: "https://crud-6a6f3-default-rtdb.firebaseio.com",
  projectId: "crud-6a6f3",
  storageBucket: "crud-6a6f3.appspot.com",
  messagingSenderId: "818975258166",
  appId: "1:818975258166:web:b058d5b836e6154019ca97"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();