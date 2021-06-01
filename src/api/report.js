const express = require('express');
const reportControllers = require('../controllers/report');

const router = express.Router();

router.get('/summary', reportControllers.summary);
router.post('/reportSummary', reportControllers.reportSummary);

module.exports = router;
