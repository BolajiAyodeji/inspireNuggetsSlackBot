<div align="center">
    
# inspireNuggets SlackBot

![inspireNuggets](https://github.com/BolajiAyodeji/inspireNuggets/raw/master/tab-icon.png)

A simple Slackbot that displays random inspiring techie quotes and jokes for developers/designers :zap: <br>
> This bot is powered by the original [inspireNuggets Chrome Browser Extension](https://github.com/BolajiAyodeji/inspireNuggets) quotes and [Chuck Norris Jokes API](https://api.chucknorris.io/)

<a href="https://slack.com/oauth/authorize?client_id=407013445267.723094934560&scope=bot"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"></a>

> I wrote an article on how I built this [here](https://www.bolajiayodeji.com/building-a-slackbot-with-node-js-and-slackbots-js/)

</div>

# Setup

### Clone the repository

```
git clone https://github.com/BolajiAyodeji/inspireNuggetsSlackBot.git && cd inspireNuggetsSlackBot
```

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
