const twit = require('twit');
const config = require('./config.js');
const messages = require('./messages.js');
const keywords = require('./keywords.js');

const Bot = new twit(config);

let keywords_arr = Object.values(keywords);
let stream = Bot.stream('statuses/filter', { track: keywords_arr });

stream.on('tweet', (tweet) => {
  console.log('tweet', tweet.lang);

  let params = {
    status: '@' + tweet.user.screen_name + messages.message_PTBR,
    in_reply_to_status_id: tweet.id
  };

  Bot.post('statuses/update', params, (error, tweet, res) => {
    (error) => console.log('err', error),
    (tweet) => console.log('tweet', tweet),
    (res) => console.log('res', res)
  });
});