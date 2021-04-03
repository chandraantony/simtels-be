const express = require('express');
const customerController = require('../controllers/customer');

const router = express.Router();


router.get('/find/:id', customerController.getData);
router.get('/list', customerController.getListData);
router.post('/create', customerController.create);
router.put('/update/:id', customerController.update);
router.delete('/delete/:id', customerController.delete);


module.exports = router;
