const bankAccountTypes =  require('../utils/bankAccountTypes');

class BankAccount {

    constructor (bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType) {
        this.bankCode = bankCode;
        this.agencyCode = agencyCode;
        this.agencyDigit = agencyDigit;
        this.accountCode = accountCode;
        this.accountDigit = accountDigit;
        this.accountType = accountType;
        this.availableAccounts = [bankAccountTypes.CONTA_CORRENTE, bankAccountTypes.CONTA_POUPANCA];
    };

    validate () {
        try {
            const isBankCodeValid = this.validateBankCode();
            const isAgencyCodeValid = this.validateAgencyCode();
            const isAgencyDigitValid = this.validateAgencyDigit();
            const isAccountCodeValid = this.validateAccountCode();
            const isAccountDigitValid = this.validateAccountDigit();
            const isAccountTypeValid = this.validateAccountType();
            return isBankCodeValid && isAgencyCodeValid && isAgencyDigitValid && isAccountCodeValid && isAccountDigitValid && isAccountTypeValid;
        } catch (e) {
            throw e;
        }
    };

    validateBankCode () {
        if (!this.bankCode) {
            throw new Error ('Destiny bank was not filled');
        } else {
            const reExp = /^(?:^0*)[1-9][0-9]{0,2}$/;
            const bankCodeMatch = this.bankCode.match(reExp);
            if (!bankCodeMatch)
                throw new Error('Bank code must have a maximum of 3 digits from 0 to 9');
            else return true;
        }
    };

    validateAgencyCode () {
        if (!this.agencyCode) {
            throw new Error ('Agency code was not filled');
        } else {
            const reExp = /^(?:^0*)[1-9][0-9]{0,3}$/;
            const agencyCodeMatch = this.agencyCode.match(reExp);
            if (!agencyCodeMatch)
                throw new Error('Agency code must have a maximum of 4 digits from 0 to 9');
            else return true;
        }
    };

    validateAgencyDigit () {
        if (!this.agencyDigit) {
            return true;
        } else {
            const reExp = /^[xX0-9]{0,1}$/;
            const agencyDigitMatch = this.agencyDigit.match(reExp);
            if (!agencyDigitMatch)
                throw new Error('Agency digit must be 1 digit from 0 to 9');
            else return true;
        }
    };

    validateAccountCode () {
        if (!this.accountCode) {
            throw new Error('Account code was not filled');
        } else {
            const reExp = /^(?:^0*)[1-9][0-9]{0,10}$/;
            const accountCodeMatch = this.accountCode.match(reExp);
            if (!accountCodeMatch) 
                throw new Error('Account code must have a maximum of 11 digits from 0 to 9');
            else return true;
        }
    };

    validateAccountDigit () {
        if (!this.accountDigit) {
            throw new Error('Account digit was not filled')
        } else {
            const reExp = /^[0-9]{0,1}$/
            const accountDigitMatch = this.accountDigit.match(reExp);
            if (!accountDigitMatch) 
                throw new Error('Account digit must be one digit from 0 to 9');
            else return true;
        }
    };

    validateAccountType () {
        if (!this.accountType) {
            throw new Error('Account type was not selected');
        } else {
            const availableAccountType = this.availableAccounts.includes(this.accountType);
            if (!availableAccountType)
                throw new Error('Account type %s is not available for this bank option', this.accountType);
            else return true;
        }
    };

};

module.exports = BankAccount;