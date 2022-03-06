exports.run = {
   usage: ['owner'],
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, `IRJA`, m.6282275576880.split('@')[0], m)
   },
   error: false,
   cache: true,
   location: __filename
}
