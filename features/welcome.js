module.exports = {
   welcome: (member, RichEmbed) => {
      const channel = member.guild.channels.find(ch => ch.name === "welcome");
      if (!channel) return;
      
      const box = new RichEmbed()
         .setColor("#0080ff")
         .setTitle(`> Welcome to server ${member.guild.name}`)
         .setDescription("**Please read rules for the server.**")
         .setFooter('©Development by Ahmed Essam', member.guild.iconURL);

      channel.send(`Welcome to the server, ${member}!`)
      member.send(box)
   }
}