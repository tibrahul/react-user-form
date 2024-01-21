import { createBrowserRouter } from "react-router-dom";
import User from "../views/user";
import UserTable from "../views/UserTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
  },
  {
    path: "/users",
    element: <UserTable />,
  },
]);

export default router;