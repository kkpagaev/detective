import { useAppContext } from "./context/app-context";

function getTime(time: number) {
  switch (time) {
    case 0:
      return "9:00";
    case 1:
      return "9:30";
    case 2:
      return "10:00";
    case 3:
      return "10:30";
    case 4:
      return "11:00";
    case 5:
      return "11:30";
    case 6:
      return "12:00";
    case 7:
      return "12:30";
    case 8:
      return "13:00";
    case 9:
      return "13:30";
    case 10:
      return "14:00";
    case 11:
      return "14:30";
    case 12:
      return "15:00";
    case 13:
      return "15:30";
    case 14:
      return "16:00";
    case 15:
      return "16:30";
    case 16:
      return "17:00";
    case 17:
      return "17:30";
    case 18:
      return "18:00";
    case 19:
      return "18:30";
  }
}

export const Slider = () => {
  const { state, setState } = useAppContext();

  const hasHint = state.serverRoomChoise == "video"

  const setTime = (value: number) => {
    setState({ ...state, time: value });
  }

  return <div>
    <div className="relative md:text-lg text-sm text-black">
      <div className="flex justify-between pr-8 pl-8">
        <h2 className="block mb-6">
          <span className="text-3xl font-bold">Виберіть час перегляду</span>
        </h2>
        <span className="text-3xl font-bold">Час: {getTime(2*state.time)}</span>
      </div>
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


      <span className="absolute -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"
        style={{
          insetInlineStart: "calc(7/8 * 100%)"
        }}
      >16:00</span>

      <span className="absolute end-0 -bottom-6">17:00</span>
    </div>
  </div>
}
