module.exports = {
   help: (message, cmd, RichEmbed) => {
      if (cmd === "help") {
         const box = new RichEmbed()
            .setColor("#0080ff")
            .setTitle("> All bot commands:")
            .setDescription(
               "**_server \n\n _ping \n\n_info \n\n _avatar, _avatar @mention \n\n _roles \n\n _userInfo, _userInfo @mention**"
            )
            
         message.channel.send(box)
      }
   }
}