const express = require('express');

const users = require('./users');
const region = require('./region');
const jobProgress = require('./jobProgress');
const upload = require('./upload');
const customer = require('./customer');
const role = require('./role');
const services = require('./services');
const project = require('./project');
const finance = require('./finance');
const auth = require('./auth');
const exportJSON = require('./export');
const report = require('./report');
const targetProject = require('./targetProject');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/users', users);
router.use('/project', project);
router.use('/region', region);
router.use('/jobProgress', jobProgress);
router.use('/customer', customer);
router.use('/services', services);
router.use('/role', role);
router.use('/finance', finance);
router.use('/upload', upload);
router.use('/auth', auth);
router.use('/export', exportJSON);
router.use('/report', report);
router.use('/targetProject', targetProject);

module.exports = router;
