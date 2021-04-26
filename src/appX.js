import tmi from 'tmi.js'
import { BOT_USERNAME , OAUTH_TOKEN, BLOCKED_WORDS } from './constants'
import channels from './channels'
import users from './users'

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

//
// event handlers

client.on('message', (channel, userstate, message, self) => {
  if(self) {
    return
  }
console.log('userstate.username: ', userstate.username)
console.log('message: ', message)
  if (userstate.username === BOT_USERNAME) {
    console.log(`Not checking bot's messages.`)
    return
  }

  if (!users.includes(userstate.username)) {
    console.log(`Not checking ${userstate.username}'s messages.`)
    return
  }

	// if(message.toLowerCase() === '!hello') {
    // hello(channel, userstate)
    // return
  // }

  // onMessageHandler(channel, userstate, message, self)
})
//////////////////////////////////////
/*
function onMessageHandler (channel, userstate, message, self) {
  checkTwitchChat(userstate, message, channel)
}

function onDisconnectedHandler(reason) {
  console.log(`Disconnected: ${reason}`)
  client.connect()
}

function onConnectedHandler(address, port) {
  console.log(`Connected: ${address}:${port}`)
}

function onHostedHandler (channel, username, viewers, autohost) {
  client.say(channel,
    `Thank you @${username} for the host of ${viewers}!`
  )
}

function onRaidedHandler(channel, username, viewers) {
  client.say(channel,
    `Thank you @${username} for the raid of ${viewers}!`
  )
}

function onSubscriptionHandler(channel, username, method, message, userstate) {
  client.say(channel,
    `Thank you @${username} for subscribing!`
  )
}

function onCheerHandler(channel, userstate, message)  {
  client.say(channel,
    `Thank you @${userstate.username} for the ${userstate.bits} bits!`
  )
}

function onGiftPaidUpgradeHandler(channel, username, sender, userstate) {
  client.say(channel,
    `Thank you @${username} for continuing your gifted sub!`
    )
}

function onHostingHandler(channel, target, viewers) {
  client.say(channel,
    `We are now hosting ${target} with ${viewers} viewers!`
  )
}

function reconnectHandler () {
  console.log('Reconnecting...')
}

function resubHandler(channel, username, months, message, userstate, methods) {
  const cumulativeMonths = userstate['msg-param-cumulative-months']
  client.say(channel,
    `Thank you @${username} for the ${cumulativeMonths} sub!`
  )
}

function subGiftHandler(channel, username, streakMonths, recipient, methods, userstate) {

  client.say(channel,
    `Thank you @${username} for gifting a sub to ${recipient}}.`
  )

  // this comes back as a boolean from twitch, disabling for now
  // "msg-param-sender-count": false
  // const senderCount =  ~~userstate["msg-param-sender-count"];
  // client.say(channel,
  //   `${username} has gifted ${senderCount} subs!`
  // )
}
*/

// commands

// function hello (channel, userstate) {
//   client.say(channel, `Hiya, @${userstate.username}`)
// }

  client.on("chat", (channel, user, message, self) => {
      if (self) return;
      if (message == "hi") {
          client.say(channel, "hey pal.")
      }

      // cmd handler
      const pfx = message.substring(0, prefix.length)
      if (pfx !== prefix) {return}

      const args = message.slice(prefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();

      try {
        let commandFile = require(`./commands/${cmd}.js`)

        function myFunction(){const myVar = setTimeout(doStuff, 1000)}
        function doStuff(){commandFile.run(client, message, args, user, channel, self)}
        myFunction()
      }
      catch (err) {
        return
      }
  })

  function checkTwitchChat(userstate, message, channel) {
    // console.log(message)
    message = message.toLowerCase()
    let shouldSendMessage = false
    shouldSendMessage = BLOCKED_WORDS.some(blockedWord => message.includes(blockedWord.toLowerCase()))
    if (shouldSendMessage) {
      // tell user
      client.say(channel, `@${userstate.username}, you naughty nelly!  We'll have none of that dirty fucking language here...we'll have none of the hate speech or politics.  Your message was deleted.`)
      // delete message
      client.deletemessage(channel, userstate.id)
    }
  }
