require("dotenv").config();

const { Client } = require('discord.js');
const client = new Client()
const PREFIX = "!";

client.on('ready', () => {
    console.log(`${client.user.tag} Login Now.`);
  });

client.on('message', (message) => {
    
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(" ");
            console.log(CMD_NAME);
            console.log(args);
          }
    }
);

client.login(process.env.DISCORDJS_BOT_TOKEN)

