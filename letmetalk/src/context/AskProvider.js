import { createContext, useState, useContext } from "react";

const AskContext = createContext();

export default function AskProvides({children}) {
   
  const [asks, setAsks] = useState([]);

  return (
    <AskContext.Provider value={{ asks, setAsks}}>
      {children}
    </AskContext.Provider>
  );
}

export function useAsks() {
  const context = useContext(AskContext);
  const { asks, setAsks } = context;
  return { asks, setAsks };
}
