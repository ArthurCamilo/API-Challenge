const bankAccountTypes = require("../utils/bankAccountTypes");
const BankAccount =  require("./bankAccount");

module.exports = class BancoDoBrasilAccount extends BankAccount {

    constructor (bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType) {
        super(bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType);
    }

    validateAccountType () {
        if (!this.accountType) {
            return false;
        } else {
            return [bankAccountTypes.CONTA_FACIL, bankAccountTypes.CONTA_CORRENTE, bankAccountTypes.CONTA_POUPANCA].includes(this.accountType);
        }
    };

};