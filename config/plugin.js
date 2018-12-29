module.exports = {
  // 开启模板插件
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  // 开启validate插件
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  passport: {
    enable: true,
    package: 'egg-passport',
  },
  passportGithub: {
    enable: true,
    package: 'egg-passport-github',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
}