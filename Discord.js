const { Client, WebEmbed, RichPresence, CustomStatus, SpotifyRPC } = require('discord.js-selfbot-v13');
const ytdl = require('@distube/ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAJnac9vqCFFG-CQT_-SZsCil17-FB5m1c');

const agent = ytdl.createAgent(
  [
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
      "expirationDate": 1755147308.809101,
      "hostOnly": false,
      "httpOnly": false,
      "name": "SIDCC",
      "path": "/",
      "sameSite": null,
      "secure": false,
      "session": false,
      "storeId": null,
      "value": "AKEyXzXkDYSg8i0nfhi_uJmSzubDvqloJ0iIV71rIWlvlk3wCnCmQLSBQ_vBDD5wjW5texTeyA"
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
      "expirationDate": 1755147074.25434,
      "hostOnly": false,
      "httpOnly": true,
      "name": "__Secure-1PSIDTS",
      "path": "/",
      "sameSite": null,
      "secure": true,
      "session": false,
      "storeId": null,
      "value": "sidts-CjIBEJ3XV4Bw0GdK9wbrsHGDZNls32kvCQ-buvwxHe2TnvmxRnSfXk1bTz8GExEjCSNtjxAA"
    },
    {
      "domain": ".youtube.com",
      "expirationDate": 1739595312,
      "hostOnly": false,
      "httpOnly": false,
      "name": "ST-yve142",
      "path": "/",
      "sameSite": null,
      "secure": false,
      "session": false,
      "storeId": null,
      "value": "session_logininfo=AFmmF2swRgIhAObf8cXY30fOWqStJAlNu-HJGQ__BakuMuCs1LdBLXB6AiEAtiZQItVVBzqiHelr4SUsKB6QZv0wZUf00IvLGd7aXg0%3AQUQ3MjNmeEV3bWQ1X3FrX1NuRUxoN3p0a0QxUXV3OUdSeTZma1FjNFB4X24zQTdweTJlVGxFVi1IVjJtN19faG12cHZXRWFjTDJNUmZrV1hLSnhlQXZpUFFZanRqelJ0cHU2bFJzVWJxVkRRSmEtZUM2d2FpeWFLY2N0cXFmS1Y5OThBU1o0N1NoTExsZFJzOG5vY18xb2tpc292enN3S3hR"
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
      "expirationDate": 1755147308.809157,
      "hostOnly": false,
      "httpOnly": true,
      "name": "__Secure-1PSIDCC",
      "path": "/",
      "sameSite": null,
      "secure": true,
      "session": false,
      "storeId": null,
      "value": "AKEyXzUj5-AfZyR8BvCjtXhabfItV6WaqTZ9-eHxwrEO_l2scQGh9Oy_-4nS6TWi8sqS8kHp8w"
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
      "expirationDate": 1755147308.809176,
      "hostOnly": false,
      "httpOnly": true,
      "name": "__Secure-3PSIDCC",
      "path": "/",
      "sameSite": "no_restriction",
      "secure": true,
      "session": false,
      "storeId": null,
      "value": "AKEyXzVl2Re1-LIAYdksXJrjao7nqcYOSUK2TxwSu4_jJ9k6fmfAGRngqJXhKKEyfXQHvItozw"
    },
    {
      "domain": ".youtube.com",
      "expirationDate": 1755147074.254397,
      "hostOnly": false,
      "httpOnly": true,
      "name": "__Secure-3PSIDTS",
      "path": "/",
      "sameSite": "no_restriction",
      "secure": true,
      "session": false,
      "storeId": null,
      "value": "sidts-CjIBEJ3XV4Bw0GdK9wbrsHGDZNls32kvCQ-buvwxHe2TnvmxRnSfXk1bTz8GExEjCSNtjxAA"
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
      "expirationDate": 1740199907.317777,
      "hostOnly": false,
      "httpOnly": false,
      "name": "PREF",
      "path": "/",
      "sameSite": null,
      "secure": true,
      "session": false,
      "storeId": null,
      "value": "f4=4000000&f6=40000000&tz=Asia.Jakarta&f5=20000"
    },
    {
      "domain": ".youtube.com",
      "expirationDate": 1739595312,
      "hostOnly": false,
      "httpOnly": false,
      "name": "ST-1b",
      "path": "/",
      "sameSite": null,
      "secure": false,
      "session": false,
      "storeId": null,
      "value": "disableCache=true&itct=CBYQsV4iEwj9uL3J78SLAxXnxqACHd-EDYc%3D&csn=hkHHrt2BLkzV_Psz&session_logininfo=AFmmF2swRgIhAObf8cXY30fOWqStJAlNu-HJGQ__BakuMuCs1LdBLXB6AiEAtiZQItVVBzqiHelr4SUsKB6QZv0wZUf00IvLGd7aXg0%3AQUQ3MjNmeEV3bWQ1X3FrX1NuRUxoN3p0a0QxUXV3OUdSeTZma1FjNFB4X24zQTdweTJlVGxFVi1IVjJtN19faG12cHZXRWFjTDJNUmZrV1hLSnhlQXZpUFFZanRqelJ0cHU2bFJzVWJxVkRRSmEtZUM2d2FpeWFLY2N0cXFmS1Y5OThBU1o0N1NoTExsZFJzOG5vY18xb2tpc292enN3S3hR&endpoint=%7B%22clickTrackingParams%22%3A%22CBYQsV4iEwj9uL3J78SLAxXnxqACHd-EDYc%3D%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22url%22%3A%22%2F%22%2C%22webPageType%22%3A%22WEB_PAGE_TYPE_BROWSE%22%2C%22rootVe%22%3A3854%2C%22apiUrl%22%3A%22%2Fyoutubei%2Fv1%2Fbrowse%22%7D%7D%2C%22browseEndpoint%22%3A%7B%22browseId%22%3A%22FEwhat_to_watch%22%7D%7D"
    }
  ]
);

const fs = require('fs');
const client = new Client();

client.on('ready', async () => {

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
   */
})
const PREFIX = 'f1';
//command message
client.on('messageCreate', async message => {
  const args = message.content.split(" ");
  const searchString = args.slice(1).join(" ");

  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(PREFIX.length);

  const channel = client.channels.cache.get('1340173282934263869');
  const connection = await client.voice.joinChannel(channel, {
    selfMute: false,
    selfDeaf: false,
    selfVideo: false,
  });

  if (command === 'play' || command === 'p') {
    youtube.searchVideos(searchString, 4)
    .then(results => {
    const dispatcher = connection.playAudio(
      ytdl(results[0].shortURL, {
        agent,
        quality: 'highestaudio',
        audioEncodingRanks: "flac",
        highWaterMark: 1 << 25,
        dlChunkSize: 0, // Disable chunking (prevents partial downloads)
        begin: Date.now() // Add a timestamp to avoid cached throttled streams
      })
    );
  
    dispatcher.on('start', () => {
      dispatcher.setVolume(0.05);
      console.log('100% volume');
      console.log('audio is now playing!');
    });
  
    dispatcher.on('finish', () => {
      console.log('audio has finished playing!');
      connection.disconnect();
    });
    dispatcher.on('error', console.error);
  })
  .catch(console.log);
  }
});




client.login('MzMxNjg0NTQwMjIzNTg2MzA0.GbiEiT.fxkzdcnR8JPb-Tiu0pmcKXaH--dRwLng6kDKPA');