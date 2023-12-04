import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Products from "../pages/Products/Products";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path: '/',
            element: <Products></Products>
        }
      ]
    },
  ]);

  export default router;