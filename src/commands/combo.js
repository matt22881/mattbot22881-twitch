import go from './go'
import hype from './hype'
import yeah from './yeah'
import turnup from './turnup'
import opg from './opg'
import metal from './metal'
import bag from './bag'
import cheers from './cheers'
import ragelove from './ragelove'
import opglove from './opglove'



exports.run = (client, message, args, user, channel, self) => {
  go.run(client, message, args, user, channel, self)
  setTimeout(() => {hype.run(client, message, args, user, channel, self)},1500)
  setTimeout(() => {yeah.run(client, message, args, user, channel, self)},3000)
  setTimeout(() => {turnup.run(client, message, args, user, channel, self)},4500)
  setTimeout(() => {opg.run(client, message, args, user, channel, self)},6000)
  setTimeout(() => {metal.run(client, message, args, user, channel, self)},7500)
  setTimeout(() => {ragelove.run(client, message, args, user, channel, self)},8750)
  setTimeout(() => {opglove.run(client, message, args, user, channel, self)},10000)
}
