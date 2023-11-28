import { ReactNode } from "react"
import { useAppContext } from "./context/app-context"

type LevelHelp = {
  title: string,
  content: ReactNode
}
export const levelHelp: Record<number, LevelHelp> = {
  1: {
    title: "Допит персоналу",
    content: "На цьому етапі вам потрібно допитати персонал, дізнатися хто чим займався, що помітили, кого підозрюєте. Вам потрібно допитати кожного робітника компанії в цьому відділі."
  },
  2: {
    title: "Перегляд відеозаписів з камер",
    content: "Ви можете переглянути відеозаписи в день атаки, а також подивитися додаткову інформацію на сервері. За допомогою слайдеру ви можете вибрати час "
  },
  3: {
    title: "Додатковий допит Софії і Максима",
    content: "//@TODO"
  }
}
type Props = {
  close: () => void
}
export const Help = ({ close }: Props) => {
  const { state } = useAppContext();
  const help = levelHelp[state.level];

  if (!help) return <></>;

  return <div className="fixed w-full text-zinc-200 h-full pr-64 pl-64 pt-32 pb-32 bg-sky-50 z-50" style={{
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }}>
    <div className="w-full h-full bg-gray-900 rounded shadow-white p-12">
      <div className="relative">
        <div className="absolute right-0 text-yellow-300" style={{
          fontSize: "3rem",
        }}>
          <button onClick={close}>X</button>
        </div>

        <div className="p-12">
          <h2 className="font-bold text-lg mb-12" style={{
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
