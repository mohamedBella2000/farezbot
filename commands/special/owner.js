exports.run = {
   usage: ['owner'],
   async: async (m, {
      client
   }) => {
      client.6282275576880(m.chat, `IRJA`, m.sender.split('@')[0], m)
   },
   error: false,
   cache: true,
   location: __filename
}
