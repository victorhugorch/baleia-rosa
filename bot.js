let twit = require('twit');
let config = require('./config.js');
let messages = require('./messages.js');

const Bot = new twit(config);
const stream = Bot.stream('statuses/filter', { track: ['quero morrer', 'vou me matar'] });

stream.on('tweet', (tweet) => {
  console.log('tweet', tweet);
});
