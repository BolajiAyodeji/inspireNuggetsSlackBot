const slackBot = require('slackbots');
const axios = require('axios');

const bot = new slackBot({
    token: 'xoxb-407013445267-716724698481-ebog3wkkqF2VOorGWXn1ygmg',
    name: 'inspirenuggets'
})

// Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
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
    handleMessage(data.text);
})

// Response Handler
function handleMessage(message) {
    if(message.includes(' inspire me')) {
        inspireMe();
    }
}

// inspire User
function inspireMe() {
    axios.get('https://raw.githubusercontent.com/BolajiAyodeji/inspireNuggets/master/src/quotes.json')
      .then(res => {
            const quotes = res.data;
            const random = Math.floor(Math.random() * quotes.length);
            const quote = quotes[random].quote
            const author = quotes[random].author

            const params = {
                icon_emoji: ':smiley:'
            }
        
            bot.postMessageToChannel(
                'random',
                `:zap: ${quote} - ${author}`,
                params
            );

      })
}