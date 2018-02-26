var mongoose = require('mongoose');

//Condition to validate if app is in a PRD system or in localhost
var connectionHost = process.env.PORT ? 'mongodb://dbUser:123456789@ds249128.mlab.com:49128/todo-app-api' : 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(connectionHost);

module.exports = {mongoose};
