const Service = require('egg').Service
const bcrypt = require('bcryptjs')

class UsersService extends Service {
  async register(data) {
    const { ctx, app } = this
    const { email, name, password, repassword } = data

    if (password !== repassword) {
      let resData = {
        msg: '两次输入密码不一致，请重新输入',
        success: false,
      }
      return resData
    }

    const token = ctx.helper.loginToken({email: email, password: password}, 7200)


    await app.redis.set('loginToken', token, 'ex', 7200)

    const salt = bcrypt.genSaltSync()
    const pwdHash = bcrypt.hashSync(password, salt)

    let result = await ctx.model.Users.create({email, name, password: pwdHash, created_at: new Date(), updated_at: new Date()})

    result = {success: true, ...result}

    return result
  }
}

module.exports = UsersService