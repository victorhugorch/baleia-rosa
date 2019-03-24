const robots = {
    tweet: require('./robots/tweet'),
    analyse: require('./robots/analyse')
};

function start() {
    robots.tweet.getAndAnalyseTweet();
}

start();