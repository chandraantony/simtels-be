const express = require('express');
const exportController = require('../controllers/export')

const router = express.Router();

router.post('/file', exportController.exportFile);

module.exports = router;
