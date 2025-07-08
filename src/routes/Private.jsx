import React from "react";
import Dashboard from "../pages/lola/Dashboard";
import CreatePassword from "../auth/CreatePassword";
import { useCustomhook } from "../global/Context";
import Notifications from "../pages/ben/Notifications";

const Private = () => {
  const { userData } = useCustomhook();
  console.log(userData);
  // return userData ? <Dashboard /> : <CreatePassword />;
  return <Dashboard />;
};

export default Private;
