export type Review = {
  rating: number;
  message: string;
};

export type Product = {
  id: string;
  description: string;
  price: number;
  reviews: Review[];
};

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

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);

export const addProduct = (
  id: string,
  description: string,
  price: number
): Product => {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
};
