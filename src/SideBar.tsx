import { useState } from "react";
import { useAppContext } from "./context/app-context";

export const SideBar = () => {
  const { state, setState } = useAppContext();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  // const handleSelect = (level: number) => {
  //   setState({ ...state, level });
  // }

  return <div className="h-full bg-gray-100 border-gray-500 border border-10">
    <div className="flex justify-center">
      Sidebar
    </div>
    {open && <div className="flex justify-center">

    </div>}

  </div>
}
