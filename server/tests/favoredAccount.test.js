const BankAccountFactory = require("../domain/bankAccountFactory");
const bankAccountTypes = require("../utils/bankAccountTypes");


test('Should not allow CONTA_FACIL to banks that are not BB', async function () {

    const bankAccount1 = BankAccountFactory.createBankAccount('104', '0814', '0', '01002713', '9', bankAccountTypes.CONTA_FACIL);
    let validation1 = bankAccount1.validate();
    expect(validation1).toBe(false);

    const bankAccount2 = BankAccountFactory.createBankAccount('001', '0814', '0', '01002713', '9', bankAccountTypes.CONTA_FACIL);
    let validation2 = bankAccount2.validate();
    expect(validation2).toBe(true);

});

test('Should not allow invalid account digit', async function () {

    const bankAccount1 = BankAccountFactory.createBankAccount('104', '0814', '0', '01002713', '100', bankAccountTypes.CONTA_CORRENTE);
    let validation1 = bankAccount1.validate();
    expect(validation1).toBe(false);

    const bankAccount2 = BankAccountFactory.createBankAccount('104', '0814', '0', '01002713', 'abc', bankAccountTypes.CONTA_CORRENTE);
    let validation2 = bankAccount2.validate();
    expect(validation2).toBe(false);

    const bankAccount3 = BankAccountFactory.createBankAccount('104', '0814', '0', '01002713', '', bankAccountTypes.CONTA_CORRENTE);
    let validation3 = bankAccount3.validate();
    expect(validation3).toBe(false);

});