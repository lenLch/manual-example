module.exports = appInfo => {
  const config = exports = {}

  config.keys = 'myKey'

  config.security = {
    // csrf: {
    //   useSession: true,
    //   sessionName: 'csrfToken'
    // },
    csrf: false,
    domainWhiteList: ['localhost'],
  }

  // template engine
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    }
  }

  // config.middleware = ['jwt', 'errorHandler']
  
  // token 验证
  config.jwt = {
    enable: true,
    ignore: '/api/users/register'
  }

  // 统一错误处理
  config.errorHandler = {
    match: '/api',
  }

  // database configuration
  // config.mysql = {
  //   // single database config
  //   client: {
  //     host: '127.0.0.1',
  //     port: '3306',
  //     user: 'root',
  //     password: 'root',
  //     database: 'eggDB',
  //   },
  //   // wether loading to app, default is true
  //   app: true,
  //   // wether loading to agent, default is false
  //   agent: false,
  // }

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    }
  }

  config.passportGithub = {
    key: '7fabb52ec6984ac0a7da',
    secret: 'ea647c7e6649c30d642fb33834504c4d9637fb65',
  }

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'eggDB'
  }

  return config
}