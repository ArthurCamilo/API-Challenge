const BancoDoBrasilAccount = require('./bancoDoBrasilAccount');
const BankAccount = require('./bankAccount');

class BankAccountFactory {
    static createBankAccount(identification, fullName, email, status, bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType) {
        switch (bankCode) {
            case '001':
                return new BancoDoBrasilAccount(identification, fullName, email, status, bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType);
            default:
                return new BankAccount(identification, fullName, email, status, bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType);
        }
    }
}

module.exports = BankAccountFactory;