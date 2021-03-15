// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCeouhT9Sf3FWPX7ED4AtUMkSt5SKf2olo",
    authDomain: "kwitter-webapp-920ab.firebaseapp.com",
    projectId: "kwitter-webapp-920ab",
    storageBucket: "kwitter-webapp-920ab.appspot.com",
    messagingSenderId: "196509036857",
    appId: "1:196509036857:web:ac048159424a77b3f7f8e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }