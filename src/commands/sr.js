exports.run = (client, message, args, user, channel, self) => {

  client.say(channel,
  `
Sign up and play with us in the browser...just use this link: http://www.streamraiders.com/t/${channel.slice(1)}
  `
  )
}
