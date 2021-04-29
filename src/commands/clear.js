exports.run = (client, message, args, user, channel, self) => {

    client.clear(channel)
        .then(res => {
            console.log(`${res} has been cleared by ${user.username}.`)
        })
        .catch(err => {
            console.log(`Error clearing ${channel}: `, err)
        })
  
  }
  