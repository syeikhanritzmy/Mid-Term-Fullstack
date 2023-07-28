import { ProductListModel } from '../models/ProductList.model';
import { ProductListRepository } from '../repositories/ProductListRepository';

export class ProductListService {
  private productListRepository: ProductListRepository;

  constructor(productListRepository: ProductListRepository) {
    this.productListRepository = productListRepository;
  }

  async getProductById(id: string): Promise<ProductListModel | null> {
    return await this.productListRepository.findById(id);
  }

  async getAllProduct(): Promise<ProductListModel[]> {
    return await this.productListRepository.findAll();
  }
  async createProduct(product: ProductListModel) {
    return await this.productListRepository.save(product);
  }

  async updateProduct(
    id: string,
    updateProduct: ProductListModel
  ): Promise<void> {
    return await this.productListRepository.update(id, updateProduct);
  }

  async deleteProduct(id: string): Promise<void> {
    return await this.productListRepository.delete(id);
  }
}
