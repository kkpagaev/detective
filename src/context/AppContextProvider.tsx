/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { AppContext, AppState, defaultState } from "./app-context";
// @ts-ignore
import { serialize, deserialize } from "react-serialize";

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<AppState>(JSON.parse(JSON.stringify(defaultState)));
  const [loaded, setLoaded] = useState(false);

  const leadReplacer = (key: string, value: any) => {
    return key === "leads" ? value.map((lead: ReactNode) => serialize(lead)) : value;
  }

  const leadReviver = (_: string, value: any) => {
    return typeof value === "string" && value.includes("props") ? deserialize(value) : value;
  }

  useEffect(() => {
    console.log({ state: JSON.stringify(state, leadReplacer) });
    if (loaded) {
      if (state !== null) {
        localStorage.setItem('appState', JSON.stringify(state, leadReplacer));
      }
    }
  }, [state, loaded]);

  useEffect(() => {
    const storedState = localStorage.getItem('appState');

    if (storedState) {
      setState(JSON.parse(storedState, leadReviver));
    } else {
      setState(JSON.parse(JSON.stringify(defaultState)));
    }
    setLoaded(true);
  }, []);

  const resetState = () => {
    setState(JSON.parse(JSON.stringify(defaultState)));
  };

  const addLead = (lead: string) => {
    if (state.leads.includes(lead)) {
      return;
    }

    setState({ ...state, leads: [...state.leads, lead] });
  }

  return (
    <AppContext.Provider value={{ state, setState, loaded, resetState, addLead }}>
      {children}
    </AppContext.Provider>
  );
};
