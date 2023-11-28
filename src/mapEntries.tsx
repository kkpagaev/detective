import { MapEntry, QuestionPopup } from "./Map";
import sanyaImage from './assets/sanya.svg';
import maxImage from './assets/max.svg';
import petroImage from './assets/petro.svg';
import juliyaImage from './assets/juliya.svg';
import sofaImage from './assets/sofa.svg';
import victorImage from './assets/victor.svg';
import annaImage from './assets/anna.svg';
import { questions, questionsThree } from "./Question";
import { useAppContext } from "./context/app-context";
import { CameraPopup } from "./CameraPopup";
import { InterrogationEntry, InterrogationPopup } from "./Interrogation";
import { ServerPopup } from "./ServerPopup";

//Array<Array<MapEntry>>
const questionMapEntries = [
  {
    name: 'Кер. IT відділу',
    coordinates: {
      x: 0.3295965245564779,
      y: 0.07811847470620872
    },
    color: "emerald",
    popup: <QuestionPopup
      image={sanyaImage}
      title="Олександр"
      content="Керівник айті відділу (7 років). Має великий досвід роботи в компанії, можливо, має повний доступ до інформаційних систем."
      questions={questions[0].questions}
    />
  },
  {
    name: 'Кер. відділу продажів',
    coordinates: {
      x: 0.5962559410646388,
      y: 0.6356983240223464
    },
    color: "yellow",
    popup: <QuestionPopup
      image={petroImage}
      title="Петро"
      content="Керівник відділу продажів (2 роки). Має свій власний відділ, але можливо має деякі привілеї або доступи."
      questions={questions[1].questions}
    />
  },
  {
    name: 'Розробник',
    coordinates: {
      x: 0.4351532794676806,
      y: 0.40664804469273746
    },
    color: "red",
    popup: <QuestionPopup
      image={maxImage}
      title="Максим"
      content="Розробник (2 роки роботи). Він працює в компанії протягом достатнього часу, щоб отримати доступ до системи. Відомо, що він має доступ до серверної зони, де відбуваються важливі операції."
      questions={questions[2].questions}
    />
  },
  {
    name: 'Охоронець',
    coordinates: {
      x: 0.7496957382762991,
      y: 0.4806517690875233
    },
    color: "blue",
    popup: <QuestionPopup
      image={victorImage}
      title="Віктор"
      content="Охоронець (працює кілька днів). Ймовірно, він може бути відговідальним за фізичну безпеку, але його знання про технічні питання обмежене."
      questions={questions[3].questions}
    />
  },
  {
    name: 'Маркетолог',
    coordinates: {
      x: 0.28884149239543726,
      y: 0.34823091247672255
    },
    color: "orange",
    popup: <QuestionPopup
      image={sofaImage}
      title="Софія"
      content="Маркетолог (3 роки). Хоча вона не має прямого доступу до технічних деталей, може використовувати свої знання для звернення до співробітників."
      questions={questions[4].questions}
    />
  },
  {
    name: 'Розробниця',
    coordinates: {
      x: 0.2865157636248416,
      y: 0.6250093109869647
    },
    color: "sky",
    popup: <QuestionPopup
      image={annaImage}
      title="Анна"
      content="Розробниця (1.5 місяці) - Новачок. Хоча вона працює недавно, вона може використовувати свій статус новачка для отримання доступу до певних систем."
      questions={questions[5].questions}
    />
  },
  {
    name: 'Тестувальниця',
    coordinates: {
      x: 0.5659771070975919,
      y: 0.40037243947858475
    },
    color: "rose",
    popup: <QuestionPopup
      image={juliyaImage}
      title="Юлія"
      content="Тестувальниця (1 рік). Можливо, вона має обмежений доступ до деяких систем, але варто врахувати її в контексті, що може мати значення."
      questions={questions[6].questions}
    />
  },
]

const questionThreeMapEntries = [
  {
    name: 'Розробник',
    card: <InterrogationPopup
      key={0}
      image={maxImage}
      title="Максим"
      content="Розробник (2 роки роботи). Він працює в компанії протягом достатнього часу, щоб отримати доступ до системи. Відомо, що він має доступ до серверної зони, де відбуваються важливі операції."
      questions={questionsThree[0].questions}
    />
  },
  {
    name: 'Маркетолог',
    card: <InterrogationPopup
      key={1}
      image={sofaImage}
      title="Софія"
      content="Маркетолог (3 роки). Хоча вона не має прямого доступу до технічних деталей, може використовувати свої знання для звернення до співробітників."
      questions={questionsThree[1].questions}
    />
  },
]

const camerasOne = [
  {
    name: 'Камера (Сходи)',
    coordinates: {
      x: 0.7138706432192649,
      y: 0.26756983240223464
    },
    color: "emerald",
    popup: <CameraPopup
      name="Камера (Сходи)"
    />
  },
  {
    name: 'Сервер',
    coordinates: {
      x: 0.3255385773130545,
      y: 0.8994413407821229
    },
    color: "yellow",
    popup: <ServerPopup />
  },
  {
    name: 'Камера (Ліфт)',
    coordinates: {
      x: 0.20919130228136883,
      y: 0.0074487895716946
    },
    color: "red",
    popup: <CameraPopup 
      name="Камера (Ліфт)"
    />
  },
  {
    name: 'Камера (Серверна)',
    coordinates: {
      x: 0.26316722116603295,
      y: 0.7560521415270018
    },
    color: "blue",
    popup: <CameraPopup 
      name="Камера (Серверна)"
    />
  },
]

export const useMapEntries = () : Array<MapEntry> | Array<InterrogationEntry> => {
  const { state } = useAppContext();

  if (state.level === 1) {
    return questionMapEntries
  }
  if (state.level === 2) {
    return camerasOne
  }
  //if (state.level === 3) {
    return questionThreeMapEntries
  //}
}
