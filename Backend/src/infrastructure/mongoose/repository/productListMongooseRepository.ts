import { ProductListModel as ProductList } from '../../../domain/models/ProductList.model';
import { ProductListRepository } from '../../../domain/repositories/ProductListRepository';
import { ProductListModel } from '../Schema/productListMongooseSchema';

export class ProductListMongooseRepository implements ProductListRepository {
  async findAll(): Promise<ProductList[]> {
    try {
      const products = await ProductListModel.find();
      return products;
    } catch (error) {
      throw new Error('failed to get products from database');
    }
  }
  async findById(id: string): Promise<ProductList | null> {
    try {
      const product = await ProductListModel.findById(id).lean();
      return product;
    } catch (error) {
      throw new Error('failed to get product from database');
    }
  }
  async save(productList: ProductList): Promise<void> {
    try {
      await ProductListModel.create(productList);
    } catch (error) {
      throw new Error('Failed to create product into database');
    }
  }

  async update(id: string, updatedProductList: ProductList): Promise<void> {
    try {
      await ProductListModel.findByIdAndUpdate(id, updatedProductList);
    } catch (error) {
      throw new Error('Failed to update product into database');
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await ProductListModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Failed to delete product from database');
    }
  }
}

