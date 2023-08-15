"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListController = void 0;
class ProductListController {
    constructor(productListController) {
        this.productListController = productListController;
    }
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id } = req.params;
                const productById = yield this.productListController.getProductById(_id);
                if (productById) {
                    res.status(200).json(productById);
                }
                else {
                    res.status(404).json({ message: 'product by id not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to get product by id ' });
            }
        });
    }
    getAllProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Products = yield this.productListController.getAllProduct();
                res.status(200).json(Products);
            }
            catch (error) {
                res.status(500).json({ message: 'failed to get all product' });
            }
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { linkProduct, price, title, videoId, description, imgthumbnail } = req.body;
                const newProduct = {
                    videoId,
                    linkProduct,
                    price,
                    imgthumbnail,
                    title,
                    description,
                };
                yield this.productListController.createProduct(newProduct);
                res.status(201).json(newProduct);
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to create product' });
            }
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id } = req.params;
                const { linkProduct, price, title, videoId, description, imgthumbnail } = req.body;
                const updatedProduct = {
                    _id: _id,
                    videoId,
                    linkProduct,
                    price,
                    title,
                    imgthumbnail,
                    description,
                };
                yield this.productListController.updateProduct(id, updatedProduct);
                res.status(200).json({ message: 'Video thumbnail updated successfully' });
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to update video thumbnail' });
            }
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield this.productListController.deleteProduct(id);
                res.status(200).json({ message: 'Product  deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to delete Product' });
            }
        });
    }
}
exports.ProductListController = ProductListController;
