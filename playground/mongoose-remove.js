const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

//To delete all of the records
Todo.remove({}).then((result) => {
  console.log(result);
});

//To delete one by object id
Todo.findByIdAndRemove('5ba03bf3bb150e29108e29f9').then((todo) => {
  console.log(todo);
});

//To delete one by any field in the object
Todo.findOneAndRemove({_id: '5ba03bf3bb150e29108e29f9'}).then((todo) => {
  console.log(todo);
});
