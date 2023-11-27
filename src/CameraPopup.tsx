import { Popup } from "./Popup"
import { useAppContext } from "./context/app-context";
import stairsImage from "./assets/stairs.jpg"
import elevatorImage from "./assets/elevator.webp"
import serversImage from "./assets/servers.jpg"

const cameraNames = {
  STAIRS: "Камера (Сходи)",
  LIFT: "Камера (Ліфт)",
  SERVERS: "Камера (Серверна)"
} as const

type CameraName = typeof cameraNames[keyof typeof cameraNames]


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
  video?: string
}>> = {
  "Камера (Ліфт)": {
    1: {
      text: "Camera 1 - Motion detected",
    },
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
  }

}

function useCameraState(name: CameraName) {
  const { state } = useAppContext();
  const camera = cameraStates[name]
  const cameraState = camera[state.time * 2]
  const defauctState = defaultCamerasStates[name]

  return {
    ...defauctState,
    ...cameraState
  }
}

type Props = {
  name: CameraName
}
export const CameraPopup = (props: Props) => {
  const { state } = useAppContext();
  const cameraState = useCameraState(props.name);

  return <Popup>
    <p>
      {state.time}
      CAMERA
      <img src={cameraState.image} />
      {cameraState.text}
    </p>
  </Popup>
}
