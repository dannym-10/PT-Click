const login = (req, res) => {
  const user = JSON.parse(JSON.stringify(req.user))
  const cleanUser = Object.assign({}, user)

  if (cleanUser.local) {
    console.log(`Deleting ${cleanUser.local.password}`)
    cleanUser.username = cleanUser.local.username
    console.info('userdata', cleanUser)
    delete cleanUser.local
    console.info('userdata', cleanUser)
    res.json(cleanUser)
  } else {
    res.json({ user: cleanUser })
  }
}

export default login
