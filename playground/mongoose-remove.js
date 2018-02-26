const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Remove everything
Todo.remove({}).then( (result) => {
  console.log(result);
});

//  Todo.findOneAndRemove
//  Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5a947489bc5880536c07d7ac'}).then((todo) => {
  console.log(todo);
});

// Same

Todo.findByIdAndRemove('5a947489bc5880536c07d7ac').then( (todo) => {
  console.log(todo);
});
