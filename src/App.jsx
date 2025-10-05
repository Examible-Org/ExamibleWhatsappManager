import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/lola/Dashboard";
import CreatePassword from "./auth/CreatePassword";
import Private from "./routes/Private";
import Notifications from "./pages/ben/Notifications";
import VerifyEmail from "./auth/VerifyEmail";

const routes = createBrowserRouter([
  { path: "ambassador-activate/:token", element: <CreatePassword /> },
  { path: "verify-email", element: <VerifyEmail /> },
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
