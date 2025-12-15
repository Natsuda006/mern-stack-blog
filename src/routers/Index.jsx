import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout.jsx"
import Home from "../pages/Home.jsx"
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import PostByAuthor from "../pages/PostByAuthor.jsx";
import PostDetail from "../pages/PostDetail.jsx";
import Create from "../pages/Create.jsx";
import Edit from "../pages/Edit.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/post/:id",
        element: <PostDetail/>
      },
      {
        path: "/create",
        element: <Create />
      },
      {
        path: "edit/:id",
        element: <Edit />
      },
      {
        path: "author/:id",
        element: <PostByAuthor />
      }
    ],
  },
]);

export default router;