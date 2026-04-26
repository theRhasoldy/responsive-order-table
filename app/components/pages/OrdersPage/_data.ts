export type Order = {
  id: number;
  customerName: string;
  status: string;
  items: string[];
  createdAt: string;
};

export const orders = [
  {
    id: 1,
    customerName: "Alice",
    status: "New",
    items: ["Item A", "Item B"],
    createdAt: "2025-01-20",
  },
  {
    id: 2,
    customerName: "Bob",
    status: "Delivering",
    items: ["Item C"],
    createdAt: "2025-01-18",
  },
];
