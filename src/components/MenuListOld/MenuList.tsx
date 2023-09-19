import React from "react";
import type { MenuItem as MenuItemType } from "../../types";
import { MenuByCategory } from "../../types";
import { MenuItem } from "./MenuItem";

export const MenuList = ({
  menusByCategory,
}: {
  menusByCategory: MenuByCategory;
}) => {
  const handleClick = (item: MenuItemType) => {
    console.log(`${item.name}`);
  };

  return (
    <main className="menu-list">
      {Object.keys(menusByCategory).map((category) => (
        <section key={category}>
          <h2 id={category.toLowerCase()}>{category}</h2>
          <ul>
            {menusByCategory[category as keyof typeof menusByCategory].map(
              (item: MenuItemType) => (
                <MenuItem
                  key={item.name}
                  item={item}
                  onItemClick={handleClick}
                />
              )
            )}
          </ul>
        </section>
      ))}
    </main>
  );
};
