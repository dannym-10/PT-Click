const user = (req, res, next) => {
  console.log(req.user)

  if (req.user) {
    return res.json({ user: req.user })
  }

  return res.json({ user: null })
}

export default user
