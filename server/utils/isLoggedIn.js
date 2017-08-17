module.exports = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('/login')
  }
  next()
}
