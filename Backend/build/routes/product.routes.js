"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productListControllers_1 = require("../controllers/productListControllers");
const productListService_1 = require("../domain/services/productListService");
const productListMongooseRepository_1 = require("../infrastructure/mongoose/repository/productListMongooseRepository");
const productRouter = express_1.default.Router();
const productRepository = new productListMongooseRepository_1.ProductListMongooseRepository();
const productService = new productListService_1.ProductListService(productRepository);
const productController = new productListControllers_1.ProductListController(productService);
productRouter.get('/', productController.getAllProduct);
productRouter.get('/:productId', productController.getProductById);
productRouter.post('/', productController.createProduct);
productRouter.put('/:videoId/:productId', productController.updateProduct);
productRouter.delete('/:videoId/:productId', productController.deleteProduct);
exports.default = productRouter;
