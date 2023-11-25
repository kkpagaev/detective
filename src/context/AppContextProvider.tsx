import { PropsWithChildren, useEffect, useState } from "react";
import { AppContext, AppState, defaultState } from "./app-context";

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<AppState>(JSON.parse(JSON.stringify(defaultState)));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log({ state: JSON.stringify(state) });
    if (loaded) {
      if (state !== null) {
        localStorage.setItem('appState', JSON.stringify(state));
      }
    }
  }, [state, loaded]);

  useEffect(() => {
    const storedState = localStorage.getItem('appState');

    if (storedState) {
      setState(JSON.parse(storedState));
    } else {
      setState(JSON.parse(JSON.stringify(defaultState)));
    }
    setLoaded(true);
  }, []);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};