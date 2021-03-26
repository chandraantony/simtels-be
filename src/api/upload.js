const express = require('express');
const uploadController = require('../controllers/upload');
const upload = require('../utils/function');

const router = express.Router();

router.post('/', upload.file, uploadController.upload);

module.exports = router;
