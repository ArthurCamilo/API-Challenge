const BankAccountFactory = require("../domain/bankAccountFactory");
const bankAccountTypes = require("../utils/bankAccountTypes");
const statusTypes = require("../utils/statusTypes");

const createStandardBankAccount = () => {
    return BankAccountFactory.createBankAccount('33365704680', 'Arthur Camilo', 'arthurpaivacamilo@gmail.com', 'RASCUNHO', '104', '0814', '0', '01002713', '9', bankAccountTypes.CONTA_CORRENTE);
};

test('Should not allow invalid account information', async = () => {
    let bankAccount = createStandardBankAccount();
    bankAccount.email = null;
    bankAccount.fullName = null;
    bankAccount.identification = null;
    bankAccount.status = null;
    expect(() => {
        bankAccount.validate();
    }).toThrow(Error);
});

test('Should not allow CONTA_FACIL to a bank that is not Banco do Brasil', async = () => {

    let bankAccount1 = createStandardBankAccount();
    bankAccount1.accountType = bankAccountTypes.CONTA_FACIL;
    expect(() => {
        bankAccount1.validate();
    }).toThrow(Error);

    let bancoDoBrasil = BankAccountFactory.createBankAccount('11068155990', 'Arthur Camilo', 'arthurpaivacamilo@gmail.com', statusTypes.RASCUNHO, '001', '0814', '0', '01002713', '9', bankAccountTypes.CONTA_FACIL);
    let validation2 = bancoDoBrasil.validate();
    expect(validation2).toBe(true);

});

test('Should not allow invalid account digit', async () => {

    let bankAccount1 = createStandardBankAccount();
    bankAccount1.accountDigit = '100';
    expect(() => {
        bankAccount1.validate();
    }).toThrow(Error);

    bankAccount1.accountDigit = 'abc';
    expect(() => {
        bankAccount1.validate();
    }).toThrow(Error);

    bankAccount1.accountDigit = '';
    expect(() => {
        bankAccount1.validate();
    }).toThrow(Error);
});

test('Should not allow invalid account code', async () => {

    let bankAccount1 = createStandardBankAccount();
    bankAccount1.accountCode = '';
    expect(() => {
        bankAccount1.validate();
    }).toThrow(Error);

    bankAccount1.accountCode = 'abc';
    expect(() => {
        bankAccount1.validate();
    }).toThrow(Error);

    bankAccount1.accountCode = '22222222222222222';
    expect(() => {
        bankAccount1.validate();
    }).toThrow(Error);

});

test('Should not allow invalid agency digit', async () => {
    
    let bankAccount = createStandardBankAccount();
    bankAccount.agencyDigit = '10';
    expect(() => {
        bankAccount.validate();
    }).toThrow(Error);

    bankAccount.agencyDigit = '-2';
    expect(() => {
        bankAccount.validate();
    }).toThrow(Error);

    bankAccount.agencyDigit = '';
    expect(bankAccount.validate()).toBe(true);

    bankAccount.agencyDigit = 'abc';
    expect(() => {
        bankAccount.validate();
    }).toThrow(Error);

});

test('Should not allow invalid agency code', async () => {

    let bankAccount = createStandardBankAccount();
    bankAccount.agencyCode = '450814';
    expect(() => {
        bankAccount.validate();
    }).toThrow(Error);

    bankAccount.agencyCode = '0814a';
    expect(() => {
        bankAccount.validate();
    }).toThrow(Error);


    bankAccount.agencyCode = '';
    expect(() => {
        bankAccount.validate();
    }).toThrow(Error);

});


test('Should not allow invalid bank code', async () => {

    let bankAccount = createStandardBankAccount();
    bankAccount.bankCode = '';
    expect(() => {
        bankAccount.validate();
    }).toThrow(Error);

    bankAccount.bankCode = '104a';
    expect(() => {
        bankAccount.validate();
    }).toThrow(Error);

    bankAccount.bankCode = '1046';
    expect(() => {
        bankAccount.validate();
    }).toThrow(Error);

});