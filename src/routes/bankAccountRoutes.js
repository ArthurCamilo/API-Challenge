const bankAccountsController = require('../controllers/bankAccountsController');
const express = require('express');
const router = express.Router();

router.get('/api/bankAccounts', bankAccountsController.getAll);
router.post('/api/bankAccounts', bankAccountsController.create);
router.put('/api/bankAccounts', bankAccountsController.update);
router.delete('/api/bankAccount', bankAccountsController.remove);
router.delete('/api/bankAccounts', bankAccountsController.removeBatch);

module.exports = router;
