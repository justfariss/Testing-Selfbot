const { Client, WebEmbed, RichPresence, CustomStatus, SpotifyRPC } = require('discord.js-selfbot-v13');
const ytdl = require('@distube/ytdl-core');

const agent = ytdl.createAgent([

  {
    "domain": ".youtube.com",
    "expirationDate": 1755145264.549043,
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-3PSID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": null,
    "value": "g.a000twgXpGfwjX1i9-R_ItsSdHN14cL4qmZDUYWPZw7q0lURvOGo8OTGPLAahwHFRtjQvecTXQACgYKAXoSARcSFQHGX2MiSck8hFTyVgDpHOAY6xr_MxoVAUF8yKqo4R1eowiN96_oNQNy_BwP0076"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1739594738.946485,
    "hostOnly": false,
    "httpOnly": true,
    "name": "GPS",
    "path": "/",
    "sameSite": null,
    "secure": true,
    "session": false,
    "storeId": null,
    "value": "1"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1755146136.676158,
    "hostOnly": false,
    "httpOnly": false,
    "name": "SIDCC",
    "path": "/",
    "sameSite": null,
    "secure": false,
    "session": false,
    "storeId": null,
    "value": "AKEyXzWvupc4oxGgHYw85uQuYRF69-Jp22ifWqk7gGuyFPklOSq8M_iQSVQzAOI3T3SKWCqArg"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1755145264.548953,
    "hostOnly": false,
    "httpOnly": false,
    "name": "SID",
    "path": "/",
    "sameSite": null,
    "secure": false,
    "session": false,
    "storeId": null,
    "value": "g.a000twgXpGfwjX1i9-R_ItsSdHN14cL4qmZDUYWPZw7q0lURvOGo3mGOv_aHRSADx8su_aSrngACgYKARUSARcSFQHGX2MiMNJYhgQl4wKsEZEZZ990NBoVAUF8yKqyGSWkjcWCiWwbB81iiBaM0076"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1755145870.294153,
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-1PSIDTS",
    "path": "/",
    "sameSite": null,
    "secure": true,
    "session": false,
    "storeId": null,
    "value": "sidts-CjIBEJ3XV5wAFhGHFP7IFbeu7CPcr_l-LmEYxNvyL_Xd4IAHNjI5M8ds-tEm6fffZ8-ZCRAA"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1755145264.548881,
    "hostOnly": false,
    "httpOnly": false,
    "name": "SAPISID",
    "path": "/",
    "sameSite": null,
    "secure": true,
    "session": false,
    "storeId": null,
    "value": "kkdufsFGhVjEkfTL/AaYPeJskAK5hejHX0"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1755146136.676216,
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-1PSIDCC",
    "path": "/",
    "sameSite": null,
    "secure": true,
    "session": false,
    "storeId": null,
    "value": "AKEyXzUnAKbNUdXX5K9izXv5cMnLDyLWITXOTQloGm-IjfJQn09NiQCNpTFneav7BzqlYv8Deg"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1755145264.548833,
    "hostOnly": false,
    "httpOnly": true,
    "name": "SSID",
    "path": "/",
    "sameSite": null,
    "secure": true,
    "session": false,
    "storeId": null,
    "value": "A4ZMwIjQKBTdvN9cM"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1755145264.548906,
    "hostOnly": false,
    "httpOnly": false,
    "name": "__Secure-1PAPISID",
    "path": "/",
    "sameSite": null,
    "secure": true,
    "session": false,
    "storeId": null,
    "value": "kkdufsFGhVjEkfTL/AaYPeJskAK5hejHX0"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1755145264.549018,
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-1PSID",
    "path": "/",
    "sameSite": null,
    "secure": true,
    "session": false,
    "storeId": null,
    "value": "g.a000twgXpGfwjX1i9-R_ItsSdHN14cL4qmZDUYWPZw7q0lURvOGoWEjw3eUHw-UgGtyJt9pbXwACgYKAVwSARcSFQHGX2Mi9yrlFRCjn9u9ZOF5UBEHUBoVAUF8yKqBpKOhkeYdwrzVxlWom_Qs0076"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1755145264.548929,
    "hostOnly": false,
    "httpOnly": false,
    "name": "__Secure-3PAPISID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": null,
    "value": "kkdufsFGhVjEkfTL/AaYPeJskAK5hejHX0"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1755146136.676286,
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-3PSIDCC",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": null,
    "value": "AKEyXzWRtRsYERgupDdndRvfZGQrdKVKqgyTn8U4WpgXyJWviYx1HEz-jQpzZNKA-MW9klBxMA"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1755145870.294212,
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-3PSIDTS",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": null,
    "value": "sidts-CjIBEJ3XV5wAFhGHFP7IFbeu7CPcr_l-LmEYxNvyL_Xd4IAHNjI5M8ds-tEm6fffZ8-ZCRAA"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1755145264.548855,
    "hostOnly": false,
    "httpOnly": false,
    "name": "APISID",
    "path": "/",
    "sameSite": null,
    "secure": false,
    "session": false,
    "storeId": null,
    "value": "t_V0PDylq1nCeZo5/Au9mmHOZlCOOlkY3m"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1755145264.548807,
    "hostOnly": false,
    "httpOnly": true,
    "name": "HSID",
    "path": "/",
    "sameSite": null,
    "secure": false,
    "session": false,
    "storeId": null,
    "value": "ApOX0vWcufwKrKstK"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1755145264.777386,
    "hostOnly": false,
    "httpOnly": true,
    "name": "LOGIN_INFO",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "storeId": null,
    "value": "AFmmF2swRgIhAObf8cXY30fOWqStJAlNu-HJGQ__BakuMuCs1LdBLXB6AiEAtiZQItVVBzqiHelr4SUsKB6QZv0wZUf00IvLGd7aXg0:QUQ3MjNmeEV3bWQ1X3FrX1NuRUxoN3p0a0QxUXV3OUdSeTZma1FjNFB4X24zQTdweTJlVGxFVi1IVjJtN19faG12cHZXRWFjTDJNUmZrV1hLSnhlQXZpUFFZanRqelJ0cHU2bFJzVWJxVkRRSmEtZUM2d2FpeWFLY2N0cXFmS1Y5OThBU1o0N1NoTExsZFJzOG5vY18xb2tpc292enN3S3hR"
  },
  {
    "domain": ".youtube.com",
    "expirationDate": 1740198067.20408,
    "hostOnly": false,
    "httpOnly": false,
    "name": "PREF",
    "path": "/",
    "sameSite": null,
    "secure": true,
    "session": false,
    "storeId": null,
    "value": "f4=4000000&f6=40000000&tz=Asia.Jakarta"
  }
]
);

