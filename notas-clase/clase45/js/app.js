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


// Cloud Storage

function uploadString (message) {
  // var message = 'This is my message.';
  
  const storageRef = firebase.storage().ref();
  const ref = storageRef.child("putString/message.txt");

  ref.putString(message).then(function(snapshot) {
    console.log('Uploaded a raw string!');
  });
}

//uploadString('primera prueba putString');

function uploadBlob () {
  const storageRef = firebase.storage().ref();
  const ref = storageRef.child("putBlob/blob.html");

  const aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
  const blob = new Blob(aFileParts, {type : 'text/html'}); // the blob

  ref.put(blob).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
  });
}

//uploadBlob();

function uploadImage () {
  const storageRef = firebase.storage().ref();
  const ref = storageRef.child('putImg/baby_yoda.jpg');

  // const aFileParts = 
  const putImage = blob => {
    const metadata = {
      contentType: 'image/jpg'
    }
    ref.put(blob, metadata)
      .then(snapshot => console.log('Uploaded a blob or file!'));
  };

  fetch('./img/baby_yoda.jpg')
    .then(response=>response.blob())
    .then(blob=>putImage(blob))
    .catch(err=>console.log('err', err))

}

//uploadImage()

// function uploadImageFile (filename) {
//   const IMAGE_ROOT = 'putImg/'
//   const storageRef = firebase.storage().ref();
//   const ref = storageRef.child(IMAGE_ROOT+filename);

//   // const aFileParts = 
//   const putImage = blob => {
//     const metadata = {
//       contentType: 'image/'+filename.split('.')[1]
//     }
//     ref.put(blob, metadata)
//       .then(snapshot => console.log('Uploaded a blob or file!'));
//   };

//   fetch('./img/'+filename)
//     .then(response=>response.blob())
//     .then(blob=>putImage(blob))
//     .catch(err=>console.log('err', err))

// }

// //uploadImageFile('baby_yoda.png');

function downloadImage() {
  firebase
    .storage()
    .ref()
    .child('putImg/baby_yoda.jpg')
    .getDownloadURL()
    .then(url => document.getElementById('imgId').src=url)
    .catch(err=>console.log('err', err));
}

//downloadImage()

function deleteFile () {
  firebase
    .storage()
    .ref()
    .child('putImg/baby_yoda.png')
    .delete()
    .then(res=>console.log('File deleted successfully'))
    .catch(err=>console.log('Uh-oh, an error occurred!', err));
}

// deleteFile()

function downloadHtml(){
  const downloadFile = url =>
    fetch(url)
      .then(res=>res.blob())
      .then(blob=>readFile(blob))
      .catch(err=>console.log('errDownloadFile', err))

  const readFile = blob => {
    const reader = new FileReader();

    reader.addEventListener('loadend', e=>{
      const text = e.srcElement.result;
      console.log(text);
    });
    
    reader.readAsText(blob);
  }

  firebase
    .storage()
    .ref()
    .child('putBlob/blob.html')
    .getDownloadURL()
    .then(url=>downloadFile(url))
    .catch(err=>console.log('err getDownLoad', err))
  
}

//downloadHtml()
