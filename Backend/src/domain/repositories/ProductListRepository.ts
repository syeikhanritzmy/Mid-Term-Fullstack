import { ProductListModel } from '../models/ProductList.model';

export interface ProductListRepository {
  findById(id: string): Promise<ProductListModel | null>;
  findAll(): Promise<ProductListModel[]>;
  save(productList: ProductListModel): Promise<void>;
  update(id: string, updatedProductList: ProductListModel): Promise<void>;
  delete(id: string): Promise<void>;
}
