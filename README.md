# inspireNuggets SlackBot

<div align="center">

![inspireNuggets](https://github.com/BolajiAyodeji/inspireNuggets/raw/master/tab-icon.png)

A simple Slackbot that displays random inspiring techie quotes and jokes for developers/designers :zap: <br>
> This bot is powered by the original [inspireNuggets Chrome Browser Extension](https://github.com/BolajiAyodeji/inspireNuggets) quotes and [Chuck Norris Jokes API](https://api.chucknorris.io/)

</div>

# Setup

### Install dependencies

```
npm install

npm start
```

### [Create a bot in Slack](https://api.slack.com/apps/AM92STGGG/general?) and generate and include your OAuth bot token

```
// Add this in your .env
BOT_TOKEN=YOUR_OWN_BOT_TOKEN
```

```js
const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'YOUR_OWN_APP_NAME'
})
```

## Author
[Bolaji Ayodeji](https://github.com/BolajiAyodeji)

## Licence
[MIT](https://opensource.org/licenses/MIT)
