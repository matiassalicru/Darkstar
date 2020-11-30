import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBNOuEYZqlVRsCLl0BRskIBHt1YmSg8ZnQ",
  authDomain: "darkstar-tienda.firebaseapp.com",
  databaseURL: "https://darkstar-tienda.firebaseio.com",
  projectId: "darkstar-tienda",
  storageBucket: "darkstar-tienda.appspot.com",
  messagingSenderId: "648595357058",
  appId: "1:648595357058:web:8a9a821baab623d2f8239b",
  measurementId: "G-ECWXGV5X07",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export {
    firebase
}