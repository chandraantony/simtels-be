const express = require('express');
const projectController = require('../controllers/project');

const router = express.Router();

router.post('/create', projectController.createProject);
router.put('/update', projectController.updateProject);
router.delete('/delete/:id', projectController.deleteById);
router.get('/find/:id', projectController.getById);
router.get('/list', projectController.getList);

module.exports = router;
