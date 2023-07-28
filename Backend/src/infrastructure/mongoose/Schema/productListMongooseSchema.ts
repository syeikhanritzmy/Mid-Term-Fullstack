import mongoose, { Schema, Document } from 'mongoose';
import { ProductListModel as ProductList } from '../../../domain/models/ProductList.model';

const productListSchema = new Schema<ProductList>({
  linkProduct: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

export const ProductListModel = mongoose.model(
  'ProductList',
  productListSchema
);
