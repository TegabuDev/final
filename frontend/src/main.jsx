import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Add from "./components/Add.jsx";
import ErrorPage from "./components/ErrorPage";
import FindWilling from "./components/FindWilling";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" errorElement={<ErrorPage />}>
      <Route path="/" element={<App />} />
      <Route path="/add" element={<Add />} />
      <Route path="/find" element={<FindWilling />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
