import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router } from "express";
import multer from 'multer';

import { listCategories } from "./app/useCases/categories/listCategory.js";
import { createCategories } from "./app/useCases/categories/createCategory.js";
import { listProducts } from "./app/useCases/products/listProducts.js";
import { createProduct } from './app/useCases/products/createProduct.js';

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

// List products
router.get('/products', listProducts)

// Create product
router.post('/products', upload.single('image') ,createProduct)

// Get product by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK')
})

// List orders
router.get('/orders', (req, res) => {
  res.send('OK')
})

// Create order
router.post('/orders', (req, res) => {
  res.send('OK')
})

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK')
})

// Delete/Cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK')
})
