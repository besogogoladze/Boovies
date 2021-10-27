const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp();


exports.gettopFilms = functions.https.onRequest((req, res) => {
    admin.firestore().collection('topFilms').get()
    .then(data => {
        let topFilms = []
        data.forEach(doc => {
            topFilms.push(doc.data());
        })
        return res.json(topFilms);
    })
    .catch(err => console.error(err));
})
