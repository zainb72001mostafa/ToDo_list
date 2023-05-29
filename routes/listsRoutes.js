const express = require('express');
const router = express.Router();
const listController = require('../controllers/listControl');

router.get('/lists',listController.getAllLists);

router.post('/lists/add',listController.addList);

router.delete('/lists/delete/:listId',listController.deleteList);

module.exports = router;