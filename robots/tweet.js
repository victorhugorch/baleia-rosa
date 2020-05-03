const twit = require('twit');
const robots = {
    analyse: require('./analyse'),
    messages: require('./messages')
};

const twitter = new twit({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

const LANG = 'pt';

function getAndAnalyseTweet() {
    // todo: filter params for more than one language
    let params = {
        track: ['me sinto sozinh', 'viver um inferno', 'vazio dentro de mim'],
        language: LANG
    };

    const stream = twitter.stream('statuses/filter', params);

    stream.on('tweet', (tweet) => {
        const tweetSentence = tweet.text;
        console.log('Tweet to reply: ' + tweetSentence);

        replyTweet(tweet.user.screen_name, tweet.id_str);
        // todo: enable analyse workflow before send message
        //robots.analyse(tweetSentence, tweet);
    });
}

function replyTweet(username, tweetId) {
    let message = robots.messages.getMessage(LANG, username);
    const res = {
        status: message,
        in_reply_to_status_id: '' + tweetId
    };

    console.log('Tweet response: ' + message);

    twitter.post('statuses/update', res,
        (err) => {
            console.log(err)
        }
    );
}

module.exports = {
    getAndAnalyseTweet
};
