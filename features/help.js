module.exports = {
   help: (message, cmd, RichEmbed) => {
      if (cmd === "help") {
         const box = new RichEmbed()
            .setColor("#0080ff")
            .setTitle("> All bot commands:")
            .setDescription(
               "**_ping \n \n _info**"
            )
            
         message.channel.send(box)
      }
   }
}