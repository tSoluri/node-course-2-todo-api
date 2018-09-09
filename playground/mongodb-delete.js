const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //Delete Many
  //db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //  console.log(result);
  //});
  //db.collection('Users').deleteMany({name: 'Tom Soluri'}).then((result) => {
  //  console.log(result);
  //});
  //Delete One
  //db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //  console.log(result);
  //});

  //Find One and Delete
  //db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //  console.log(result);
  //});

 db.collection('Users').findOneAndDelete({_id: ObjectID("5b91ac43a0292e0007cd7eec")}).then((result) => {
   console.log(result);
 });

  client.close();
});
