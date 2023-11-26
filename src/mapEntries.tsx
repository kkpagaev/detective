import { MapEntry, MapPopup } from "./Map";
import sanyaImage from './assets/sanya.svg';
import maxImage from './assets/max.svg';
import petroImage from './assets/petro.svg';
import juliyaImage from './assets/juliya.svg';
import sofaImage from './assets/sofa.svg';
import victorImage from './assets/victor.svg';
import annaImage from './assets/anna.svg';
import { useAppContext } from "./context/app-context";
import { questions } from "./Question";

//Array<Array<MapEntry>>

export const MapEntries = () => {
  const { state } = useAppContext();

  return [
    [
      {
        name: 'Кер. IT відділу',
        coordinates: {
          x: 0.3575965245564779,
          y: 0.07811847470620872
        },
        color: "emerald",
        popup: <MapPopup
          image={sanyaImage}
          title="Олександр"
          content="Керівник айті відділу (7 років). Має великий досвід роботи в компанії, можливо, має повний доступ до інформаційних систем."
          questions={questions[0][0].questions}
        />
      },
      {
        name: 'Кер. відділу продажів',
        coordinates: {
          x: 0.6062559410646388,
          y: 0.6256983240223464
        },
        color: "yellow",
        popup: <MapPopup
          image={petroImage}
          title="Петро"
          content="Керівник відділу продажів (2 роки). Має свій власний відділ, але можливо має деякі привілеї або доступи."
          questions={questions[0][1].questions}
        />
      },
      {
        name: 'Розробник',
        coordinates: {
          x: 0.4351532794676806,
          y: 0.39664804469273746
        },
        color: "red",
        popup: <MapPopup
          image={maxImage}
          title="Максим"
          content="Розробник (2 роки роботи). Він працює в компанії протягом достатнього часу, щоб отримати доступ до системи. Відомо, що він має доступ до серверної зони, де відбуваються важливі операції."
          questions={questions[0][2].questions}
        />
      },
      {
        name: 'Охоронець',
        coordinates: {
          x: 0.7836957382762991,
          y: 0.4506517690875233
        },
        color: "blue",
        popup: <MapPopup
          image={victorImage}
          title="Віктор"
          content="Охоронець (працює кілька днів). Ймовірно, він може бути відговідальним за фізичну безпеку, але його знання про технічні питання обмежене."
          questions={questions[0][3].questions}
        />
      },
      {
        name: 'Маркетолог',
        coordinates: {
          x: 0.24884149239543726,
          y: 0.34823091247672255
        },
        color: "orange",
        popup: <MapPopup
          image={sofaImage}
          title="Софія"
          content="Маркетолог (3 роки). Хоча вона не має прямого доступу до технічних деталей, може використовувати свої знання для звернення до співробітників."
          questions={questions[0][4].questions}
        />
      },
      {
        name: 'Розробниця',
        coordinates: {
          x: 0.2615157636248416,
          y: 0.6350093109869647
        },
        color: "sky",
        popup: <MapPopup
          image={annaImage}
          title="Анна"
          content="Розробниця (1.5 місяці) - Новачок. Хоча вона працює недавно, вона може використовувати свій статус новачка для отримання доступу до певних систем."
          questions={questions[0][5].questions}
        />
      },
      {
        name: 'Тестувальниця',
        coordinates: {
          x: 0.5859771070975919,
          y: 0.40037243947858475
        },
        color: "rose",
        popup: <MapPopup
          image={juliyaImage}
          title="Юлія"
          content="Тестувальниця (1 рік). Можливо, вона має обмежений доступ до деяких систем, але варто врахувати її в контексті, що може мати значення."
          questions={questions[0][6].questions}
        />
      },
    ]
  ]
}
