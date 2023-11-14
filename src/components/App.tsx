import React from "react";
import "./App.css";

import { Navigator } from "./Navigator";
import { MenuList } from "./MenuList";
import { useMenus } from "../hooks/useMenus";
import { NotificationProvider } from "./Notification/NotificationContext";
import Notifications from "./Notification/Notifications";

function App() {
  const { menusByCategory } = useMenus();

  return (
    <NotificationProvider>
      <div className="app">
        <h1>Maple Bridge</h1>
        <section className="container">
          <Navigator />
          <MenuList menusByCategory={menusByCategory} />
        </section>
      </div>
      <Notifications />
    </NotificationProvider>
  );
}

export default App;
