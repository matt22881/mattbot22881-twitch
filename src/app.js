require('dotenv').config()
import tmi from 'tmi.js'
const { BOT_USERNAME , OAUTH_TOKEN } = process.env
import channels from './constants/channels'
import users from './constants/users'

const prefix = ";"

const options = {
	options: { debug: true },
	connection: {
    reconnect: true,
    secure: true,
    timeout: 180000,
    reconnectDecay: 1.4,
    reconnectInterval: 1000,
	},
  identity: {

		username: BOT_USERNAME,
		password: OAUTH_TOKEN
	},
	channels
}

const client = new tmi.Client(options)

client.connect()

client.on("join", (channel, username, self) => {
  if (!self){
    const time = new Date
    console.log(`[${time.toLocaleString()}] ${username} has joined ${channel}`)
  }
})

client.on("part", (channel, username, self) => {
  if (!self){
    const time = new Date
    console.log(`[${time.toLocaleString()}] ${username} has left ${channel}`)
  }
})

client.on("chat", (channel, userstate, message, self) => {
  if (self) return;

  const args = message.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  const pfx = message.substring(0, prefix.length)

  if (userstate.username === BOT_USERNAME) {
    console.log(`Not checking bot's messages.`)
    return
  }

  // console.log('commandFile: ', commandFile)
  // console.log('cmd: ', cmd)

  // if (!commandFile.run.includes(`{cmd}.js`)) {
  //   console.log(`${cmd} is not a known command`)
  //   return
  // }

// commandFile.forEach(command => {
  //   console.log('command: '. command)
// })

  if (pfx !== prefix) {return}

  // if (userstate.username !== 'matt22881'){
  if (!users.includes(userstate.username)) {
    console.log(`Not checking ${userstate.username}'s messages.`)
    return
  }

  try {
    let commandFile = require(`./commands/${cmd}.js`)
    function myFunction(){const myVar = setTimeout(doStuff, 500)}
    function doStuff(){commandFile.run(client, message, args, userstate, channel, self)}
    myFunction()
  }
  catch (err) {
    return
  }
})

