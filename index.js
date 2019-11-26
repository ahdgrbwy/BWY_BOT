const { Client, RichEmbed } = require("discord.js");
const { config } = require("dotenv");
const welcomeFeature = require("./features/welcome");
const helpFeature = require("./features/help");
const pingFeature = require("./features/ping");
const infoFeature = require("./features/info");

const client = new Client({
   disableEveryone: true
});

config({path: __dirname + "/.env"});

const prefix = "_"; // _command

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

client.on("message", message => {
   if (message.author.bot) return
   if (!message.guild) return
   if (!message.content.startsWith(prefix)) return

   const args = message.content.slice(prefix.length).split(/ +/),
   cmd        = args.shift().toLowerCase()

   helpFeature.help(message, cmd, RichEmbed);
   pingFeature.ping(message, cmd, client);
   infoFeature.info(message, cmd, RichEmbed);
})

client.on("guildMemberAdd", member => welcomeFeature.welcome(member, RichEmbed))

client.login(process.env.TOKEN); // Change it in a file .env