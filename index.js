let twit = require('twit');
let config = require('./config.js');

const Bot = new twit(config);

console.log("works", Bot);
