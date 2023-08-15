import { Request, Response } from 'express';
import { ProductListRepository } from '../domain/repositories/ProductListRepository';
import { ProductListService } from '../domain/services/productListService';
import { ProductListModel } from '../domain/models/ProductList.model';

export class ProductListController {
  private productListController: ProductListService;

  constructor(productListController: ProductListService) {
    this.productListController = productListController;
  }

  async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const { _id } = req.params;
      const productById = await this.productListController.getProductById(_id);
      if (productById) {
        res.status(200).json(productById);
      } else {
        res.status(404).json({ message: 'product by id not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to get product by id ' });
    }
  }
  async getAllProduct(req: Request, res: Response): Promise<void> {
    try {
      const Products = await this.productListController.getAllProduct();
      res.status(200).json(Products);
    } catch (error) {
      res.status(500).json({ message: 'failed to get all product' });
    }
  }

  async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const { linkProduct, price, title, videoId, description, imgthumbnail } =
        req.body;
      const newProduct: ProductListModel = {
        videoId,
        linkProduct,
        price,
        imgthumbnail,
        title,
        description,
      };
      await this.productListController.createProduct(newProduct);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create product' });
    }
  }

  async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const { _id } = req.params;
      const { linkProduct, price, title, videoId, description, imgthumbnail } =
        req.body;
      const updatedProduct: ProductListModel = {
        _id: _id,
        videoId,
        linkProduct,
        price,
        title,
        imgthumbnail,
        description,
      };

      await this.productListController.updateProduct(id, updatedProduct);
      res.status(200).json({ message: 'Video thumbnail updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to update video thumbnail' });
    }
  }

  async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await this.productListController.deleteProduct(id);
      res.status(200).json({ message: 'Product  deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete Product' });
    }
  }
}
