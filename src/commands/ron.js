import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
});

exports.run = (client, message, args, user, channel, self) => {
  // console.log('user: ', user)
  // console.log('args: ', args)
  const fname = args[0] || user.username
  const mname = args[1] || 'Billy'
  const lname = args[2] || ''
     

  // console.log('fname: ', fname)
  // console.log('lname: ', lname)
    
  instance
    .get()
    .then((res) => {
      // console.log('res: ', res)
      client.say(channel, res.data[0])
    })
    .catch((err) => {
        console.log('err: ', err)
    })
    }

