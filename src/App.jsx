import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Brands from "./pages/Brands";
import Cities from "./pages/Cities";
import Models from "./pages/Models";
import Locations from "./pages/Locations";

const ProtectedRouter = ({children}) => {
  const isAuthenticated = localStorage.getItem("token"); // Replace with your own authentication logic
  return isAuthenticated ? children : <Login />;
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: (
        <ProtectedRouter>
          <Dashboard />
        </ProtectedRouter>
      ),
      children:[
        {
          path:'/home',
          element: <Home />
        },
        {
          path: "/home/category",
          element: <Category />
        },
        {
          path:"/home/cars",
          element: <Cars/>
        },
        {
          path:"/home/brands",
          element: <Brands/>
        },
        {
          path:"/home/cities",
          element: <Cities/>
        },
        {
          path:"/home/models",
          element: <Models/>
        },
        {
          path:"/home/locations",
          element: <Locations/>
        }

      ]
    },

    {
      path: "*",
      element: <NotFound />, // Replace MainLayout with your custom layout component
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
