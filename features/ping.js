module.exports = {
   ping: async (message, cmd, client) => {
      if (cmd === "ping") {
         const msg = await message.channel.send('testing...')
         msg.edit(`> Your ping: ${Math.round(client.ping)}ms`)
      }
   }
}