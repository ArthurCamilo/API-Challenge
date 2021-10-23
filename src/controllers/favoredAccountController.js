const { default: BankAccountFactory } = require('../domain/bankAccountFactory');
const FavoredAccountRepository = require('../repositories/favoredAccountRepository');

const createBankAccountAndValidate = (payload) => {
    const { bankCode, bankAgency, bankAgencyDigit, bankAccountCode, bankAccountDigit, bankAccountType } = payload;
    const bankAccount = BankAccountFactory.createBankAccount(bankCode, bankAgency, bankAgencyDigit, bankAccountCode, bankAccountDigit, bankAccountType);
    bankAccount.validate();
};

const getAll = async () => {
    try {
        const favoredAccounts = await FavoredAccountRepository.getAll();
        res.send(favoredAccounts);
    } catch (ex) {
        res.status(400).send({
            message: ex.ExceptionMessage
        })
    }
};

const create = async (req) => {
    try {
        createBankAccountAndValidate(req.payload);
        const favoredAccount = await FavoredAccountRepository.create(req.payload);
        res.send(favoredAccount);
    } catch (ex) {
        res.status(400).send(e)
    }
};

const update = async (req, res) => {
    try {
        createBankAccountAndValidate(req.payload);
        const favoredAccount = await FavoredAccountRepository.update(req.payload);
        res.send(favoredAccount);
    } catch (e) {
        res.status(400).send(e)
    }
};

module.exports = {
    getAll,
    create,
    update
};