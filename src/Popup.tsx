import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  title?: string,
}

export const Popup = ({ children, title }: Props) => {
  return <div className={`transition-all  md:w-128 w-80 p-8 flex flex-col gap-4 text-lg bg-gray-100 border-zinc-600 rounded border-8 mr-1 ml-1`} >
    {title && 
    <h3 className="text-center font-bold text-xl">
      {title}
    </h3>
    }
    {children}
  </div>
}
