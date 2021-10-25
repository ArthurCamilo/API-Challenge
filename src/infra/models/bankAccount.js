const sequelize = require('../database');
const { DataTypes } = require('sequelize');
require('dotenv/config');

const bankAccounts = sequelize.define('bank_accounts', {
    identification: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
    },
    bankCode: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
    },
    accountType: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
    },
    fullName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    agencyCode: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    agencyDigit: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    accountCode: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    accountDigit: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    schema: process.env.DB_SCHEMA,
    timestamps: false,
    underscored: true
});

module.exports = bankAccounts;