const express = require('express');
const targetController = require('../controllers/targetProject');

const router = express.Router();

router.get('/find/:id', targetController.getData);
router.get('/list', targetController.getListData);
router.post('/create', targetController.create);
router.put('/update/:id', targetController.update);
router.get('/findByDate', targetController.findByDate);
router.delete('/delete/:id', targetController.delete);

module.exports = router;
