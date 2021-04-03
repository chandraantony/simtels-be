const express = require('express');
const jobProgressController = require('../controllers/jobProgress');

const router = express.Router();

router.get('/find/:id', jobProgressController.getData);
router.get('/list', jobProgressController.getListData);
router.post('/create', jobProgressController.create);
router.put('/update/:id', jobProgressController.update);
router.delete('/delete/:id', jobProgressController.delete);

module.exports = router;
