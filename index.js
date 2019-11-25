const Discord = require("discord.js");
const { config } = require("dotenv");

const client = new Discord.Client({
   disableEveryone: true
});

const prefix = "_";

config({path: __dirname + "/.env"})

client.on("ready", () => {
   console.log(`Online successfully ${client.user.username}`)

   client.user.setPresence({
      status: "online",
      game: {
         name: "https://ahmedessam.info/",
         type: "WATCHING"
      }
   })
})

client.on("message", async message => {
   if (!message.content.startsWith(prefix) || message.author.bot) return;


   const args = message.content.slice(prefix.length).split(/ +/);
   const cmd  = args.shift().toLowerCase();

   if (cmd === "hi") {
      message.channel.send('Hello World')      
   }
})

client.login(process.env.TOKEN);