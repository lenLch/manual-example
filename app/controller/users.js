const Controller = require('egg').Controller

class UserController extends Controller {
  async register() {
    const { ctx } = this
    const registerRule = {
      email: 'string',
      name: 'string',
      password: 'string',
      repassword: 'string',
    }

    console.log('1111111', ctx.request.body)

    ctx.validate(registerRule, ctx.request.body)

    const res = await ctx.service.users.register(ctx.request.body)

    console.log('res', res)

    if (res.success) {
      ctx.body = {
        user_id: res.dataValue.id,
      }
    } else {
      ctx.body = {
        msg: res.msg
      }
    }

    ctx.status = 201
  }

  async login() {
    const { ctx } = this

    const loginRule = {
      email: 'string',
      password: 'string'
    }
  }

  async logout() {
    const { ctx } = this

    ctx.logout()
    ctx.render(ctx.get('referer') || '/')
  }
}


module.exports = UserController