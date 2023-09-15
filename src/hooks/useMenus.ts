import groupBy from "lodash/groupBy";
import { MenuByCategory, MenuItem } from "../types";
import { useService } from "./useService";

const fetchMenus = async () => {
  const req = await fetch(
    "https://gist.githubusercontent.com/abruzzi/3dcb7424d635817b2de9323469dfdca3/raw/3770e9b271226a7c33c77190ed53b3446654d5c5/menu.json"
  );
  return await req.json();
};

export const useMenus = () => {
  const { data } = useService<MenuItem[]>(fetchMenus);

  const menusByCategory = groupBy(data, "category") as MenuByCategory;

  return {
    menusByCategory,
  };
};
