const bankAccountTypes = require("../utils/bankAccountTypes");
const BankAccount =  require("./bankAccount");

class BancoDoBrasilAccount extends BankAccount {

    constructor (identification, fullName, email, status, bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType) {
        super(identification, fullName, email, status, bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType);
        this.availableAccounts.push(bankAccountTypes.CONTA_FACIL);
    }
    
};


module.exports = BancoDoBrasilAccount;