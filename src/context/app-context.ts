import { createContext, useContext } from "react";
import { AskedLevelItem, AskedLevelItemThree } from "../Question";
import { CameraName } from "../CameraPopup";
import { getLevelName } from "../SideBar";

export type AppState = {
  // from 0 to 8
  time: number
  level: number
  levelName: string
  points: number
  leads: Array<string>
  serverRoomChoise?: "audio" | "video",
  visitedCameras: Record<CameraName, Array<number>>
  askedQuestions: Array<AskedLevelItem>
  askedQuestionsThree: Array<AskedLevelItemThree>
}

interface AppContextData {
  state: AppState,
  loaded: boolean,
  setState: (state: AppState) => void,
  addLead: (lead: string) => void,
  resetState: () => void
}

export const defaultState = <AppState>{
  level: 1,
  levelName: getLevelName(1),
  time: 0,
  points: 0,
  leads: [],
  visitedCameras: {
    "Камера (Ліфт)": [],
    "Камера (Сходи)": [],
    "Камера (Серверна)": []
  },
  askedQuestions: [{
    title: "Олександр",
    nAskedQuestions: 0,
    askedQuestions: [
      {
        isAsked: false,
        isLeadingAsked: false
      },
      {
        isAsked: false
      }
    ]
  },
  {
    title: "Петро",
    nAskedQuestions: 0,
    askedQuestions: [
      {
        isAsked: false,
        isLeadingAsked: false
      },
      {
        isAsked: false
      }
    ]
  },
  {
    title: "Максим",
    nAskedQuestions: 0,
    askedQuestions: [
      {
        isAsked: false
      },
      {
        isAsked: false,
        isLeadingAsked: false
      }
    ]
  },
  {
    title: "Віктор",
    nAskedQuestions: 0,
    askedQuestions: [
      {
        isAsked: false,
        isLeadingAsked: false
      },
      {
        isAsked: false
      }
    ]
  },
  {
    title: "Софія",
    nAskedQuestions: 0,
    askedQuestions: [
      {
        isAsked: false
      },
      {
        isAsked: false,
        isLeadingAsked: false
      }
    ]
  },
  {
    title: "Анна",
    nAskedQuestions: 0,
    askedQuestions: [
      {
        isAsked: false
      },
      {
        isAsked: false,
        isLeadingAsked: false
      }
    ]
  },
  {
    title: "Юлія",
    nAskedQuestions: 0,
    askedQuestions: [
      {
        isAsked: false,
        isLeadingAsked: false
      },
      {
        isAsked: false
      }
    ]
  }
  ],
  askedQuestionsThree: [
    {
      title: "Максим",
      nAskedQuestions: 0,
      askedQuestions: [
        {
          isAsked: false,
          isLeadingAsked: {
            isAsked: false,
            isLeadingAsked: {
              isAsked: false
            }
          }
        },
        {
          isAsked: false,
          isLeadingAsked: {
            isAsked: false,
            isLeadingAsked: {
              isAsked: false
            }
          }
        }
      ]
    },
    {
      title: "Софія",
      nAskedQuestions: 0,
      askedQuestions: [
        {
          isAsked: false,
          isLeadingAsked: {
            isAsked: false,
            isLeadingAsked: {
              isAsked: false,
              isLeadingAsked: {
                isAsked: false
              }
            }
          }
        },
        {
          isAsked: false,
          isLeadingAsked: {
            isAsked: false,
          }
        }
      ]
    }
  ]
}

export const AppContext = createContext<AppContextData>({
  state: JSON.parse(JSON.stringify(defaultState)) as AppState,
  setState: (state) => {
    console.log(state);
  },
  loaded: false,
  resetState: () => { },
  addLead: () => { }
});

export const useAppContext = () => useContext(AppContext);
