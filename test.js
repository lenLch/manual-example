const Sequelize = require('sequelize');
const sequelize = new Sequelize('eggDB', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})


const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });