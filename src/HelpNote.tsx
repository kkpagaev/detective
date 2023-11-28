import { levelHelp } from "./Help";
import { useAppContext } from "./context/app-context"

type Props = {
  close: () => void
}
export const HelpNote = ({ close }: Props) => {
  const { state } = useAppContext();
  const help = levelHelp[state.level];

  return <div className="h-128 border-black border-2 p-8 w-96 overflow-y-auto bg-red-200">
    <div className="relative">
      <div className="absolute right-0 text-xl">
        <button onClick={close}>X</button>
      </div>
      <h2 className="font-bold text-lg mb-5"> 
        {help.title}
      </h2>
      <div className="flex flex-col gap-4">
        {help.content}
      </div>
    </div>
  </div>
}
