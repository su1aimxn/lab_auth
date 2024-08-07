const express = require('express');

const authenticateToken = require("../middlewares/auth");
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct }
= require('../controllers/productController');

const router = express.Router();

router.get('/', authenticateToken, getProducts);

router.get('/:id', authenticateToken, getProduct);

router.post('/', authenticateToken, createProduct);

router.put('/:id', authenticateToken, updateProduct);

router.delete('/:id', authenticateToken,  deleteProduct);



module.exports = router;