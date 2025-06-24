import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/jacob/kenz/lola/Dashboard";
import CreatePassword from "./auth/CreatePassword";

const routes = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "create-password", element: <CreatePassword /> },
]);
const App = () => {
  return (
    <userPovider>
      <RouterProvider router={routes} />
    </userPovider>
  );
};

export default App;
