import User from '../../db/models/user'

const register = (req, res) => {
  const { username, password, firstName, lastName, weight, height } = req.body

  User.findOne({ 'local.username': username }, (err, userMatch) => {
    if (err) console.warn(err)

    if (userMatch) {
      return res.json({
        error: `Sorry, already a user with the username: ${username}`
      })
    }

    const newUser = new User({
      'local.username': username,
      'local.password': password,
      firstName,
      lastName,
      weight,
      height
    })

    console.info('Saving ', newUser)

    newUser.save((err, savedUser) => {
      console.warn('Error? ', err)
      if (err) return res.json(err)
      return res.json(savedUser)
    })
  })
}

export default register
