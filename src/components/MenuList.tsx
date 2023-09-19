import { MenuByCategory } from "../types";
import { useToggles } from "../hooks/useToggles";

import { MenuList as MenuListOld } from "./MenuListOld/MenuList";
import { MenuList as MenuListNew } from "./MenuListNew/MenuList";

const MenuList = ({ menusByCategory }: { menusByCategory: MenuByCategory }) => {
  const { isFeatureOn } = useToggles();

  return isFeatureOn("newMenuList") ? (
    <MenuListNew menusByCategory={menusByCategory} />
  ) : (
    <MenuListOld menusByCategory={menusByCategory} />
  );
};

export { MenuList };
