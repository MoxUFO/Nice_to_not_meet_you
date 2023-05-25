const { connect, connection } = require('mongoose');

connect('mongodb://localhost/newFriendsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
