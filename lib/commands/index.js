require('dotenv').config();
const _ = require('lodash/array')

const { WebClient } = require('@slack/web-api');
const web = new WebClient(`${process.env.BOT_TOKEN}`);

const roles = ["Retro", "Planning", "Grooming 1"];
const bot_name = "Role Rotator"

async function generate(req) {
  try {
    let channelId = req.body.channel_id,
        newRotation = await rotation(channelId, roles);

    await web.chat.postMessage({
      channel: `${channelId}`,
      text: `${newRotation}`
    });
  } catch (error) {
    console.log(error);
  }
}

async function rotation(channelId, roles){
  let members = await channelMembers(channelId),
      result = "";

  _.pull(members, bot_name)

  withRoles = shuffle(members).map(function(name, i) {
    let role = roles[i] === undefined ? "" : roles[i]
    result += `${name} - ${role}\n`
  });

  return result
}

async function channelMembers(channelId) {
  try {
    let members = await web.conversations.members({
      channel: `${channelId}`
    });

    const memberNames = members.members.map(async (id) => {
      return await user(id)
    })

    return await Promise.all(memberNames)
  } catch (error) {
    console.log(error);
  }
}

async function user(userId) {
  try {
    let userInfo = await web.users.info({
      user: `${userId}`
    });

    return userInfo.user.real_name
  } catch (error) {
    console.log(error);
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array
}

module.exports = {
  generate
}

