const bankAccountTypes =  require('../utils/bankAccountTypes');
const statusTypes = require('../utils/statusTypes');
const { isNullOrEmpty, validateCPF, validateEmail } = require('../utils/commonValidation');
require('dotenv/config');

class BankAccount {

    constructor (identification, fullName, email, status, bankCode, agencyCode, agencyDigit, accountCode, accountDigit, accountType) {
        this.identification = identification;
        this.fullName = fullName;
        this.email = email;
        this.status = status;
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
            this.validateBasicInfo();
            this.validateBankCode();
            this.validateAgencyCode();
            this.validateAgencyDigit();
            this.validateAccountCode();
            this.validateAccountDigit();
            this.validateAccountType();
            return true;
        } catch (e) {
            throw e;
        }
    };

    validateBasicInfo () {
        if (!validateCPF(this.identification)) {
            throw new Error('Invalid indentification code (CPF)');
        }
        if (!validateEmail(this.email)) {
            throw new Error('Invalid email format, check for typing errors');
        }
        if (isNullOrEmpty(this.fullName)) {
            throw new Error('Full name was not filled');
        }
        this.validateStatus();
        return true;
    };
    
    validateStatus () {
        if (isNullOrEmpty(this.status)) {
            throw new Error('Account status was not filled');
        } else {
            const containsStatus = [statusTypes.RASCUNHO, statusTypes.VALIDADO].includes(this.status);  
            if (!containsStatus) {
                throw new Error(`Status ${this.status} is not a valid status`);
            } else return true;
        }
    }

    validateBankCode () {
        if (isNullOrEmpty(this.bankCode)) {
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
        if (isNullOrEmpty(this.agencyCode)) {
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
        if (isNullOrEmpty(this.agencyDigit)) {
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
        if (isNullOrEmpty(this.accountCode)) {
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
        if (isNullOrEmpty(this.accountDigit)) {
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
        if (isNullOrEmpty(this.accountType)) {
            throw new Error('Account type was not selected');
        } else {
            const availableAccountType = this.availableAccounts.includes(this.accountType);
            if (!availableAccountType)
                throw new Error(`Account type ${this.accountType} is not available for this bank option`);
            else return true;
        }
    };

};

module.exports = BankAccount;