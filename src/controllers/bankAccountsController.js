const BankAccountFactory = require('../domain/bankAccountFactory');
const BankAccountRepository = require('../repositories/bankAccountRepository');

const createBankAccountAndValidate = (payload) => {
    const { identification, fullName, email, status, bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType } = payload;
    const bankAccount = BankAccountFactory.createBankAccount(identification, fullName, email, status, bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType);
    bankAccount.validate();
    return bankAccount;
};

const getAll = async (req, res) => {
    try {
        const bankAccounts = await BankAccountRepository.getAll(req.query.skip, req.query.take);
        res.send(bankAccounts);
    } catch (e) {
        res.status(400).send(e.message);
    }
};

const create = async (req, res) => {
    try {
        const bankAccount = createBankAccountAndValidate(req.body);
        await BankAccountRepository.create(bankAccount);
        res.send(bankAccount);
    } catch (e) {
        res.status(400).send(e.message)
    }
};

const update = async (req, res) => {
    try {
        const bankAccount = createBankAccountAndValidate(req.body);
        await BankAccountRepository.update(bankAccount);
        res.send(bankAccount);
    } catch (e) {
        res.status(400).send(e.message)
    }
};

const remove = async (req, res) => {
    try {
        const { identification, bankCode, accountType } = req.body;
        await BankAccountRepository.remove(identification, bankCode, accountType);
        res.send('Success deleting entries');
    } catch (e) {
        res.status(400).send(e.message)
    }
};

const removeBatch = async (req, res) => {
    try {
        const accounts = req.body;
        await BankAccountRepository.removeBatch(accounts);
        res.send('Success deleting entries');
    } catch (e) {
        res.status(400).send(e.message)
    }
};

module.exports = {
    getAll,
    create,
    update,
    remove,
    removeBatch
};