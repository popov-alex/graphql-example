

export const orders = [
  {
    date: 'September 15, 2021',
    subtotal: 520.17,
    items: [
      {
        product: { id: 'iphone3', description: 'Iphone 3', price: 15.12 },
        quantity: 2,
      },
    ],
  },
];

export const getAllOrders = () => orders;
