import {
  addProduct,
  getAllProducts,
  getProductById,
  getProductsByPrice,
} from './products.model';
import { Product } from './products.model';

export default {
  Query: {
    products: () => {
      const allProducts = getAllProducts();
      console.log('Products resolver called, returning:', allProducts);
      return allProducts;
    },
    productsByPrice: (_, { min, max }: { min: number; max: number }) =>
      getProductsByPrice(min, max),
    product: (_, { id }: { id: string }) => getProductById(id),
  },
  Mutation: {
    newProduct: (
      _,
      {
        id,
        description,
        price,
      }: { id: string; description: string; price: number }
    ) => addProduct(id, description, price),
  },
};
