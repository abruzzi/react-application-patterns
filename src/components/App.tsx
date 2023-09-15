import React from "react";
import "./App.css";
import FeatureToggleProvider from "./FeatureToggleProvider";

import { Navigator } from "./Navigator";
import { MenuList } from "./MenuList";
import { useMenus } from "../hooks/useMenus";

function App() {
  const { menusByCategory } = useMenus();

  return (
    <FeatureToggleProvider>
      <div className="app">
        <h1>Maple Bridge</h1>
        <section className="container">
          <Navigator />
          <MenuList menusByCategory={menusByCategory} />
        </section>
      </div>
    </FeatureToggleProvider>
  );
}

export default App;
