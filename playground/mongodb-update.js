// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a8b587cb32b96fae02f913b")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then( (result) => {
  //   console.log(result);
  // });

  //Chalenge -> update Users collection to increment age by 1 and change name to my name
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a8a14ec7bd66b6b6a85a272")
  }, {
    $set: {
      name: 'JP'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then( (result) => {
    console.log(result);
  });

  // client.close();
});
