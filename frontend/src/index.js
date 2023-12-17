import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Home from "./pages/Home";

import Shop from "./pages/Shop";
import Blogs from "./pages/Blogs";
import ProductDescription from "./pages/ProductDescription";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/description/:productId" element={<ProductDescription />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
