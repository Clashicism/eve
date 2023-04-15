require("dotenv").config();

// const { textHandler } = require("./src/handlers/textHandler");

const tokenId = process.env.BOT_TOKEN;
  let dice=["🎲","⚀","⚁","⚂","⚃","⚄","⚅"]; 

const Discord = require('discord.js');
const client = new Discord.Client();

// new code
// const webhookClient = new Discord.WebhookClient('1096829707212816414', 'ckKimGbhbm3dqjDsatw-K79ABctbCFKNAPF_r6o4fnau8rdNfKBNonvU-Q4HhTBwmhiv');
// end chatGPT generated new code part 1

console.log("start");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('message', msg => {                                       console.log(`on message`);
  let crit=0; let stun=0; let high=0; let glitch=0; let reply="";
  let message=msg.content.toLowerCase();
  let words=message.split(" ");
  let [input,x]=[words[0],words[1]];
console.log('user entered '+words[0].toString());

  if (input === 'roll') {                                       console.log(`on a roll`);
    let dieRoll=0; let amount=0; let diceText=""; 
    if(x>0) {
      for(i=0; i<x; i++) { 
        dieRoll=parseInt((Math.random() * 6)+1);
        diceText+=dice[dieRoll]+" "; amount+=dieRoll; 
        if(dieRoll>high) { high=dieRoll; }
        if(dieRoll==6) { crit+=1; } 
        if(dieRoll==5) { stun+=1; } 
        if((dieRoll==1)||(dieRoll==2)) { glitch+=1; } }
      reply=diceText+" Total: "+amount + " High: "+high;
      if(high>5) {                                       console.log(`high five`);
        if(crit>3) { reply+=", Annihilation! "+crit+ " critical successes"; }
        else if(crit==3) { reply+=", triple critical"; }
        else if(crit==2) { reply+=", double critical"; }
        else if(crit==1) { reply+=", critical"; } }
      if(high>4) {                                       console.log(`low five`);
        if(stun>0) { reply+=", "+stun+" stun"; }
        if(glitch >= (x/2)) { reply+=", glitch"; } }
      else if(high>2) {                                  console.log(`two timer`);
        if(glitch >= (x/2)) { reply+=", critical fail"; } 
        else { reply+=", miss"; } }
      else if(high>1) { reply+=", critical fumble"; }
      else { reply+=", epic fail"; } 
      x=0; input=""; msg.reply(reply); }
    else { reply="I want to play!!!"; x=0; input=""; msg.reply(reply); } }

  if (input === 'soft') {                                console.log(`gone soft`);
    let dieRoll=0; let amount=0; let diceText="";
    if(x>0) {                                            console.log(`got dice?`);
      for(i=0; i<x; i++) { 
        dieRoll=parseInt((Math.random() * 6)+1);
        diceText+=dice[dieRoll]+" "; amount+=dieRoll; 
        if(dieRoll>high) { high=dieRoll; }
        if(dieRoll==6) { stun+=1; } 
        if(dieRoll==5) { stun+=1; } 
        if((dieRoll==1)||(dieRoll==2)) { glitch+=1; } }
      reply=diceText+" Total: "+amount + " High: "+high;
      if(high>4) {                                       console.log(`#5 is alive`);
        if(stun>0) { reply+=", "+stun+" stun"; }
        if(glitch >= (x/2)) { reply+=", glitch"; } }
      else if(high>2) {                                  console.log(`3rd time's the charm`);
        if(glitch >= (x/2)) { reply+=", critical fail"; } 
        else { reply+=", miss"; } }
      else if(high>1) { reply+=", critical fumble"; }
      else { reply+=", epic fail"; }
      x=0; input=""; msg.reply(reply); }
    else { reply="I want to dance!"; x=0; input=""; msg.reply(reply); } }
  if (input === 'talk') {                                console.log(`talk is cheap`);
    reply= "Hi, I'm "+client.user.tag; 
    if (x) { words.shift(); 
       if(words[0]==="roll") { reply+="\n Type `roll` and a number, like `roll 2`. Try it." }
       else { let answer=words.join(" "); reply+="\nI don't know much about `"+answer+"`"; } }
    msg.reply(reply); }
  else if (input === 'ping') { msg.reply('pong'); }
  else if (input === 'data') { msg.reply("msg.author.id "+msg.author.id+"\n"); }
  else if (input === 'user') {                           console.log(`user input`);
    reply="Collecting data \n";
    reply+="msg.author.id "+msg.author.id+"\n";          console.log(reply);
    msg.reply(reply); 
// webhookClient.send(reply);
  }

});

// new code

//client.on('ready', () => {
//  console.log('Bot is ready!');
//});

// client.on('message', message => {
//  // Do something when the bot receives a message
//  let messageContent = message.content;
//  webhookClient.send(messageContent);
//});

//end chatGPT generated new code


client.login(tokenId);
