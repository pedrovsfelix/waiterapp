import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router } from "express";
import multer from 'multer';

import { listCategories } from "./app/useCases/categories/listCategory.js";
import { createCategories } from "./app/useCases/categories/createCategory.js";
import { deleteCategory } from './app/useCases/categories/deleteCategory.js';
import { listProducts } from "./app/useCases/products/listProducts.js";
import { createProduct } from './app/useCases/products/createProduct.js';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory.js';
import { listOrders } from './app/useCases/orders/listOrders.js';
import { createOrder } from './app/useCases/orders/createOrder.js';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus.js';
import { cancelOrder } from './app/useCases/orders/cancelOrder.js';
import { changeProduct } from './app/useCases/products/changeProduct.js';
import { signinValidation, signupValidation, validate } from './app/middleware/validation.js';
import { signup } from './app/useCases/auth/signup.js';
import { signin } from './app/useCases/auth/signin.js';
import { isAuthenticated } from './app/middleware/auth.js';
import { me } from './app/useCases/auth/me.js';
import { deleteProduct } from './app/useCases/products/deleteProduct.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  }),
});
// List categories
router.get('/categories', listCategories)

// Create category
router.post('/categories', createCategories)

// Delete category
router.delete('/categories/:categoryId', deleteCategory)

// List products
router.get('/products', listProducts)

// Create product
router.post('/products', upload.single('image') ,createProduct)

// Delete product
router.delete('/products/:productId', deleteProduct)

// Change product
router.patch('/products/:productId', upload.single('image'), changeProduct)

// Get product by category
router.get('/categories/:categoryId/products', listProductsByCategory)

// List orders
router.get('/orders', listOrders)

// Create order
router.post('/orders', createOrder)

// Change order status
router.patch('/orders/:orderId', changeOrderStatus)

// Delete/Cancel order
router.delete('/orders/:orderId', cancelOrder)

// Signup
router.post('/auth/signup', signupValidation, validate, signup);

// Signin
router.post('/auth/signin', signinValidation, validate, signin);

// Me
router.get('/users/me', isAuthenticated, me);
