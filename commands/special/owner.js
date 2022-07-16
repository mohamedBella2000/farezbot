exports.run = {
   usage: ['owner'],
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, 'Farz', m.sender.split('@')[0], m)
   },
   error: false,
   cache: true,
   location: __filename
}
