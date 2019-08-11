const slackBot = require('slackbots');
const axios = require('axios');

const bot = new slackBot({
    token: 'xoxb-407013445267-716724698481-Cu0L8fmrgflTIopVn4m8EO7A',
    name: 'inspirenuggets'
})

// Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':smiley:'
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

// REsponse Handler
function handleMessage(message) {
    if(message.includes(' inspireme')) {
        inspireMe();
    }
}

// inspire User
function inspireMe() {
    axios.get('https://raw.githubusercontent.com/BolajiAyodeji/inspireNuggets/master/src/quotes.json')
      .then(res => {
          const quotes = res.data;
          random = Math.floor(Math.random() * data.length);

         quote  = data[random].quote;
         author = data[random].author;

            const params = {
                icon_emoji: ':smiley:'
            }
        
            bot.postMessageToChannel(
                'random',
                `yen yen yen: ${quote}`,
                params
            );

      })
}