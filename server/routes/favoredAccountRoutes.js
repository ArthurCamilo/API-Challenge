const favoredAccountController = require('../controllers/favoredAccountController');
const express = require('express');
const router = express.Router();

router.get('/api/favoredAccounts', favoredAccountController.getAll);
router.post('/api/favoredAccounts', favoredAccountController.create);
router.put('/api/favoredAccounts', favoredAccountController.update);

module.exports = router;
