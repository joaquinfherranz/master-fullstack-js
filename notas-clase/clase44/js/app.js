// Conexion a BBDD
// Your web app's Firebase configuration
var firebaseConfig = {
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase);

function registrar(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res=>console.log('registered', res))
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}
//debugger;
//registrar ('prueba2@gmail.com', 'pwd123456');

function signIn (email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res =>{
      console.log('signed',res)
      

    })
    .catch(error => {
      // Handle Errors here.
      console.log('unsigned', error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

function signOut () {
  firebase
    .auth()
    .signOut()
    .then(res => 
      console.log('Sign-out successful')
    )
    .catch(error =>
      console.log('An error happened.')
    );
}

// signIn('prueba2@gmail.com', 'pwd123456');

// debugger;

// signOut();

function showCurrentUser() {
  console.log('currentUser',firebase.auth().currentUser);
}

// Listener logins
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('User is signed in.', user.email, user)
  } else {
    console.log('No user is signed in.'); 
  }
});

// delete user
function deleteUser(){
  firebase.auth().currentUser
    .delete()
    .then(res =>
      console.log('User deleted.', res)
    ).catch(error =>
      console.log('An error happened deleting user', user)
    );
}