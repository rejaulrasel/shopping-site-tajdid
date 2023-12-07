import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Products from "../pages/Products/Products";
import CreateProduct from "../pages/CreateProduct/CreateProduct";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path: '/',
            element: <Products></Products>
        },
        {
            path: '/createProduct',
            element: <CreateProduct></CreateProduct>
        },
      ]
    },
  ]);

  export default router;