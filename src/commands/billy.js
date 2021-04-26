exports.run = (client, message, args, user, channel, self) => {

  client.say(channel,
    `
    C'mon, Billy.  Why you gotta always be such a Billy, Billy?

    `
  )

  if (channel === '#outtapocketgamingg'){
      setTimeout(() => {client.say(channel, `!billy`)}, 2500)
  }
}
