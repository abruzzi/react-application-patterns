import { createServer } from "miragejs";
import menus from "./menu.json";
import toggles from "./toggles.json";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    routes() {
      this.namespace = "api";

      // Mock the /menus endpoint
      this.get("/menus", () => {
        return menus;
      });

      this.get(
        "https://gist.githubusercontent.com/abruzzi/3dcb7424d635817b2de9323469dfdca3/raw/3770e9b271226a7c33c77190ed53b3446654d5c5/menu.json",
        (schema, request) => {
          return menus;
        }
      );

      this.get(
        "https://gist.githubusercontent.com/abruzzi/3dcb7424d635817b2de9323469dfdca3/raw/f0a24cc6b7e6c401b52165a13b09a83d0ea291dc/feature-toggles.json",
        () => {
          return toggles;
        }
      );
    },
  });
}
