import { Popup } from "./Popup"
import { useAppContext } from "./context/app-context"
import logsVideo from "./assets/logs.webm"
import { textColorVariants } from "./Question"
import pogovorkaMp3 from "./assets/pogovorka.mp3"
import poemMp3 from "./assets/poem.mp3"
import sensMp3 from "./assets/sense.mp3"


const ServerAudio = () => {
  return <div className="flex flex-col gap-4">
    <h2 className="font-bold text-xl">
      {"Вкрадені дані"}
    </h2>
    <p>
      {"Вкрали записи результати роботи голосового помічника"}
    </p>
    <ul>
      <li>
        {"Поговорка "}
        <audio loop={false} controls autoPlay>
          <source src={pogovorkaMp3} type="audio/mp3" />
        </audio>
      </li>

      <li>
        {"Вірш "}
        <audio loop={false} controls>
          <source src={poemMp3} type="audio/mp3" />
        </audio>
      </li>

      <li>
        {"Сенс життя "}
        <audio loop={false} controls>
          <source src={sensMp3} type="audio/mp3" />
        </audio>
      </li>
    </ul>

      
    </div>
}

const ServerVideo = () => {
  return <div>
        Логи показали що на сервер заходив Олександр в 12:00 і Максим в 13:30
        <video src={logsVideo} autoPlay muted loop />
      </div>
}

const ServerChoise = () => {
  const {state, setState} = useAppContext();

  const chooseVideo = () => {
        setState({
          ...state, serverRoomChoise: "video", points: state.points + 10,
          leads: [...state.leads, <p>13:30 - <span className={textColorVariants.red}>Максим</span> заходив в серверну кімнату</p>]
        })
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
  const {state} = useAppContext();

      console.log(state.serverRoomChoise)
      return <Popup title="Сервер">
        {state.serverRoomChoise == undefined && <ServerChoise />}
        {state.serverRoomChoise == "audio" && <ServerAudio />}
        {state.serverRoomChoise == "video" && <ServerVideo />}
      </Popup>
}
