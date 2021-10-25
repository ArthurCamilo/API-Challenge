const BankAccount = require("../infra/models/bankAccount");
const BankAccountFactory = require("../domain/bankAccountFactory");
const bankAccountTypes = require("../utils/bankAccountTypes");
const axios = require('axios').default;
const statusTypes = require("../utils/statusTypes");
require('dotenv/config');

const createStandardBankAccount = () => {
    return BankAccountFactory.createBankAccount('33365704680', 'Arthur Camilo', 'arthurpaivacamilo@gmail.com', 'RASCUNHO', '104', '0814', '0', '01002713', '9', bankAccountTypes.CONTA_CORRENTE);
};

test('Should insert one entry', async () => {
    await BankAccount.destroy({ where: {} });

    const bankAccount = createStandardBankAccount();

    await axios({
        url: `http://localhost:${process.env.NODE_PORT}/api/bankAccounts`,
        method: 'post',
        data: { ...bankAccount}
    });

    const response = await axios({
        url: `http://localhost:3000/api/bankAccounts`,
        method: 'get'
    });

    expect(response.data).toHaveLength(1);
});

test('Should not be able to edit other fields except email when status is VALIDADO', async () => {
    
    await BankAccount.destroy({ where: {} });
    let bankAccount = createStandardBankAccount();
    bankAccount.status = statusTypes.VALIDADO;
    await axios({
        url: `http://localhost:${process.env.NODE_PORT}/api/bankAccounts`,
        method: 'post',
        data: { ...bankAccount}
    });

    bankAccount.bankCode = '004';
    await axios({
        url: `http://localhost:${process.env.NODE_PORT}/api/bankAccounts`,
        method: 'put',
        data: { ...bankAccount}
    });

    const response = await axios({
        url: `http://localhost:3000/api/bankAccounts`,
        method: 'get'
    });

    expect(response.data[0].bankCode).toBe('104');
});

test('Should delete one entry', async () => {
    await BankAccount.destroy({ where: {} });

    const bankAccount = createStandardBankAccount();

    await axios({
        url: `http://localhost:${process.env.NODE_PORT}/api/bankAccounts`,
        method: 'post',
        data: { ...bankAccount}
    });

    await axios({
        url: `http://localhost:${process.env.NODE_PORT}/api/bankAccount`,
        method: 'delete',
        data: { ...bankAccount}
    });

    const response = await axios({
        url: `http://localhost:3000/api/bankAccounts`,
        method: 'get'
    });

    expect(response.data).toHaveLength(0);
});

test('Should delete multiple entries', async () => {
    await BankAccount.destroy({ where: {} });

    let bankAccount1 = createStandardBankAccount();
    await axios({
        url: `http://localhost:${process.env.NODE_PORT}/api/bankAccounts`,
        method: 'post',
        data: { ...bankAccount1}
    });

    let bankAccount2 = createStandardBankAccount();
    bankAccount2.bankCode = '001';
    await axios({
        url: `http://localhost:${process.env.NODE_PORT}/api/bankAccounts`,
        method: 'post',
        data: { ...bankAccount2}
    });

    await axios({
        url: `http://localhost:${process.env.NODE_PORT}/api/bankAccounts`,
        method: 'delete',
        data: [{ ...bankAccount1}, {...bankAccount2}]
    });

    const response = await axios({
        url: `http://localhost:3000/api/bankAccounts`,
        method: 'get'
    });

    expect(response.data).toHaveLength(0);
});


test('Should get one out of the the three values inserted, respecting take and skip params', async () => {
    await BankAccount.destroy({ where: {} });

    let bankAccount1 = createStandardBankAccount();

    await axios({
        url: `http://localhost:${process.env.NODE_PORT}/api/bankAccounts`,
        method: 'post',
        data: { ...bankAccount1}
    });

    let bankAccount2 = createStandardBankAccount();
    bankAccount2.bankCode = '001';
    await axios({
        url: `http://localhost:${process.env.NODE_PORT}/api/bankAccounts`,
        method: 'post',
        data: { ...bankAccount2}
    });

    let bankAccount3 = createStandardBankAccount();
    bankAccount3.bankCode = '002';
    await axios({
        url: `http://localhost:${process.env.NODE_PORT}/api/bankAccounts`,
        method: 'post',
        data: { ...bankAccount3}
    });

    const response = await axios({
        url: `http://localhost:3000/api/bankAccounts?skip=2&take1`,
        method: 'get'
    });

    expect(response.data[0].bankCode).toBe('002');
});