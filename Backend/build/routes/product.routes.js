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
exports.default = productRouter;
