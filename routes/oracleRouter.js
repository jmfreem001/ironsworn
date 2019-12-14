const express = require('express');
const oracleController = require('../controllers/oracleController');

const router = express.Router();

router.route('/').get(oracleController.getAllOracles);

module.exports = router;
