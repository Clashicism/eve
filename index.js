// require("dotenv").config();
    //const { transactionHandler } = require("./src/transactionHandler");
// const EventSource = require("eventsource");
   //const btoa = require("btoa");
// const tokenId = process.env.BOT_TOKEN;
const Discord = require('discord.js');
  const client = new Discord.Client();
  let envID = "";

console.log("start);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('message', msg => {
  if (msg.content === 'ping') {
  msg.reply('pong');
  }
  });

// client.login(tokenId);
console.log(tokenId);
