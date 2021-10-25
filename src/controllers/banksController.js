const BankRepository = require('../repositories/bankRepository.js');

const getAll = async (req, res) => {
    try {
        const banks = await BankRepository.getAll();
        res.send(banks);
    } catch (e) {
        res.status(400).send(e.message);
    }
};

module.exports = {
    getAll,
    create,
    update
};