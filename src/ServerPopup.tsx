import { Popup } from "./Popup"
import { useAppContext } from "./context/app-context"
import logsVideo from "./assets/logs.webm"


const ServerAudio = () => {
  return <div>
      Server Audio
    </div>
}

const ServerVideo = () => {
  return <div>
    Логи показали що на сервер заходив Олександр в 12:00 і Максим в 13:30
    <video src={logsVideo} autoPlay controls muted />
  </div>
}

const ServerChoise = () => {
  const { state, setState } = useAppContext();

  const chooseVideo = () => {
    setState({ ...state, serverRoomChoise: "video", points: state.points + 10 })
  }

  return <div className="flex gap-4 justify-between">
    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={() => setState({ ...state, serverRoomChoise: "audio" })}>
      Audio
    </button>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={chooseVideo}>
      Video
    </button>
  </div>

}

export const ServerPopup = () => {
  const { state } = useAppContext();

  console.log(state.serverRoomChoise)
  return <Popup title="Сервер">
    {state.serverRoomChoise == undefined && <ServerChoise />}
    {state.serverRoomChoise == "audio" && <ServerAudio />}
    {state.serverRoomChoise == "video" && <ServerVideo />}
  </Popup>
}
