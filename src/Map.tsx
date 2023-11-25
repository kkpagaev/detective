import { useEffect, useRef, useState } from "react";
import officeMap from "./assets/office.png"
import { useAppContext } from "./context/app-context";

// float 0 to 1
type Coordinates = {
  x: number
  y: number
}

const MapDot = (props = { x: 0, y: 0 } as Coordinates) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const handleMouseClick = () => {
    setPopupOpen(!popupOpen);
  }

  return <div>
    <div className="absolute w-10 h-10 rounded-full bg-red-500" style={{
      left: `calc(${props.x * 100}% - 1.25rem)`,
      top: `calc(${props.y * 100}% - 1.25rem)`,
    }}  onClick={handleMouseClick}/>
    <div style={{
      visibility: popupOpen ? 'visible' : 'hidden',
      left: `calc(${props.x * 100}% - 18rem)`,
      top: `calc(${props.y * 100}%)`,
    }} className="absolute" onMouseEnter={() => setPopupOpen(true)} >
      <MapPopup />
    </div>
  </div>
}

const MapPopup = () => {
  return <div className="transition-all max-w-xl p-8 gap-8 text-lg bg-gray-100 border-gray-500 border border-10">
    <h3 className="text-center font-bold">
      Hello
    </h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  </div>
}

type Props = {
  imageUrl: string
}
export const MapComponent = ({ imageUrl = officeMap }: Props = { imageUrl: officeMap }) => {
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });
  const ref = useRef<HTMLImageElement>(null);
  const {state, setState} = useAppContext();

  
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [loaded, setLoaded] = useState(false);

  const onImageLoaded = () => setLoaded(true);

  useEffect(() => {
    const current = ref.current;

    if (current) {
      current.addEventListener('load', onImageLoaded);
      return () => current.removeEventListener('load', onImageLoaded);
    }
  }, [ref]);

  useEffect(() => {
    if (loaded) {
      setWidth(ref?.current?.offsetWidth ?? 1);
      setHeight(ref?.current?.offsetHeight ?? 1);
    }
    console.log(ref);

  }, [loaded]);

  const handleMouseClick = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    console.log(width, height);

    const x = (e.clientX - rect.left) / width;
    const y = (e.clientY - rect.top) / height;

    setCoordinates({ x, y });
  };

  return <div>
    <div className="relative">
      <MapDot x={coordinates.x} y={coordinates.y} />
      <img src={imageUrl} onClick={handleMouseClick} className="w-full border-2 border-black" style={{ maxWidth: '100%' }} ref={ref} />
    </div>
    <button onClick={() => {
      navigator.clipboard.writeText(`(${coordinates.x}, ${coordinates.y})`);
    }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      copy coordinates
    </button>
    <p>
      Cursor coordinates: {coordinates.x}, {coordinates.y}
    </p>
    <p onClick={() => setState({...state, foo: (state.foo ?? 0) + 1})}>
      state: {state.foo}
    </p>
  </div>
}
