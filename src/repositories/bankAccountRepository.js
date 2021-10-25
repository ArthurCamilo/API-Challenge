const BankAccount = require('../infra/models/bankAccount');
const statusTypes = require('../utils/statusTypes');


const getAll = async (skip, take) =>  {
    return await BankAccount.findAll({
        offset: skip,
        limit: take
    });
};

const create = async (account) => {
    const bankAccount = await BankAccount.create(account);
    return bankAccount;
};

const update = async (account) => {
    let attributesToUpdate = account;
    if (account.status == statusTypes.VALIDADO) {
        attributesToUpdate = { email: account.email };
    }

    const bankAccount = await BankAccount.update(attributesToUpdate, {
        where: {
            identification: account.identification,
            bankCode: account.bankCode,
            accountType: account.accountType
        }
    });

    return bankAccount;
};

const remove = async (identification, bankCode, accountType) => {
    await BankAccount.destroy({
        where: {
            identification: identification,
            bankCode: bankCode,
            accountType: accountType
        }
    })
};

const removeBatch = async (accounts) => {
    await accounts.map(account => remove(account.identification, account.bankCode, account.accountType));
};

module.exports = {
    getAll,
    create,
    update,
    remove,
    removeBatch
}