import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import { routes } from "./config/router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map(({ path, Component }) =>
      path === "/"
        ? { index: true, element: <Component /> }
        : { path: path.slice(1), element: <Component /> },
    ),
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
