exports.run = {
   usage: ['owner'],
   async: async (m, {
      client
   }) => {
      client.6281575900615(m.chat, 'Farz', m.sender.split('@')[0], m)
   },
   error: false,
   cache: true,
   location: __filename
}
