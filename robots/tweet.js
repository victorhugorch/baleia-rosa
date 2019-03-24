const twit = require('twit');
const twitterCredentials = require('../credentials/tweet.json');
const robots = {
    analyse: require('./analyse')
};

const Bot = new twit({
    consumer_key: twitterCredentials.BOT_CONSUMER_KEY,
    consumer_secret: twitterCredentials.BOT_CONSUMER_SECRET,
    access_token: twitterCredentials.BOT_ACCESS_TOKEN,
    access_token_secret: twitterCredentials.BOT_ACCESS_TOKEN_SECRET
});

function getAndAnalyseTweet() {
    let params = {track: ['morrer', 'n aguento mais']};
    const stream = Bot.stream('statuses/filter', params);

    stream.on('tweet', (tweet) => {
        let tweetSentence = tweet.text;
        console.log(tweetSentence);
        // robots.analyse(tweetSentence);
    });
}

function sendPrivateTweet() {
    //
}

module.exports = {
    getAndAnalyseTweet,
    sendPrivateTweet
};
