var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp' || 'mongodb://dbUser:123456789@ds249128.mlab.com:49128/todo-app-api');
mongoose.connect('mongodb://dbUser:123456789@ds249128.mlab.com:49128/todo-app-api');

module.exports = {mongoose};
