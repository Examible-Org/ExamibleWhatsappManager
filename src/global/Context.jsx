import { createContext, useContext } from "react";

export const userContext = createContext();
export const useContext = () => useContext(userContext);

const userProvider = ({ children }) => {
  return <userContext.Provider value={{}}>{children}</userContext.Provider>;
};

export default userProvider;
