const express = require('express');
const roleController = require('../controllers/role');

const router = express.Router();

router.get('/find/:id', roleController.getData);
router.get('/list', roleController.getListData);
router.post('/create', roleController.create);
router.put('/update/:id', roleController.update);
router.delete('/delete/:id', roleController.delete);

module.exports = router;
