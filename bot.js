const twit = require('twit');
require('dotenv').load();

const messages = require('./messages.js');
const keywords = require('./keywords.js');

const Bot = new twit({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
 });

let keywords_arr = Object.values(keywords);
let stream = Bot.stream('statuses/filter', { track: keywords_arr });

stream.on('tweet', (tweet) => {
  let params = {
    status: '@' + tweet.user.screen_name + messageInUserLanguage(tweet.user.lang),
    in_reply_to_status_id: tweet.id_str
  };

  messageInUserLanguage(tweet.user.lang) != undefined ? sendTweetForUser(params) : '';
});

function messageInUserLanguage(lang) {
  return messages[lang];
}

function sendTweetForUser(params) {
  console.log(params);

  /*Bot.post('statuses/update', params, (error, tweet, res) => {
    (error) => console.log('err', error),
    (tweet) => console.log('tweet', tweet),
    (res) => console.log('res', res)
  });*/
}