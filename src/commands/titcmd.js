import gaim from './gaim.js'



exports.run = (client, message, args, user, channel, self) => {
  gaim.run(client, message, args, user, channel, self);
  setTimeout(() => {client.say(channel, `!quad`)},2000);
  setTimeout(() => {gaim.run(client, message, args, user, channel, self)},4000);
  setTimeout(() => {client.say(channel, `!tyt`)},9000);
  setTimeout(() => {client.say(channel, `!ttok`)},11000);
  setTimeout(() => {client.say(channel, `!tig`)},13000);
  setTimeout(() => {gaim.run(client, message, args, user, channel, self)},15000);
  setTimeout(() => {client.say(channel, `!discord`)},20000);
  setTimeout(() => {gaim.run(client, message, args, user, channel, self)},22000);
  setTimeout(() => {client.say(channel, `!teamyt`)},27000);
  setTimeout(() => {client.say(channel, `!teamig`)},29000);
  setTimeout(() => {gaim.run(client, message, args, user, channel, self)},31000);
  // setTimeout(() => {gaim.run(client, message, args, user, channel, self)},345000);
  // setTimeout(() => {gaim.run(client, message, args, user, channel, self)},29000);
  // setTimeout(() => {gaim.run(client, message, args, user, channel, self)},16000);
}
