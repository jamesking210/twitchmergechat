// merged bot.js with knownBots

const tmi = require('tmi.js');
const knownBots = require('./knownBots'); // Import the list of known bots

// Replace 'your_oauth_token' with the OAuth token for your bot account
const options = {
    options: { debug: true },
    connection: { reconnect: true },
    identity: {
        username: 'botusername', // Bot's Twitch username
        password: 'oauth:token'    // Bot's OAuth token
    },
    channels: ['channel_1', 'channel_2']
};

const client = new tmi.Client(options);

client.connect();

client.on('chat', (channel, user, message, self) => {
    if (self || knownBots.includes(user.username.toLowerCase())) return; // Ignore messages from the bot itself and known bots

    let targetChannel;
    if (channel.includes('channel_1')) {
        targetChannel = 'channel_2';
    } else if (channel.includes('channel_2')) {
        targetChannel = 'channel_1';
    } else {
        return; // Do nothing if the channel is not one of the two
    }

    // Delay sending the message (5 seconds)
    setTimeout(() => {
        client.say(targetChannel, `${user['display-name']}: ${message}`);
    }, 5000);
});

client.on('error', (error) => {
    console.error('Error:', error);
});
