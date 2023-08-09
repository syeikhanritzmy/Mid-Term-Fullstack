import express, { Request, Response } from 'express';
import { ProductListController } from '../controllers/productListControllers';
import { ProductListService } from '../domain/services/productListService';
import { ProductListMongooseRepository } from '../infrastructure/mongoose/repository/productListMongooseRepository';

const productRouter = express.Router();

const productRepository = new ProductListMongooseRepository();
const productService = new ProductListService(productRepository);

const productController = new ProductListController(productService);

productRouter.get('/', productController.getAllProduct);
productRouter.get('/:productId', productController.getProductById);
productRouter.post('/', productController.createProduct);
productRouter.put('/:videoId/:productId', productController.updateProduct);
productRouter.delete('/:videoId/:productId', productController.deleteProduct);

export default productRouter;
