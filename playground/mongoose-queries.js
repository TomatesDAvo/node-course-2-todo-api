const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a8df4850edf2723a3d51f9f';
var userId = '5a8b6f4303dac52bc1ee5ef4';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then( (todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then( (todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then( (user) => {
  if(!user) {
    return console.log('Id not found');
  }
  console.log('User by Id', user);
}, (e) => console.log(e));
