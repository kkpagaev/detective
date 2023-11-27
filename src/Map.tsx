/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ReactNode, useEffect, useRef, useState } from "react";
import { useAppContext } from "./context/app-context";
import { Question, QUESTION_LIMIT } from "./Question";
import { Popup } from "./Popup";

// float 0 to 1
type Coordinates = {
  x: number
  y: number
}

export type MapEntry = {
  coordinates: Coordinates,
  popup: ReactNode,
  name: string,
  color?: string
}


export const MapDot = (props: MapEntry) => {
  const coordinates = props.coordinates;

  const color = props.color ? props.color : 'black';

  const colorVariants: any = {
    blue: 'bg-blue-500',
    sky: 'bg-sky-600',
    red: 'bg-red-500',
    yellow: 'bg-yellow-400',
    rose: 'bg-rose-300',
    emerald: 'bg-emerald-300',
    orange: 'bg-orange-400',
    black: 'bg-black',
  }

  const [popupOpen, setPopupOpen] = useState(false);
  const handleMouseClick = () => {
    setPopupOpen(!popupOpen);
  }
  const wrappedRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      // @ts-ignore
      if (wrappedRef.current && !wrappedRef.current.contains(event.target) && popupOpen) {
        setPopupOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrappedRef, popupOpen]);

  return <div >
    <div className="absolute justify-center" style={{
      left: `calc(${coordinates.x * 100}% - 1.25rem)`,
      top: `calc(${coordinates.y * 100}% - 1.25rem)`,
    }}>
      <div className="pr-2 pl-2 text-center relative bg-gray-100 border-gray-500 border border-10" style={{
        left: "calc(-50% + 1.25rem)",
      }}>{props.name}</div>
      <button className={`w-10 h-10 mt-1 rounded-full ${colorVariants[color]}`} style={{
      }} onClick={handleMouseClick} />
    </div>
    <div
      ref={wrappedRef}
      style={{
        visibility: popupOpen ? 'visible' : 'hidden',
        left: `calc(${coordinates.x * 100}% - 12rem)`,
        top: `calc(${coordinates.y * 100}% + 3rem)`,
      }} className="absolute z-50" >
      {props.popup}
    </div>
  </div>
}

type QuestionPopupProps = {
  title: string,
  content: string,
  image?: string,
  questions: Array<Question>
}
export const QuestionPopup = (props: QuestionPopupProps) => {
  const { state, setState } = useAppContext();

  const [content, setContent] = useState<string>(props.content);
  const levelItemIndex = state.askedQuestions.findIndex(levelItem => levelItem.title === props.title);

  const onQuestionAsked = (event: React.MouseEvent<HTMLElement>) => {
    const buttonIndex = +event.currentTarget.id.substring(3);
    const stateAskedQuestions = [...state.askedQuestions];

    let newPoints = state.points;

    const newLeads = [...state.leads];

    ++stateAskedQuestions[levelItemIndex].nAskedQuestions;

    // If a user asks a leading question
    if (
      state.askedQuestions[levelItemIndex].askedQuestions[buttonIndex].isAsked &&
      props.questions[buttonIndex].leadingQuestion !== undefined
    ) {
      const answer = props.questions[buttonIndex].leadingQuestion.answer;
      setContent(answer);

      newPoints += props.questions[buttonIndex].leadingQuestion.points;

      const newLead = props.questions[buttonIndex].leadingQuestion?.lead;
      if (newLead) {
        newLeads.push(newLead);
      }

      stateAskedQuestions.map(levelItem => {
        if (levelItem.title === props.title) {
          levelItem.askedQuestions[buttonIndex].isLeadingAsked = true;
        }
        return levelItem;
      });
    } else { // If a user asks a regular question
      event.currentTarget.textContent = props.questions[buttonIndex].leadingQuestion?.question;

      setContent(props.questions[buttonIndex].answer);

      newPoints += props.questions[buttonIndex].points;

      const newLead = props.questions[buttonIndex].lead;
      if (newLead) {
        newLeads.push(newLead);
      }

      stateAskedQuestions.map(levelItem => {
        if (levelItem.title === props.title) {
          levelItem.askedQuestions[buttonIndex].isAsked = true;
        }
        return levelItem;
      });
    }
    setState({ ...state, points: newPoints, leads: newLeads, askedQuestions: stateAskedQuestions });
  }

  const questionsContent = props.questions.map((question, questionIndex) => {
    const questId = props.title[0] + questionIndex;
    const stateAskedQuestions = state.askedQuestions[levelItemIndex];
    return (
      <>{
        stateAskedQuestions.nAskedQuestions < QUESTION_LIMIT &&
        (
          !stateAskedQuestions.askedQuestions[questionIndex].isAsked ||
          (question.leadingQuestion && !stateAskedQuestions.askedQuestions[questionIndex].isLeadingAsked)
        ) &&
        <button
          onClick={onQuestionAsked}
          id={"q_" + questId}
          key={questId}
          className="rounded border bg-white border-black"
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        >
          {question.question}
        </button>
      }</>

    );
  });

  return <Popup title={props.title}>
    {props.image && <img className="w-1/2 m-auto" src={props.image} />}
    <p>
      {content}
    </p>
    <div>{questionsContent}</div>
  </Popup>
}

type Props = {
  imageUrl: string,
  mapEntries: Array<MapEntry>
}
export const MapComponent = ({ imageUrl, mapEntries }: Props) => {
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

    const x = (e.clientX - rect.left) / width;
    const y = (e.clientY - rect.top) / height;

    setCoordinates({ x, y });
  };

  return <div>
    <div className="relative">
      {mapEntries.map((entry, i) => <MapDot key={i} {...entry} />)}
      <MapDot coordinates={coordinates} popup={
        <QuestionPopup {...{ title: 'title', content: 'content', questions: [] }} />} name="test" />
      <img src={imageUrl} onClick={handleMouseClick} className="w-full border-2 border-black" style={{ maxWidth: '100%' }} ref={ref} />
    </div>
    <button onClick={() => {
      navigator.clipboard.writeText(`
  coordinates: {
    x: ${coordinates.x},
    y: ${coordinates.y}
  },
`)
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
