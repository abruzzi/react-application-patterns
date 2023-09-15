import React, { useContext } from "react";
import { FeatureToggleContext } from "./FeatureToggleProvider";
import { MenuListOld } from "./MenuListOld";
import MenuListNew from "./MenuListNew";
import ErrorBoundary from "./ErrorBoundary";
import { MenuByCategory } from "../types";

type MenuListProps = {
  menusByCategory: MenuByCategory;
};

const ErrorPage = () => {
  return (
    <div className="error-page">Something went wrong</div>
  );
};
export const MenuList = (props: MenuListProps) => {
  const { isFeatureOn } = useContext(FeatureToggleContext);

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      {isFeatureOn("newMenuList") ? (
        <MenuListNew {...props} />
      ) : (
        <MenuListOld {...props} />
      )}
    </ErrorBoundary>
  );
};
