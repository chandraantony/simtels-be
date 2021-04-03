const express = require('express');
const servicesController = require('../controllers/services');

const router = express.Router();


router.get('/find/:id', servicesController.getData);
router.get('/list', servicesController.getListData);
router.post('/create', servicesController.create);
router.put('/update/:id', servicesController.update);
router.delete('/delete/:id', servicesController.delete);


module.exports = router;
