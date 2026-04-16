import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router/router";
import DetailsContextProvider from "./context/detailscontext";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DetailsContextProvider >
      <RouterProvider router={router} />
    </DetailsContextProvider>
  </StrictMode>,
);
