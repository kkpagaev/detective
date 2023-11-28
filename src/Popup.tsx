import { ReactNode } from "react"


type Props = {
  children: ReactNode,
  title?: string,
}

export const Popup = ({ children, title }: Props) => {
  return <div className="transition-all  md:w-128 w-80 p-8 flex flex-col gap-4 text-lg bg-gray-100 border-gray-500 border border-10">
    {title && 
    <h3 className="text-center font-bold">
      {title}
    </h3>
    }
    {children}
  </div>
}
