import gaim from './aim'



exports.run = (client, message, args, user, channel, self) => {
  gaim.run(client, message, args, user, channel, self)
  setTimeout(() => {client.say(channel, `!quad`)},1500)
  setTimeout(() => {gaim.run(client, message, args, user, channel, self)},3000)
  setTimeout(() => {client.say(channel, `!tyt`)},8000)
  setTimeout(() => {gaim.run(client, message, args, user, channel, self)},9500)
  setTimeout(() => {client.say(channel, `!teamyt`)},14500)
  setTimeout(() => {gaim.run(client, message, args, user, channel, self)},16000)
  setTimeout(() => {client.say(channel, `!discord`)},21000)
  setTimeout(() => {gaim.run(client, message, args, user, channel, self)},22500)
  setTimeout(() => {client.say(channel, `!quad`)},27500)
  setTimeout(() => {gaim.run(client, message, args, user, channel, self)},29000)
  setTimeout(() => {client.say(channel, `!quad`)},33000)
  setTimeout(() => {gaim.run(client, message, args, user, channel, self)},345000)
  setTimeout(() => {client.say(channel, `!quad`)},395000)
  setTimeout(() => {gaim.run(client, message, args, user, channel, self)},410000)

}
