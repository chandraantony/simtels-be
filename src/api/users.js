const express = require('express');

const router = express.Router();
const data = require('../dummy/index');
const userController = require('../controllers/user');

router.get('/', (req, res) => {
  res.json(data);
});

router.get('/find/:id', userController.getData);
router.get('/list', userController.getListData);
router.post('/create', userController.create);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.delete);

module.exports = router;
