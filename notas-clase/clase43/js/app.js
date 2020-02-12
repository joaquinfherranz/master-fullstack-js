// Conexion a BBDD
// Your web app's Firebase configuration
var firebaseConfig = {
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase);

// var ref = firebase.datatabase().ref("users/1");

// ref.set({
//   username: "name",
//   email: email,
//   profile_picture : imageUrl
// });

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
/*
writeUserData(1,'NombreUsuario', 'a@ff.com', 'url2');

firebase.database().ref('users/1').on("value", snapshot => {
  console.log(snapshot.val());
});

var updates={};
updates['users/2']={
  username: "nuevo nombre",
  email: "correo@e.com",
  profile_picture : "imagen"
};
firebase.database().ref().update(updates);
*/
//consulta
function dameUsuarios(){
  var userRef = firebase.database().ref(`users`);

  // Cuando se añade un elemento
  userRef.on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
          const element = childSnapshot.val();
          console.log(element);
      });
  });
}

//delete
remove de la referencia
y ref.on('child_removed', ())

// firebase.database().ref("users").push([
//   {
//     username: 'nombre json en array',
//     email: 'email',
//     profile_picture: 'picture'
//   }
// ]);

// firebase.database().ref("users").push(
//   {
//     username: 'nombre json directo',
//     email: 'email',
//     profile_picture: 'picture'
//   }
// );

