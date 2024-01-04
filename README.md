Twitch Merge Chats is a JS bot that listens between both Channel_1 and Channel_2 and chat's the message across to the oppisite channel.

There are two files that should be in the same directory as eachother.
1. bot.js - edit your bot name & OAUTH for your bot & edit channel_1 & channel_2 to the channel names you need to listen and reply to.
2. knownBots.js - edit or add known bots to this file as needed.

When you are satisfied with the changes you make, run it  $ node bot.js

Feel free to improve or fork this for your own use.

My use: my cousin and I do a podcast on our own twitch channels on friday nights & we would like both chats to see eachothers replies.
for my own record, the file that both .js files are in is /root/twitch/ (change to your desired folder in crontab example below)

To add to a cronjob to start up with linux use crontab -e and append the following line to the end
@reboot /usr/bin/node /root/twitch/bot.js >> /root/twitch/bot.log 2>&1
