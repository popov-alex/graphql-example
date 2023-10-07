import { getAllProducts, getProductsByPrice } from './products.model';

export default {
  Query: {
    products: () => {
      const allProducts = getAllProducts();
      console.log('Products resolver called, returning:', allProducts);
      return allProducts;
    },
    productsByPrice: (_, { min, max }: { min: number; max: number }) =>
      getProductsByPrice(min, max),
  },
};
