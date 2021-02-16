const express = require('express');
const router  = express.Router(); 
const adminController = require('../controllers/admin');

router.post('/', adminController.postProduct);

router.get('/', adminController.getAllProducts);
router.get('/:id', adminController.getSingleProduct);

router.get('/delete/:id', adminController.deleteProduct);

module.exports = router;
