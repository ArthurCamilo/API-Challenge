const { Sequelize } = require('sequelize');
require('dotenv/config');

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;

const sequelize = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: 'postgres'
});

module.exports = sequelize;