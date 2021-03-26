const express = require('express');
const regionControllers = require('../controllers/region');

const router = express.Router();


router.get('/find/:id', regionControllers.getData);
router.get('/list', regionControllers.getListData);
router.post('/create', regionControllers.create);
router.put('/update/:id', regionControllers.update);
router.delete('/delete/:id', regionControllers.delete);


module.exports = router;
