import express, { Request, Response } from 'express';
import { ProductListController } from '../controllers/productListControllers';
import { ProductListService } from '../domain/services/productListService';
import { ProductListMongooseRepository } from '../infrastructure/mongoose/repository/productListMongooseRepository';

const productRouter = express.Router();

const productRepository = new ProductListMongooseRepository();
const productService = new ProductListService(productRepository);

const productController = new ProductListController(productService);

productRouter.get('/', (req, res) => {
  productController.getAllProduct(req, res);
});
productRouter.get('/:_id', (req, res) => {
  productController.getProductById(req, res);
});
productRouter.post('/', (req, res) => {
  productController.createProduct(req, res);
});
productRouter.put('/:videoId/:_id', (req, res) => {
  productController.updateProduct(req, res);
});
productRouter.delete('/:videoId/:_id', (req, res) => {
  productController.deleteProduct(req, res);
});

export default productRouter;
