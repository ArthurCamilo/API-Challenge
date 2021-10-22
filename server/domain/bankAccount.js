const bankAccountTypes =  require('../utils/bankAccountTypes');

module.exports = class BankAccount {

    constructor (bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType) {
        this.bankCode = bankCode;
        this.agencyCode = agencyCode;
        this.agencyDigit = agencyDigit;
        this.accountCode = accountCode;
        this.accountDigit = accountDigit;
        this.accountType = accountType;
    };

    validate () {
        try {
            let isAgencyCodeValid = this.validateAgencyCode();
            let isAgencyDigitValid = this.validateAgencyDigit();
            let isAccountCodeValid = this.validateAccountCode();
            let isAccountDigitValid = this.validateAccountDigit();
            let isAccountTypeValid = this.validateAccountType();
            return isAgencyCodeValid && isAgencyDigitValid && isAccountCodeValid && isAccountDigitValid && isAccountTypeValid;
        } catch {
            return false;
        }
    };

    validateAgencyCode () {
        if (!this.agencyCode) {
            return false;
        } else {
            const reExp = /^(?:^0*)[1-9][0-9]{0,3}$/;
            return !!this.agencyCode.match(reExp);
        }
    };

    validateAgencyDigit () {
        if (!this.agencyDigit) {
            return true;
        } else {
            const reExp = /^[xX0-9]{0,1}$/;
            return !!this.agencyDigit.match(reExp);
        }
    };

    validateAccountCode () {
        if (!this.accountCode) {
            return false;
        } else {
            const reExp = /^(?:^0*)[1-9][0-9]{0,10}$/;
            return !!this.accountCode.match(reExp);
        }
    };

    validateAccountDigit () {
        if (!this.accountDigit) {
            return false;
        } else {
            const reExp = /^[0-9]{0,1}$/
            return !!this.accountDigit.match(reExp);
        }
    };

    validateAccountType () {
        if (!this.accountType) {
            return false;
        } else {
            return [bankAccountTypes.CONTA_CORRENTE, bankAccountTypes.CONTA_POUPANCA].includes(this.accountType);
        }
    };
};