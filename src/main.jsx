import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router/router";
import DetailsContextProvider from "./context/detailscontext";
import { ToastContainer } from "react-toastify";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DetailsContextProvider >
      <RouterProvider router={router} />
    </DetailsContextProvider>
    <ToastContainer position="top-center"/>
  </StrictMode>,
);
