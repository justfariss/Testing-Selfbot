const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);
  const channel = client.channels.cache.get('1314338628352086089');
  await client.voice.joinChannel(channel, {
    selfMute: false,
    selfDeaf: false,
    selfVideo: false,
  });
})

client.login("NjU2MTM0MTQ5MjkxMzc2NjQw.GkxasF.IvTR-1a_8qJtcOwsEhy5Qy-AXmDPhYvzpsaZbU");
