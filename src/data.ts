export interface Product {
  id: string;
  title: string;
  price: number;
}

export const mockedProducts: Product[] = [
  {
    id: "1",
    title: "Äpple",
    price: 10,
  },
  {
    id: "2",
    title: "Päron",
    price: 14,
  },
  {
    id: "3",
    title: "Apelsin",
    price: 8,
  },
];
