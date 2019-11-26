module.exports = {
   info: (message, cmd, RichEmbed) => {
      if (cmd === "info") {
         const box = new RichEmbed()
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
   }
}