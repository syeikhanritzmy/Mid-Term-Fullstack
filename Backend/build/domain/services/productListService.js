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
exports.ProductListService = void 0;
class ProductListService {
    constructor(productListRepository) {
        this.productListRepository = productListRepository;
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productListRepository.findById(id);
        });
    }
    getAllProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productListRepository.findAll();
        });
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productListRepository.save(product);
        });
    }
    updateProduct(id, updateProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productListRepository.update(id, updateProduct);
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productListRepository.delete(id);
        });
    }
}
exports.ProductListService = ProductListService;
