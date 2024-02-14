const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

router.get('/',controller.main);
router.get('/visitors',controller.getVisitors);
router.get('/visitors/:id',controller.findVisitor);

router.post('/visitors',controller.registVisitor);
router.delete('/visitors',controller.deleteVisitor);
router.patch('/visitors',controller.editVisitor);


module.exports=router;