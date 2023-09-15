export type MenuItemCategory = "Main" | "Starter" | "Drink" | "Snack" | "Dessert";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: MenuItemCategory;
};

export type MenuByCategory = {
  [key in MenuItemCategory]: MenuItem[];
};