const Discord = require("discord.js");
const { config } = require("dotenv");

const client = new Discord.Client({
   disableEveryone: true
})

const prefix = "_"; // _command

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
   if (message.author.bot) return
   if (!message.guild) return
   if (!message.content.startsWith(prefix)) return

   const args = message.content.slice(prefix.length).split(/ +/),
   cmd        = args.shift().toLowerCase()

   if (cmd === "help") {
      const box = new Discord.RichEmbed()
         .setColor("#0080ff")
         .setTitle(
            "> All bot commands: \n _ping \n _info"
         )
         
      message.channel.send(box)
   }

   if (cmd === "ping") { // Ping Feature
      const msg = await message.channel.send('testing...');
      msg.edit(`> Your ping: ${Math.round(client.ping)}ms`);
   }

   if (cmd === "info") { // Informations feature
      const box = new Discord.RichEmbed()
         .setColor("#0080ff")
         .setAuthor(message.guild.name, message.guild.iconURL)
         .setDescription(
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
         )
         .addBlankField()
         .addField('Website:', 'https://ahmedessam.info/', true)
         .addField('IP Server MTASA:', 'mtasa://xxx.xx.xx.xx:xxxxx/', true)
         .addField('Facebook:', 'https://www.facebook.com/ahdgrbwi/')
         .addField('Youtube:', 'https://www.youtube.com/c/NitroNN/')
         .setFooter('©Development by Ahmed Essam', message.guild.iconURL);

      message.channel.send(box)
   }
})

client.login(process.env.TOKEN); // Change it in a file .env