const fs = require('fs');
const client = new Client();

client.on('ready', async () => {
  const getExtendURL = await RichPresence.getExternal(
    client,
    '367827983903490050',
    'https://assets.ppy.sh/beatmaps/1550633/covers/list.jpg', // Required if the image you use is not in Discord
  );
  const status = new RichPresence(client)
    .setApplicationId('367827983903490050')
    .setType('PLAYING')
    .setURL('https://www.youtube.com/watch?v=5icFcPkVzMg') // If you set a URL, it will automatically change to STREAMING type
    .setState('Arcade Game')
    .setName('osu!')
    .setDetails('MariannE - Yooh')
    .setParty({
      max: 8,
      current: 1,
    })
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(getExtendURL[0].external_asset_path) // https://assets.ppy.sh/beatmaps/1550633/covers/list.jpg
    .setAssetsLargeText('Idle')
    .setAssetsSmallImage('373370493127884800') // https://discord.com/api/v9/oauth2/applications/367827983903490050/assets
    .setAssetsSmallText('click the circles')
    .setPlatform('desktop')
    .addButton('Beatmap', 'https://osu.ppy.sh/beatmapsets/1391659#osu/2873429');
  // Custom Status
  const custom = new CustomStatus(client).setEmoji('😋').setState('yum');
  // Spotify
  const spotify = new SpotifyRPC(client)
    .setAssetsLargeImage('spotify:ab67616d00001e02768629f8bc5b39b68797d1bb') // Image ID
    .setAssetsSmallImage('spotify:ab6761610000f178049d8aeae802c96c8208f3b7') // Image ID
    .setAssetsLargeText('未来茶屋 (vol.1)') // Album Name
    .setState('Yunomi; Kizuna AI') // Artists
    .setDetails('ロボットハート') // Song name
    .setStartTimestamp(Date.now())
    .setEndTimestamp(Date.now() + 1_000 * (2 * 60 + 56)) // Song length = 2m56s
    .setSongId('667eE4CFfNtJloC6Lvmgrx') // Song ID
    .setAlbumId('6AAmvxoPoDbJAwbatKwMb9') // Album ID
    .setArtistIds('2j00CVYTPx6q9ANbmB2keb', '2nKGmC5Mc13ct02xAY8ccS'); // Artist IDs

  client.user.setPresence({ activities: [status, custom, spotify] });

  console.log(`${client.user.username} is ready!`);
  const channel = client.channels.cache.get('1340173282934263869');
  const connection = await client.voice.joinChannel(channel, {
    selfMute: false,
    selfDeaf: false,
    selfVideo: false,
  });

  /*const stream = await connection.createStreamConnection();
   const input = ytdl("https://www.youtube.com/watch?v=oWW5TLrrbNo", {
     agent,
     audioEncodingRanks: "flac",
     videoEncodingRanks: "H.264"
   })
 
   const dispatcher = stream.playVideo(input, {
     fps: 60,
     bitrate: 1024,
   });
   const dispatcher2 = stream.playAudio(input);
   //video
   dispatcher.on('start', () => {
     console.log('video is now playing!');
   });
   dispatcher.on('finish', () => {
     console.log('video has finished playing!');
   });
   dispatcher.on('error', console.error);
   //audio
   dispatcher2.on('start', () => {
     console.log('audio is now playing!');
   });
   dispatcher2.on('finish', () => {
     console.log('audio has finished playing!');
   });
   dispatcher2.on('error', console.error);
   // Of course, you can also pause the stream using the `pause` function, but remember to pause both video and audio.
 });*/

  const dispatcher = connection.playAudio(
    ytdl('https://www.youtube.com/watch?v=LtrB_8CejUA', {
      agent,
      quality: 'highestaudio',
      audioEncodingRanks: "flac",
    })
  );

  dispatcher.on('start', () => {
    console.log('audio is now playing!');
    dispatcher.setVolume(0.05);
    console.log('100% volume');
  });

  dispatcher.on('finish', () => {
    console.log('audio has finished playing!');
    connection.disconnect();
  });
  dispatcher.on('error', console.error);
})

