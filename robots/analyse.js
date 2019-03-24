const algorithmia = require('algorithmia');

function analyse(sentence) {
    const alghorithimiaCredentials = require('../credentials/algo.json');
    const algorithmiaAuthenticated = algorithmia(alghorithimiaCredentials.apiKey);
    const SentimentAnalysisAlgo = algorithmiaAuthenticated.algo("nlp/SentimentAnalysis/1.0.5?timeout=300");

    let input = {
        'document': sentence,
        'language': 'pt'
    };

    SentimentAnalysisAlgo.pipe(input)
        .then((res) => {
            let feelingValue = res.result[0].sentiment;

            if (feelingValue > -0.7) {
                console.info(input);
                console.info(feelingValue);

                // todo: send a private message
            }
        });
}

module.exports = analyse;