import { createContext, useState } from "react";

const GlobalContext = createContext(null);

export default GlobalContext;

// Sample Higher order component to manipulate the state values in context
export const StateProvider = ({ children }) => {
  const [stateObj, setStateObj] = useState({
    value: 'None'
  })

  const onChangeState = (newState) => {
    setStateObj(st => ({
      ...st,
      ...newState
    }))
  }

  return (
    <GlobalContext.Provider value={{
      state: stateObj,
      setState: onChangeState
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
