module.exports = app => {
  const { router, controller } = app
  const github = app.passport.authenticate('github', {})
  // app.passport.amount('github')
  router.get('/passport/github', github)
  router.get('/passport/github/callback', github)
  router.post('/api/users/register', controller.users.register)

}