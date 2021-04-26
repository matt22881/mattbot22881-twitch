import axios from 'axios'
exports.run = (client, message, args, user, channel, self) => {
  // console.log('user: ', user)
  // console.log('args: ', args)
    const fname = args[0] || user.username
    const lname = args[1] || ''
// console.log('fname: ', fname)
// console.log('lname: ', lname)
    // axios.get(`http://api.icndb.com/jokes/random?limitTo=[nerdy,explicit]&firstName=${fname}&lastName=${lname}&escape=javascript`)
    // axios.get(`http://api.icndb.com/jokes/random?limitTo=[explicit]&firstName=${fname}&lastName=${lname}&escape=javascript`)
    // axios.get(`http://api.icndb.com/jokes/random?limitTo=[nerdy]&firstName=${fname}&lastName=${lname}&escape=javascript`)
    axios.get(`http://api.icndb.com/jokes/random?firstName=${fname}&lastName=${lname}&escape=javascript`)

    .then((res) => {
      // console.log('res: ', res)
    client.say(channel, res.data.value.joke)
  })
    .catch((err) => {
      console.log('err: ', err)
    })
  }
