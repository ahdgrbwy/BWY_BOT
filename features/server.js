module.exports = {
   server: (message, cmd, RichEmbed, moment) => {
      if (cmd === "server") {
         const m = message.guild.members;
         const box = new RichEmbed()
            .setColor("#0080ff")
            .setAuthor(message.guild.name, message.guild.iconURL)
            .addField("Server ID:",  message.guild.id, true)
            .addField("Created in:",
               message.guild.createdAt.toLocaleString() + "\n" 
               + "``" + moment(message.guild.createdAt).fromNow() + "``"
            , true)
            .addField(`Members [**${message.guild.memberCount}**]:`, 
               `**${
                  m.filter(m => m.presence.status === 'online').size
                  + m.filter(m => m.presence.status === 'idle').size
                  + m.filter(m => m.presence.status === 'dnd').size
               }**` + " Online"
            )
            .addField("Owner", message.guild.owner, true)
            .addField(`Channels [**${message.guild.channels.size}**]:`,
               `**${message.guild.channels.filter(v => v.type === "voice").size}**` + " Voice | "
               + `**${message.guild.channels.filter(v => v.type === "text").size}**` + " Text", 
            true)
            .addField("Roles:", `count [**${message.guild.roles.size}**]`, true)
            .setFooter("©Development by Ahmed Essam", message.guild.iconURL);
   
         message.channel.send(box)
      }
   }
}