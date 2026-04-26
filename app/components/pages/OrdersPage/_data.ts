export type Order = {
  id: number;
  customerName: string;
  status: string;
  items: string[];
  createdAt: string;
};

export const orders: Order[] = [
  {
    id: 1,
    customerName: "Alice Smith",
    status: "New",
    items: ["Wireless Mouse", "Mechanical Keyboard"],
    createdAt: "2025-01-20",
  },
  {
    id: 2,
    customerName: "Bob Johnson",
    status: "Delivering",
    items: ["USB-C Hub"],
    createdAt: "2025-01-18",
  },
  {
    id: 3,
    customerName: "Charlie Brown",
    status: "Delivered",
    items: ["Monitor Stand", "HDMI Cable"],
    createdAt: "2025-01-15",
  },
  {
    id: 4,
    customerName: "David Miller",
    status: "Cancelled",
    items: ["Gaming Headset"],
    createdAt: "2025-01-14",
  },
  {
    id: 5,
    customerName: "Eve Wilson",
    status: "New",
    items: ["Webcam", "Ring Light"],
    createdAt: "2025-01-21",
  },
  {
    id: 6,
    customerName: "Frank Wright",
    status: "Delivering",
    items: ["Laptop Sleeve", "Cooling Pad"],
    createdAt: "2025-01-19",
  },
  {
    id: 7,
    customerName: "Grace Hopper",
    status: "Delivered",
    items: ["External SSD"],
    createdAt: "2025-01-12",
  },
  {
    id: 8,
    customerName: "Henry Ford",
    status: "New",
    items: ["Desk Mat"],
    createdAt: "2025-01-22",
  },
  {
    id: 9,
    customerName: "Ivy Chen",
    status: "Delivering",
    items: ["Ergonomic Chair"],
    createdAt: "2025-01-17",
  },
  {
    id: 10,
    customerName: "Jack Daniels",
    status: "Cancelled",
    items: ["Smartphone Tripod"],
    createdAt: "2025-01-10",
  },
];
