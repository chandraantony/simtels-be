const express = require('express');

const users = require('./users')
const region = require('./region')

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/users', users)
router.use('/region', region)

module.exports = router;
