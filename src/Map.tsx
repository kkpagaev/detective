import { ReactNode, useEffect, useRef, useState } from "react";
import { useAppContext } from "./context/app-context";

// float 0 to 1
type Coordinates = {
  x: number
  y: number
}

export type MapEntry = {
  coordinates: Coordinates,

  popup: ReactNode,

  name: string
}

export const MapDot = (props: MapEntry) => {
  const coordinates = props.coordinates

  const [popupOpen, setPopupOpen] = useState(false);
  const handleMouseClick = () => {
    setPopupOpen(!popupOpen);
  }

  return <div>
    <div className="absolute justify-center" style={{
      left: `calc(${coordinates.x * 100}% - 1.25rem)`,
      top: `calc(${coordinates.y * 100}% - 1.25rem)`,
    }}>
      <div className="pr-2 pl-2 text-center relative bg-gray-100 border-gray-500 border border-10" style={{
        left: "calc(-50% + 1.25rem)",
      }}>{props.name}</div>
      <button className="w-10 h-10 mt-1 rounded-full bg-red-500" style={{
      }} onClick={handleMouseClick} />
      </div>
    <div style={{
      visibility: popupOpen ? 'visible' : 'hidden',
      left: `calc(${coordinates.x * 100}% - 12rem)`,
      top: `calc(${coordinates.y * 100}% + 3rem)`,
    }} className="absolute z-50" onMouseEnter={() => setPopupOpen(true)} onMouseLeave={() => setPopupOpen(false)} >
      {props.popup}
    </div>
  </div>
}


type PopupProps = {
  title: string,
  content: string,
  image?: string
}
export const MapPopup = (props: PopupProps) => {
  return <div className="transition-all w-96 p-8 flex flex-col gap-4 text-lg bg-gray-100 border-gray-500 border border-10">
    <h3 className="text-center font-bold">
      {props.title}
    </h3>
    {props.image && <img className="w-1/2 m-auto" src={props.image} />}
    <p>
      {props.content}
    </p>
  </div>
}

type Props = {
  imageUrl: string,
  mapEntries: Array<MapEntry>
}
export const MapComponent = ({ imageUrl, mapEntries }: Props) => {
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });
  const ref = useRef<HTMLImageElement>(null);
  const { state, setState } = useAppContext();

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
      {mapEntries.map((entry, i) => <MapDot key={i} {...entry} />)}
      <MapDot coordinates={coordinates} popup={
      <MapPopup {...{ title: 'title', content: 'content' }} /> } name="test" />
      <img src={imageUrl} onClick={handleMouseClick} className="w-full border-2 border-black" style={{ maxWidth: '100%' }} ref={ref} />
    </div>
    <button onClick={() => {
      navigator.clipboard.writeText(`{
  coordinates: {
    x: ${coordinates.x},
    y: ${coordinates.y}
  },
  popup: {
    title: 'title',
    content: 'content'
  }
}`)
    }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      copy coordinates
    </button>
    <p>
      Cursor coordinates: {coordinates.x}, {coordinates.y}
    </p>
  </div>
}
