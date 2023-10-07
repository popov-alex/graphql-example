export const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 15.12,
  },
  {
    id: 'iphone3',
    description: 'Iphone 3',
    price: 505.5,
  },
];

export const getAllProducts = () => products;

export const getProductsByPrice = (min: number, max: number) =>
  products.filter((product) => product.price >= min && product.price <= max);
