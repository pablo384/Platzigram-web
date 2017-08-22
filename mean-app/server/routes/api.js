const express = require('express');
const router = express.Router();
//mongoo
var mongoose = require('mongoose');
mongoose.connect('mongodb://pablo384:2323@pruebas-shard-00-00-uiwkf.mongodb.net:27017,pruebas-shard-00-01-uiwkf.mongodb.net:27017,pruebas-shard-00-02-uiwkf.mongodb.net:27017/pruebas?ssl=true&replicaSet=pruebas-shard-0&authSource=admin');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('--------Conectado con MONGO---');
});

var userSchema = mongoose.Schema({
  email: String,
  password: String,
  username: String
});
var User = mongoose.model('users', userSchema);

//--------MONGO CLIENT
// var MongoClient = require('mongodb').MongoClient;

// var uri = "mongodb://pablo384:2323@pruebas-shard-00-00-uiwkf.mongodb.net:27017,pruebas-shard-00-01-uiwkf.mongodb.net:27017,pruebas-shard-00-02-uiwkf.mongodb.net:27017/pruebas?ssl=true&replicaSet=pruebas-shard-0&authSource=admin";
// MongoClient.connect(uri, function(err, db) {
//   if (err!=null) {
//     console.log('--------Conectado con MONGO---');
//   }
//   db.close();
// });





// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  // axios.get(`${API}/posts`)
  // .then(posts => {
  //   res.status(200).json(posts.data);
  // })
  // .catch(error => {
  //   res.status(500).send(error)
  // });
  User.find(function (err, users) {
    if (err) return console.error(err);
    res.status(200).json(users);
  })
});

module.exports = router;