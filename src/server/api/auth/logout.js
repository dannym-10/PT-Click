const logout = (req, res) => {
  if (req.user) {
    req.session.destroy()
    res.clearCookie('connect.sid')
    return res.json({ msg: 'logging you out' })
  }

  return res.json({ msg: 'no user to log out!' })
}

export default logout
