import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/lola/Dashboard";
import CreatePassword from "./auth/CreatePassword";
import Private from "./routes/Private";
import Notifications from "./pages/ben/Notifications";

const routes = createBrowserRouter([
  { path: "create-password/:token", element: <CreatePassword /> },
  {
    element: <Private />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "notifications", element: <Notifications /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
