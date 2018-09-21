import user from '../../db/models/user'

const updateUser = (req, res, next) => {
  console.info(req.user)

  if (req.body && req.user) {
    user.findByIdAndUpdate(
      req.user._id,
      req.body, // { height: 183, '$push': { weight: { date: '', value: '' } } }
      {safe: true, new: true},
      (error, updatedUser) => {
        if (error) {
          console.warn(error)
        }

        res.send(updatedUser)
      }
    )
  } else {
    res.status(403).send()
  }
}

export default updateUser
