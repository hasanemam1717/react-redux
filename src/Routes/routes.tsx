import App from "@/App";
import Login from "@/Pages/Login";
import Task from "@/Pages/Task";
import User from "@/Pages/User";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Task></Task>,
      },
      {
        path: "user",
        element: <User></User>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default routes;
