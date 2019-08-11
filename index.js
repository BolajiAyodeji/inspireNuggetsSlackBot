const slackBot = require('slackbots');
const axios = require('axios');

const bot = new slackBot({
    token: 'xoxb-407013445267-724945161175-uGx7WM8RTqY2aVRKd8fNcewW',
    name: 'inspireNuggets'
})

// Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':carlton:'
    }

    bot.postMessageToChannel(
        'random',
        'Get inspired while working with @inspireNuggets!',
        params
    );
})

// Error Handler
bot.on('eror', (err) => {
    console.log(err);
})

// Message Handler
bot.on('message', (data) => {
    if(data.type !== 'message') {
        return;
    }
    console.log(data);
})