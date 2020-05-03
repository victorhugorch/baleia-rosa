require('dotenv').config();

const robots = {
    tweet: require('./robots/tweet'),
    analyse: require('./robots/analyse'),
    messages: require('./robots/messages')
};

function start() {
    robots.tweet.getAndAnalyseTweet();
}

start();