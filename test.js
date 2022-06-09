const { Get, Post } = require('.');

Post({
  host: "cry-vs.herokuapp.com",
  path: "api/v0/login"
}, {
  username: "test",
  password: "test"
}).then(console.log);
