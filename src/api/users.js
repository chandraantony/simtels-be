const express = require('express');

const router = express.Router();
const data = require('../dummy/index');

router.get('/', (req, res) => {
  res.json(data);
});

module.exports = router;
