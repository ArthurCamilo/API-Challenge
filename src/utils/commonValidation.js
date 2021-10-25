const validator = require("email-validator");
const { cpf } = require("cpf-cnpj-validator");

const validateEmail = (email) => {
    return validator.validate(email); 
};

const validateCPF = (identification) => {
    return cpf.isValid(identification);
};

const isNullOrEmpty = (str) => {
    return str == '' || !str || str.match(/^ *$/) !== null;
};

module.exports = {
    validateEmail,
    validateCPF,
    isNullOrEmpty
}