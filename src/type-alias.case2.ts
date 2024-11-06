// Optional Properties
export type ID = string | number;

export type Category = {
  id: ID;
  name: string;
  description?: string; // Description is optional
}

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
  description?: string; // Description is optional
}