export type MenuItemCategory = "Main" | "Starter" | "Drink" | "Snack" | "Dessert";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: MenuItemCategory;
  nutritionalInfo: string;
};

export type MenuByCategory = {
  [key in MenuItemCategory]: MenuItem[];
};