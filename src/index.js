import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAh9H4vAVYxkFob8tWfeWiOOMqZ1UMLZMQ",
  authDomain: "chatroom-97c43.firebaseapp.com",
  databaseURL: "https://chatroom-97c43.firebaseio.com",
  projectId: "chatroom-97c43",
  storageBucket: "chatroom-97c43.appspot.com",
  messagingSenderId: "174907672317",
  appId: "1:174907672317:web:548a943edd0ed3ac3ae094",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
