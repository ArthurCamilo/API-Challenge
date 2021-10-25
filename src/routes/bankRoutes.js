const banksController = require('../controllers/banksController');
const express = require('express');
const router = express.Router();

router.get('/api/banks', banksController.getAll);

module.exports = router;
