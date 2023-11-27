import { Popup } from "./Popup"
import { useAppContext } from "./context/app-context";
import stairsImage from "./assets/stairs.jpg"
import elevatorImage from "./assets/elevator.webp"
import serversImage from "./assets/servers.jpg"
import catVideo from "./assets/cat.mp4"

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
    15: {
      video: catVideo,
      text: "cat vibing"
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
  const cameraState = useCameraState(props.name);

  return <Popup>
    <p>
      {cameraState.video ? <video controls src={cameraState.video} />: <img src={cameraState.image} />}
      {cameraState.text}
    </p>
  </Popup>
}
