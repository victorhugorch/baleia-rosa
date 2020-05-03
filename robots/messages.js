const botMessages = {
    'pt': {
        0: 'Olá @${johndoe} às coisas podem parecer difíceis agora mas esse momento também passa. Converse com alguém que voce confie e acredite: VOCE NÃO ESTÁ SÓ ❤️ e ainda assim, se precisar de ajuda ligue para o CVV pelo telefone 188.',
        1: 'Oi, @${johndoe}, sentimentos ruins também passam e, lembre-se, você não está só ❤. Converse com alguém que você confie e caso necessite de ajuda profissional, ligue 188.',
        2: 'Olá @${johndoe}, momentos difíceis podem parecer eternos, mas não são. Lembre-se que tudo passa ❤ Meu conselho é que você procure alguém confie para conversar. E se ainda assim precisar de ajuda profissional, ligue 188.'
    }
};

function getMessage(lang, username) {
    return botMessages[lang][randomInteger(0, 2)].replace(/johndoe/, username);
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    getMessage
};