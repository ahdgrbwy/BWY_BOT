module.exports = {
   avatar: (message, cmd) => {
      if (cmd === "avatar") {
         if (message.mentions.users.first()) {
            message.channel.send(message.mentions.users.first().avatarURL)
         } else {
            message.channel.send(message.author.avatarURL)
         }
      }
   }
}