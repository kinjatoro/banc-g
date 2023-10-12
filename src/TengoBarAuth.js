import React, { createContext, useContext, useState } from 'react';

const TengoBarContext = createContext();

export function BarProvider({ children }) {
  const [myBar, setMyBar] = useState(false);

  return (
    <TengoBarContext.Provider value={{ myBar, setMyBar }}>
      {children}
    </TengoBarContext.Provider>
  );
}

export function useMyBar() {
  return useContext(TengoBarContext);
}
