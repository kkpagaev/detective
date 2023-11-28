import { useState } from "react";
import { Carousel } from "./Carousel";
import { Popup } from "./Popup";
import { ProgressBar } from "./ProgressBar";
import { useAppContext } from "./context/app-context";
import maxVideo from "./assets/server_max.mp4"
import { textColorVariants } from "./Question";

const MAX_CAMERA_TIME = 4.5;

export const MaxCamera = () => {
  const { state, setState } = useAppContext();
  const visited = state.visitedCameras["Камера (Серверна)"].includes(MAX_CAMERA_TIME);
  const [showProgress, setShowProgress] = useState(false);

  const afterEnd = () => {
    setState({
      ...state,
      visitedCameras: { ...state.visitedCameras, "Камера (Серверна)": [...state.visitedCameras["Камера (Серверна)"], MAX_CAMERA_TIME] },
      leads: [...state.leads, "13:30 - Чоловік в червоній сорочці вставив флешку в сервер"]
    })
  }

  return <Popup>
    <Carousel />
    {"Дивно, в серверній зазвичай увімкнуте світло. "}
    {"Але чітко видно що хтось зайшов до серверу"}
    {
      !visited && <button
        onClick={() => setShowProgress(true)}
        className="bg-green-500 transition-all hover:bg-green-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
        {"Використати штучний інтелек для відтворення відео"}
      </button>
    }
    {showProgress && <ProgressBar afterEnd={afterEnd} />}
    {visited && <div>
      <video src={maxVideo} loop autoPlay muted />
      <p>{"13:30 - Чоловік в червоній сорочці, схожий на "}<span className={textColorVariants.red}>{"Максима"}</span>{", вставив флешку в сервер"}</p>
    </div>}
  </Popup>
}
