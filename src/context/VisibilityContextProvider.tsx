import { PropsWithChildren, createContext, useContext } from "react";

type VisibilityContextData = boolean;

export const VisibilityContext = createContext<VisibilityContextData>(false);

export const useVisibilityContext = () => useContext(VisibilityContext);

export const VisibilityContextProvider = ({ children, isVisible }: PropsWithChildren & { isVisible: boolean }) => {
  return (
    <VisibilityContext.Provider value={isVisible}>
      {children}
    </VisibilityContext.Provider>
  );
};
