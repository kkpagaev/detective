import { PropsWithChildren, createContext, useContext } from "react";

type ColorContextData = string;

export const ColorContext = createContext<ColorContextData>("000000");

export const useColorContext = () => useContext(ColorContext);

export const ColorContextProvider = ({ children, color }: PropsWithChildren & { color: string }) => {
  return (
    <ColorContext.Provider value={color}>
      {children}
    </ColorContext.Provider>
  );
};
