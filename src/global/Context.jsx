import { useContext, createContext, useReducer } from "react";

export const userContext = createContext();
export const useCustomhook = () => useContext(userContext);

const initialState = {
  userData: null,
  setUserData: {},
};
 
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return { ...state.userData, userData: action.payload };
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUserData = (data) => {
    dispatch({ type: "SET_USER_DATA", payload: data });
  };

  const values = {
    userData: state.userData,
    setUserData,
  };
  return <userContext.Provider value={values}>{children}</userContext.Provider>;
};

export default UserProvider;
