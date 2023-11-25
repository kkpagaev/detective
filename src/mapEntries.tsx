import { MapEntry, MapPopup } from "./Map";
import sanyaImage from './assets/sanya.svg'

export const mapEntries: Array<MapEntry> = [{
  name: 'Керівник',
  coordinates: {
    x: 0.2785480984340045,
    y: 0.1077018633540372
  },
  popup: <MapPopup
    image={sanyaImage}
    title="Олександр"
    content="Керівник айті відділу (7 років) - Давайте назвемо його Олександром. Має великий досвід роботи в компанії, можливо, має повний доступ до інформаційних систем."
  />
},
{
  name: '2',
  coordinates: {
    x: 0.22706935123042504,
    y: 0.8592132505175983
  },
  popup: <MapPopup
    title="title"
    content="content"
  />
},
  {
  name: '2',
  coordinates: {
    x: 0.4161073825503356,
    y: 0.15320910973084886
  },
  popup: <MapPopup
    title="title"
    content="content"
  />
},
  {
  name: '2',
  coordinates: {
    x: 0.8959731543624161,
    y: 0.13043478260869565
  },
  popup: <MapPopup
    title="title"
    content="content"
  />
},
  {
  name: '2',
  coordinates: {
    x: 0.875995449374289,
    y: 0.6421052631578947
  },
  popup: <MapPopup
    title="title"
    content="content"
  />
}

]
