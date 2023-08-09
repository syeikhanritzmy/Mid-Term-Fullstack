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
exports.ProductListMongooseRepository = void 0;
const productListMongooseSchema_1 = require("../Schema/productListMongooseSchema");
class ProductListMongooseRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productListMongooseSchema_1.ProductListModel.find();
                return products;
            }
            catch (error) {
                throw new Error('failed to get products from database');
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield productListMongooseSchema_1.ProductListModel.findById(id).lean();
                return product;
            }
            catch (error) {
                throw new Error('failed to get product from database');
            }
        });
    }
    save(productList) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield productListMongooseSchema_1.ProductListModel.create(productList);
            }
            catch (error) {
                throw new Error('Failed to create product into database');
            }
        });
    }
    update(id, updatedProductList) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield productListMongooseSchema_1.ProductListModel.findByIdAndUpdate(id, updatedProductList);
            }
            catch (error) {
                throw new Error('Failed to update product into database');
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield productListMongooseSchema_1.ProductListModel.findByIdAndDelete(id);
            }
            catch (error) {
                throw new Error('Failed to delete product from database');
            }
        });
    }
}
exports.ProductListMongooseRepository = ProductListMongooseRepository;
