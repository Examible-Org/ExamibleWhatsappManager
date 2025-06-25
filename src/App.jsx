import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/lola/Dashboard";
import CreatePassword from "./auth/CreatePassword";
import Private from "./routes/Private";

const routes = createBrowserRouter([
  { path: "create-password", element: <CreatePassword /> },
  {
    element: <Private />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
]);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
