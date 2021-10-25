const sequelize = require('../database');
const { DataTypes } = require('sequelize');
require('dotenv/config');

const banks = sequelize.define('banks', {
    code: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    logo: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    schema: process.env.DB_SCHEMA,
    timestamps: false,
    underscored: true
});

module.exports = banks;