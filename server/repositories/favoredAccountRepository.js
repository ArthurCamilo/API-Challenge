const FavoredAccount = require('../infra/models/favoredAccount');

const getAll = async () => await FavoredAccount.findAll();

const create = async (payload) => {
    const { identification, fullName, email, status, bankCode, bankAgency, bankAgencyDigit, bankAccount, bankAccountDigit } = payload;
    const favoredAccount = await FavoredAccount.create({ identification, fullName, email, status, bankCode, bankAgency, bankAgencyDigit, bankAccount, bankAccountDigit });
    return favoredAccount;
};

const update = async (payload) => {
    const { identification, fullName, email, status, bankCode, bankAgency, bankAgencyDigit, bankAccount, bankAccountDigit } = payload;
    const favoredAccount = await FavoredAccount.create({ identification, fullName, email, status, bankCode, bankAgency, bankAgencyDigit, bankAccount, bankAccountDigit });
    return favoredAccount;
};

module.exports = {
    getAll,
    create,
    update
}