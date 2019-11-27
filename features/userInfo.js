module.exports = {
   userInfo: (message, cmd, RichEmbed, moment) => {
      if (cmd === "userinfo") {
         const mention = message.mentions.users.first() || message.author;

         const box = new RichEmbed()
            .setColor("#0080ff")
            .setThumbnail(mention.avatarURL)
            .addField("Bot?", mention.bot, true)
            .addField("Status", 
               mention.presence.status === "dnd" ? "Do Not Disturb" : mention.presence.status,
            true)
            .addField(
               "Joined Discord:",
               mention.createdAt.toLocaleString() + "\n" 
               + "``" + moment(mention.createdAt).fromNow() + "``"
            )
            .addField("Joined Server:", 
               message.guild.members.get(mention.id).joinedAt.toLocaleString() + "\n"
               + "``" + moment(message.guild.members.get(mention.id).joinedAt).fromNow() + "``"
            )
            .setFooter("©Development by Ahmed Essam", message.guild.iconURL);
   
         message.channel.send(box)
      }
   }
}