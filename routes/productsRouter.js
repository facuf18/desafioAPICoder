const { Router } = require('express');
const { getProducts, getProduct, addProduct, updateProduct, deleteProduct } = require('../controllers/productsController.js'); 


const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:id', getProduct);
productsRouter.post('/', addProduct);
productsRouter.put('/:id', updateProduct);
productsRouter.delete('/:id', deleteProduct);

module.exports = productsRouter;