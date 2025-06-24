import { createContext } from "react";
import { useContext } from "react";

export const userContext = createContext();
export const useCustomhook = () => useContext(userContext);

const userProvider = ({ children }) => {
  return <userContext.Provider value={{}}>{children}</userContext.Provider>;
};

export default userProvider;
