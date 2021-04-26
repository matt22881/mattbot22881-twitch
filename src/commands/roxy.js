exports.run = (client, message, args, user, channel, self) => {
  client.say(channel,
    `
    Hi there Roxy <3 <3 It's my favorite Roxiest Rockin' Roxy of them all <3 <3
    `
  )
  console.log(channel)
  if (channel === '#kneedeep2005'){
    setTimeout(() => {client.say(channel, `!rox`)}, 4000)
  }
}

