import React from "react";
import type { MenuItem as MenuItemType } from "../types";
import { MenuByCategory } from "../types";

const MenuItem = ({
  item,
  onItemClick
}: {
  item: MenuItemType;
  onItemClick: (item: MenuItemType) => void;
}) => {
  // @ts-ignore
  // const information  = item.name + item.something.doesnt.exist;

  return (
    <li key={item.name}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button onClick={() => onItemClick(item)}>Add to Cart</button>
    </li>
  );
};

export const MenuListOld = ({
  menusByCategory,
}: {
  menusByCategory: MenuByCategory,
}) => {
  const handleClick = (item: any) => {
    item.doesnt.exist();
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
