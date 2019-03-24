const robots = {
    tweet: require('./robots/tweet'),
    analyse: require('./robots/analyse')
};

async function start() {
    robots.tweet.getAndAnalyseTweet();

    // todo: check if user accepted receive private messages in twitter.
    // todo: send a positive private message.
}

start();