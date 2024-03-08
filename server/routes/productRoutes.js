

import express from 'express'
import productController from '../controllers/product.js'

const router = express.Router();


router.route('/create-product').post(productController.createProduct)
router.route('/fetch-categories').get(productController.fetchCategories);
router.route('/fetch-products').post(productController.fetchProduct);
router.route('/fetch-product-details').post(productController.fetchProductDetails);

export default router;