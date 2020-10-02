require('dotenv').config();

const { WebClient } = require('@slack/web-api');
const web = new WebClient(`${process.env.BOT_TOKEN}`);

function list() {
  const currentTime = new Date().toTimeString();

  (async () => {
    try {
      await web.chat.postMessage({
        channel: '#general',
        text: `The current time is ${currentTime}`,
      });
    } catch (error) {
      console.log(error);
    }

    console.log('LIST');
  })();
}

function add (req) {
  (async () => {
    console.log(req.body.text)
    console.log('ADD');
  })();
}

function generate (req) {
  (async () => {
    console.log('GENERATE');
  })();
}

module.exports = {
  list,
  add,
  generate
}

