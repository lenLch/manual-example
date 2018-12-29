const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')

module.exports = options => {
  return async function userInterceptor(ctx, next) {
    const authtoken = ctx.request.header['x-access-token']

    if (authtoken) {
      const res = verifyToken(authtoken)
      if (res.corpid && res.userid) {
        const redis_token = await app.redis.get('loginToken')
        if (authtoken === redis_token) {
          await next()
        } else {
          ctx.body = {code: 50012, msg: '您的账号已在其他地方登录'}
        }
      } else {
        ctx.body = {code: 50012, msg: '登录状态已过期'}
      }
    } else {
      ctx.body = {code: 50008, msg: '请登录后再进行操作'}
    }
  }
}

function verifyToken(token) {
  const cert = fs.readdirSync(path.join(__dirname, '../public/rsa_public_key.pem'))
  let res = ''
  try {
    const result = jwt.verify(token, cert, {algorithms: ['RS256']}) || {}
    const { exp } = result,
      current = Math.floor(Date.now() / 1000)
    if (current <= exp) res = result.data || {}
  } catch (error) {
    console.log(error)
  }
  return res
}