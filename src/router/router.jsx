import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Component/home/home";
import Root from "../Component/Root/root";
import Error from "../Component/error/error";
import Details from "../Component/details/details";
import Timeline from "../Component/Timeline/timeline";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: 'details/:id',
        element: <Details/>
      },
      {
        path: 'timeline',
        element: <Timeline/>
      }
    ],
    errorElement: <Error />,
  },
]);