const sequelize = require('../database');
const { DataTypes } = require('sequelize');

const FavoredAccount = sequelize.define('FavoredAccount', {
    identification: {
        type: DataTypes.STRING,
        allowNull: false,
        key: true
    },
    bankCode: {
        type: DataTypes.STRING,
        allowNull: false,
        key: true
    },
    bankAccountType: {
        type: DataTypes.STRING,
        allowNull: false,
        key: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    bankAgency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bankAgencyDigit: {
        type: DataTypes.TINYINT,
        allowNull: true
    },
    bankAccount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bankAccountDigit: {
        type: DataTypes.TINYINT,
        allowNull: true
    }
});

module.exports = FavoredAccount;