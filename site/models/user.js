const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('user',  {
        login: {
            type: DataTypes.STRING(128)
        },
        email: {
            type: DataTypes.STRING(128),
            unique: true
        },
        password: {
            allowNull: true,
            type: DataTypes.STRING(128)
        }
    }, {
        tableName: 'users'
    });

};