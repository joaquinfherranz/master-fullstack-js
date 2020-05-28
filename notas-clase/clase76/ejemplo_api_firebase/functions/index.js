const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();
app.use(cors());

admin.initializeApp();

app.post('/', (request, response) => {
  const entry = request.body;
  return admin.database().ref('/entries').push(entry)
  .then(() => {
      return response.status(200).send(entry)
  }).catch(error => {
      console.error(error);
      return response.status(500).send('Oh no! Error: ' + error);
  });
});

app.get("/", (request, response) => {
  return admin.database().ref('/entries').on("value", snapshot => {
      return response.status(200).send(snapshot.val());
  }, error => {
      console.error(error);
      return response.status(500).send('Oh no! Error: ' + error);
  });
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.entries = functions.https.onRequest(app);