//command message
client.on('messageCreate', message => {
  /*if (message.content == 'ping') {
    message.reply('pong');
}
  if (message.content == 'embed_hidden_url') {
    const embed = new WebEmbed()
      .setAuthor({ name: 'hello', url: 'https://google.com' })
      .setColor('RED')
      .setDescription('description uh')
      .setProvider({ name: 'provider', url: 'https://google.com' })
      .setTitle('This is Title')
      .setURL('https://google.com')
      .setImage('https://i.ytimg.com/vi/iBP8HambzpY/maxresdefault.jpg')
      .setRedirect('https://www.youtube.com/watch?v=iBP8HambzpY')
      .setVideo('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
    message.channel.send({
      content: `Hello world ${WebEmbed.hiddenEmbed}${embed}`,
    });
  }
  if (message.content == 'embed') {
    const embed = new WebEmbed()
      .setAuthor({ name: 'hello', url: 'https://google.com' })
      .setColor('RED')
      .setDescription('description uh')
      .setProvider({ name: 'provider', url: 'https://google.com' })
      .setTitle('This is Title')
      .setURL('https://google.com')
      .setImage('https://i.ytimg.com/vi/iBP8HambzpY/maxresdefault.jpg')
      .setRedirect('https://www.youtube.com/watch?v=iBP8HambzpY')
      .setVideo('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
    message.channel.send({
      content: `${embed}`,
    });
  }*/
});




client.login('MzMxNjg0NTQwMjIzNTg2MzA0.GbiEiT.fxkzdcnR8JPb-Tiu0pmcKXaH--dRwLng6kDKPA');