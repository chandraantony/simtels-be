const express = require('express');
const financeController = require('../controllers/finance');

const router = express.Router();

router.get('/find/:id', financeController.getData);
router.get('/list', financeController.getListData);
router.post('/create', financeController.create);
router.put('/update/:id', financeController.update);
router.delete('/delete/:id', financeController.delete);

module.exports = router;
