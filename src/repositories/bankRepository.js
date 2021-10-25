const Bank = require('../infra/models/bank');

const getAll = async () => await Bank.findAll();

module.exports = {
    getAll
}