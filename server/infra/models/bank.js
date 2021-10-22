import sequelize from '../database';
const { DataTypes } = require('sequelize');

const Bank = sequelize.define('Bank', {
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        key: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Bank;