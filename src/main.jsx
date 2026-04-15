import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter} from "react-router";
import {RouterProvider} from 'react-router/dom';
import './index.css'
import Root from './Component/root';

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
