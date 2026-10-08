import type { ComponentType } from "react";
import { HomePage, NewGamePage, TestsPage } from "../pages";

export type AppRoute = {
  path: string;
  label: string;
  Component: ComponentType;
};

export const routes: AppRoute[] = [
  { path: "/", label: "Home", Component: HomePage },
  { path: "/new-game", label: "New game", Component: NewGamePage },
  { path: "/ui-tests", label: "UI Tests", Component: TestsPage },
];
