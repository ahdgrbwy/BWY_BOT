module.exports = {
   roles: (message, cmd) => {
      if (cmd === "roles") {
         save = "";

         message.guild.roles.forEach(item => {
            save += `${item.name} - ${item.members.size} members\n`
         })
         message.channel.send("```" + save + "```")
      }
   }
}