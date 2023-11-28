import { ReactNode } from "react"
import { useAppContext } from "./context/app-context"
import { getLevelName } from "./SideBar"

type LevelHelp = {
  title: string,
  content: ReactNode
}
export const levelHelp: Record<number, LevelHelp> = {
  0: {
    title: "",
    content: ""
  },
  1: {
    title: getLevelName(1),
    content: "На цьому етапі вам потрібно допитати персонал, дізнатися хто чим займався, що помітили, кого підозрюєте. Вам потрібно допитати кожного робітника компанії в цьому відділі."
  },
  2: {
    title: getLevelName(2),
    content: "Ви можете переглянути відеозаписи в день атаки, а також подивитися додаткову інформацію на сервері. За допомогою слайдеру ви можете вибрати час "
  },
  3: {
    title: getLevelName(3),
    content: "//@TODO"
  },
  4: {
    title: "",
    content: ""
  }
}
type Props = {
  close: () => void
}
export const Help = ({ close }: Props) => {
  const { state } = useAppContext();
  const help = levelHelp[state.level];

  if (!help) return <></>;

  return <div className="fixed w-full text-zinc-200 h-full md:pr-64 md:pl-64 pt-32 pb-32 bg-sky-50" style={{
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100
  }}>
    <div className="w-full h-full bg-gray-900 rounded shadow-white p-12">
      <div className="relative">
        <div className="absolute right-0 text-yellow-300" style={{
          fontSize: "3rem",
        }}>
          <button onClick={close}>X</button>
        </div>

        <div className="md:p-12">
          <h2 className="font-bold text-lg mb-12 w-2/3" style={{
            fontSize: "2rem",
          }}>
            {help.title}
          </h2>
          <div className="flex flex-col gap-4" style={{
            fontSize: "1.5rem",
          }}>
            {help.content}
          </div>
        </div>
      </div>
    </div>
  </div>
}
