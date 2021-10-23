const BankAccountFactory = require("../domain/bankAccountFactory");
const bankAccountTypes = require("../utils/bankAccountTypes");

test('Should not allow CONTA_FACIL to a bank that is not Banco do Brasil', async = () => {

    const bankAccount1 = BankAccountFactory.createBankAccount('104', '0814', '0', '01002713', '9', bankAccountTypes.CONTA_FACIL);
    expect(() => {
        bankAccount1.validate();
    }).toThrow(Error);

    const bankAccount2 = BankAccountFactory.createBankAccount('001', '0814', '0', '01002713', '9', bankAccountTypes.CONTA_FACIL);
    let validation2 = bankAccount2.validate();
    expect(validation2).toBe(true);

});

test('Should not allow invalid account digit', async () => {

    const bankAccount1 = BankAccountFactory.createBankAccount('104', '0814', '0', '01002713', '100', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount1.validate();
    }).toThrow(Error);

    const bankAccount2 = BankAccountFactory.createBankAccount('104', '0814', '0', '01002713', 'abc', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount2.validate();
    }).toThrow(Error);

    const bankAccount3 = BankAccountFactory.createBankAccount('104', '0814', '0', '01002713', '', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount3.validate();
    }).toThrow(Error);
});

test('Should not allow invalid account code', async () => {

    const bankAccount1 = BankAccountFactory.createBankAccount('104', '0814', '0', '', '2', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount1.validate();
    }).toThrow(Error);

    const bankAccount2 = BankAccountFactory.createBankAccount('104', '0814', '0', 'abc', '2', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount2.validate();
    }).toThrow(Error);


    const bankAccount3 = BankAccountFactory.createBankAccount('104', '0814', '0', '22222222222222222', '2', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount3.validate();
    }).toThrow(Error);

});

test('Should not allow invalid agency digit', async () => {

    const bankAccount1 = BankAccountFactory.createBankAccount('104', '0814', '10', '01002713', '3', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount1.validate();
    }).toThrow(Error);

    const bankAccount2 = BankAccountFactory.createBankAccount('104', '0814', '-2', '01002713', '2', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount2.validate();
    }).toThrow(Error);

    const bankAccount3 = BankAccountFactory.createBankAccount('104', '0814', '', '01002713', '1', bankAccountTypes.CONTA_CORRENTE);
    expect(bankAccount3.validate()).toBe(true);

    const bankAccount4 = BankAccountFactory.createBankAccount('104', '0814', 'abc', '01002713', '2', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount4.validate();
    }).toThrow(Error);

});

test('Should not allow invalid agency code', async () => {

    const bankAccount1 = BankAccountFactory.createBankAccount('104', '450814', '0', '01002713', '2', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount1.validate();
    }).toThrow(Error);

    const bankAccount2 = BankAccountFactory.createBankAccount('104', '0814a', '0', '01002713', '2', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount2.validate();
    }).toThrow(Error);


    const bankAccount3 = BankAccountFactory.createBankAccount('104', '', '0', '01002713', '2', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount3.validate();
    }).toThrow(Error);

});


test('Should not allow invalid bank code', async () => {

    const bankAccount1 = BankAccountFactory.createBankAccount('', '45814', '0', '01002713', '2', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount1.validate();
    }).toThrow(Error);

    const bankAccount2 = BankAccountFactory.createBankAccount('104a', '0814', '0', '01002713', '2', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount2.validate();
    }).toThrow(Error);


    const bankAccount3 = BankAccountFactory.createBankAccount('1046', '0456', '0', '01002713', '2', bankAccountTypes.CONTA_CORRENTE);
    expect(() => {
        bankAccount3.validate();
    }).toThrow(Error);

});