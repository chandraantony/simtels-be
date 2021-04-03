const express = require('express');

const users = require('./users');
const region = require('./region');
const jobProgress = require('./jobProgress');
const upload = require('./upload');
const customer = require('./customer');
const role = require('./role');
const services = require('./services');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/users', users);
router.use('/region', region);
router.use('/jobProgress', jobProgress);
router.use('/customer', customer);
router.use('/services', services);
router.use('/role', role);
router.use('/upload', upload);

module.exports = router;
