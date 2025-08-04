import { createContext, useContext, useState } from "react";

const InternContext = createContext();

export const InternProvider = ({ children }) => {
  const [intern, setIntern] = useState(null);
  return (
    <InternContext.Provider value={{ intern, setIntern }}>
      {children}
    </InternContext.Provider>
  );
};

export const useIntern = () => useContext(InternContext);
