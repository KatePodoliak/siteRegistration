const {Sequelize} = require('sequelize');
const path = require('path');
const fs = require('fs');

const sequelize = new Sequelize ({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'todo',
    dialect: 'mysql',
    logging: false
});

fs.readdirSync(path.join(__dirname, 'models')).filter((file) => {
    return (file.indexOf('.') !== 0);
}).forEach((file) => {
    require(path.join(__dirname, 'models', file))(sequelize);
});

module.exports = sequelize;




