import { Popup } from "./Popup"
import { useAppContext } from "./context/app-context";
import stairsImage from "./assets/stairs.jpg"
import elevatorImage from "./assets/elevator.png"
import serversImage from "./assets/servers.png"
import catVideo from "./assets/cat.mp4"
import alexVideo from "./assets/server_alex.mp4"
import maxVideo from "./assets/server_max.mp4"
import sofaVideo from "./assets/elevator_sofa.mp4"
import { ReactNode, useEffect } from "react";
import { useVisibilityContext } from "./context/VisibilityContextProvider";
import { textColorVariants } from "./Question";
import { MaxCamera } from "./MaxCamera";


const cameraNames = {
  STAIRS: "Камера (Сходи)",
  LIFT: "Камера (Ліфт)",
  SERVERS: "Камера (Серверна)"
} as const

export type CameraName = typeof cameraNames[keyof typeof cameraNames]


const defaultCamerasStates: Record<CameraName, {
  text: string,
  image: string,
}> = {
  "Камера (Ліфт)": {
    text: "No motion",
    image: elevatorImage
  },
  "Камера (Сходи)": {
    text: "No motion",
    image: stairsImage
  },
  "Камера (Серверна)": {
    text: "No motion",
    image: serversImage
  }
}

const cameraStates: Record<CameraName, Record<number, {
  text?: string,
  image?: string,
  needed?: boolean,
  video?: string,
  lead?: ReactNode
  // leadIfLogsAreChosen?: string,
  // textIfLogsAreChosen?: string,
}>> = {
  "Камера (Ліфт)": {
    1: {
      text: "Camera 1 - Motion detected",
    },
    9: {
        text: "13:35 - Софія покидає офіс",
        lead: <p>13:35 - <span className={textColorVariants.orange}>Софія</span> одразу покинула офіс після викрадення інформації з серверу</p>,
        video: sofaVideo,
        needed: true
    },
    15: {
      video: catVideo,
      text: "cat vibing",
      lead: <p>cat vibing really hard</p>,
      needed: true
    }
  },

  "Камера (Сходи)": {
    1: {
      text: "Camera 2 - Motion detected",
    },
  },
  "Камера (Серверна)": {
    1: {
      text: "Camera 3 - Motion detected",
    },
    6: {
        text: "Camera 3 - Motion detected",
        video: alexVideo,
        needed: true
    },
    9: {
        text: "13:30 - Чоловік в червоній сорочці, схожий на Максима, вставив флешку в сервер",
        lead: <p>13:30 - Чоловік в червоній сорочці, схожий на <span className={textColorVariants.red}>Максима</span>, вставив флешку в сервер</p>,
        video: maxVideo,
        needed: true
    },
  }

}

function useCameraState(name: CameraName) {
  const { state } = useAppContext();
  const camera = cameraStates[name]
  const cameraState = camera[state.time * 2]
  const defauctState = defaultCamerasStates[name]
  console.log(state.time * 2);


  return {
    ...defauctState,
    ...cameraState
  }
}

type Props = {
  name: CameraName
}
export const CameraPopup = (props: Props) => {
  const { state, setState } = useAppContext();
  const cameraState = useCameraState(props.name);
  const isVisible = useVisibilityContext();

  if(state.time === 4.5 && props.name === "Камера (Серверна)") {
    return <MaxCamera />
  }

  useEffect(() => {
    if (!isVisible) return

    if (cameraState.needed) {
      if (!state.visitedCameras[props.name].includes(state.time)) {
        setState({
          ...state,
          leads: cameraState.lead ? !state.leads.includes(cameraState.lead) ? [...state.leads, cameraState.lead] : state.leads : state.leads,
          visitedCameras: { ...state.visitedCameras, [props.name]: [...state.visitedCameras[props.name], state.time] }
        })
      }
    }
  }, [isVisible])


  return <Popup>
    <div>
      {cameraState.video ? <video src={cameraState.video} loop autoPlay muted /> : <img src={cameraState.image} />}
      {cameraState.text}
    </div>
  </Popup>
}
