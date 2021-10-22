const BancoDoBrasilAccount = require('./bancoDoBrasilAccount');
const BankAccount = require('./bankAccount');

module.exports = class BankAccountFactory {

    static createBankAccount(bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType) {
        switch (bankCode) {
            case '001':
                return new BancoDoBrasilAccount(bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType);
            default:
                return new BankAccount(bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType);
        }
    }

}