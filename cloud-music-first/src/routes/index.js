import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../application/Home";
import Rank from "../application/Rank";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";
const routes =  [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "recommend",
        element: <Recommend />,
      },
      {
        path: "singers",
        element: <Singers />,
      },
      {
        path: "rank",
        element: <Rank />,
      },
      {
        path: "/",
        element: <Navigate to="/recommend" />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/recommend" />,
  },
];
export default routes
