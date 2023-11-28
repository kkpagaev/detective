import { useAppContext } from "./context/app-context";

export const Slider = () => {
  const {state, setState} = useAppContext();

  const hasHint = state.serverRoomChoise == "video"

  const setTime = (value: number) => {
    setState({ ...state, time: value });
  }

  return <div>
    <div className="relative mb-6 text-lg text-black">
      <label htmlFor="steps-range" className="block mb-2 text-lg font-medium text-gray-900 ">Оберіть час перегляду</label>
      <input onChange={(e) => setTime(+e.target.value)} value={state.time} id="steps-range" type="range" min="0" max="8" step="0.5" className="w-full h-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
      <span className=" absolute start-0 -bottom-6"
        style={{
          insetInline: 0,
        }}
      >9:00</span>
      <span className=" absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"
        style={{
          insetInlineStart: "calc(1/8 * 100%)"
        }}
      >10:00</span>
      <span className="absolute -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"
        style={{
          insetInlineStart: "calc(2/8 * 100%)"
        }}
      >11:00</span>
      <span className="absolute -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"
        style={{
          insetInlineStart: "calc(3/8 * 100%)",
          color: hasHint ? "red" : undefined,
          fontWeight: hasHint ? "bold" : undefined
        }}
      >12:00</span>
      <span className=" absolute -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"
        style={{
          insetInlineStart: "calc(4/8 * 100%)"
        }}
      >13:00</span>
      {hasHint &&
        <span className="absolute -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"
          style={{
            insetInlineStart: "calc(9/16 * 100%)",
            color: "red",
            fontWeight: "bold"
          }}
        >13:30</span>
      }
      <span className=" absolute -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"
        style={{
          insetInlineStart: "calc(5/8 * 100%)"
        }}
      >14:00</span>
      <span className=" absolute -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"
        style={{
          insetInlineStart: "calc(6/8 * 100%)"
        }}
      >15:00</span>


      <span className="text-gray-500 absolute -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"
        style={{
          insetInlineStart: "calc(7/8 * 100%)"
        }}
      >16:00</span>

      <span className="text-gray-500 absolute end-0 -bottom-6">17:00</span>
    </div>
  </div>
}
