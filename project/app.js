var firebaseConfig = {
  apiKey: "AIzaSyDpI1jPtILEYRCpSoWHmhQkSW0k-NS0DYo",
  authDomain: "login-demo-da839.firebaseapp.com",
  databaseURL: "https://login-demo-da839-default-rtdb.firebaseio.com",
  projectId: "login-demo-da839",
  storageBucket: "login-demo-da839.appspot.com",
  messagingSenderId: "616595246835",
  appId: "1:616595246835:web:0063f95ce39d52ebddb186",
  measurementId: "G-8KS63CB5T2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function signUp(){

  var name= document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  console.log(name.value);
  firebase
.auth()
.createUserWithEmailAndPassword(email.value, password.value)
.then((res) => {
  const user = firebase.auth().currentUser;

  
  if (user != null) {
      user.updateProfile({
          displayName: name.value
      }).then(() => {
        
          window.location = 'second.html';
      }).catch((error) => {
        console.log(error);
      });
  } else {
    alert("Some error has been occured");
  }

}
).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  // ...
});
  
}

function signIn(){

var email = document.getElementById("email");
var password = document.getElementById("password");

firebase
.auth()
.signInWithEmailAndPassword(email.value, password.value)
.then((res) => {
 
  window.location = 'second.html';
 
}
).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  
});
}

function googleSignIn(){
base_provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(base_provider).then(function(result){
console.log(result);
alert("Success..you are Signed in with google");
window.location = 'second.html';
}).catch(function(err){
console.log(err);
alert("Sorry you are  unable to login with google");

});
}