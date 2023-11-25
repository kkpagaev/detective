import { useEffect, useRef, useState } from "react";
import officeMap from "./assets/office.png"

// float 0 to 1
type Coordinates = {
  x: number
  y: number
}

const MapDot = (props = { x: 0, y: 0 } as Coordinates) => {
  return <div className="absolute w-10 h-10 rounded-full bg-red-500" style={{
    left: `calc(${props.x * 100}% - 1.25rem)`,
    top: `calc(${props.y * 100}% - 1.25rem)`,
  }} />
}

type Props = {
  imageUrl: string
}
export const MapComponent = ({ imageUrl = officeMap }: Props = {}) => {
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });
  const ref = useRef<HTMLImageElement>(null);

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
      <div onClick={handleMouseClick}>
        <MapDot x={coordinates.x} y={coordinates.y} />
      </div>
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
  </div>
}
