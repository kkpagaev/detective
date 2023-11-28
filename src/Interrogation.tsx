/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ReactNode, useState } from "react";
import { Popup } from "./Popup";
import { QUESTION_LIMIT_THREE, Question } from "./Question";
import { useAppContext } from "./context/app-context";
import { TypeAnimation } from "react-type-animation";

type InterrogationPopupProps = {
  title: string,
  content: string,
  image?: string,
  questions: Array<Question>
}
export const InterrogationPopup = (props: InterrogationPopupProps) => {
  const { state, setState } = useAppContext();

  const [content, setContent] = useState<string>(props.content);
  const levelItemIndex = state.askedQuestionsThree.findIndex(levelItem => levelItem.title === props.title);

  const onQuestionAsked = (event: React.MouseEvent<HTMLElement>) => {
    const buttonIndex = +event.currentTarget.id.substring(3);
    const stateAskedQuestions = [...state.askedQuestionsThree];

    let newPoints = state.points;

    const newLeads = [...state.leads];

    ++stateAskedQuestions[levelItemIndex].nAskedQuestions;

    let currentQuestion = stateAskedQuestions[levelItemIndex].askedQuestions[buttonIndex];
    let currentQuestionContent = props.questions[buttonIndex];

    // If a user asks a leading question
    if (
      currentQuestion.isAsked &&
      currentQuestionContent.leadingQuestion !== undefined
    ) {
      while (
        // @ts-ignore
        currentQuestion.isLeadingAsked.isAsked &&
        // @ts-ignore
        currentQuestionContent.leadingQuestion.leadingQuestion !== undefined
      ) {
        // @ts-ignore
        currentQuestion = currentQuestion.isLeadingAsked;
        // @ts-ignore
        currentQuestionContent = currentQuestionContent.leadingQuestion;
      }

        // @ts-ignore
      if (!currentQuestion.isLeadingAsked.isAsked) {
        // @ts-ignore
        const answer = currentQuestionContent.leadingQuestion.answer;
        setContent(answer);

        // @ts-ignore
        newPoints += currentQuestionContent.leadingQuestion.points;

        const newLead = currentQuestionContent.leadingQuestion?.lead;
        if (newLead) {
          newLeads.push(newLead);
        }

        // @ts-ignore
        currentQuestion.isLeadingAsked.isAsked = true;
      }
    } else { // If a user asks a regular question

      setContent(currentQuestionContent.answer);

      newPoints += currentQuestionContent.points;

      const newLead = currentQuestionContent.lead;
      if (newLead) {
        newLeads.push(newLead);
      }

      currentQuestion.isAsked = true;
    }
    setState({ ...state, points: newPoints, leads: newLeads, askedQuestionsThree: stateAskedQuestions });
  }

  const questionsContent = props.questions.map((question, questionIndex) => {
    const questId = props.title[0] + questionIndex;
    const stateAskedQuestions = state.askedQuestionsThree[levelItemIndex];
    let currentQuestion = stateAskedQuestions.askedQuestions[questionIndex];
    let currentQuestionContent = question;
    while (currentQuestion.isAsked && currentQuestion.isLeadingAsked !== undefined) {
      currentQuestion = currentQuestion.isLeadingAsked;
        // @ts-ignore
      currentQuestionContent = currentQuestionContent.leadingQuestion;
    }
    return (
      <>{
        stateAskedQuestions.nAskedQuestions < QUESTION_LIMIT_THREE &&
        !currentQuestion.isAsked &&
        <button
          onClick={onQuestionAsked}
          id={"q_" + questId}
          key={questId}
          className="rounded border bg-white border-black w-full mt-1"
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        >
          {currentQuestionContent.question}
        </button>
      }</>

    );
  });

  return <Popup title={props.title}>
    {props.image && <img className="ml-auto mr-auto max-h-[250px] min-h-[250px]" src={props.image} />}
    <p className="min-h-[120px]">
      <TypeAnimation 
        key={content}
        sequence={[
          content,
        ]}
        speed={70}
        repeat={0}
        cursor={false}
      />
    </p>
    <div className="h-1/6">{questionsContent}</div>
  </Popup>
}

export type InterrogationEntry = {
  card: ReactNode,
  name: string
}
type Props = {
  mapEntries: Array<InterrogationEntry>
}
export const InterrogationComponent = ({ mapEntries }: Props) => {

  return <div>
    <div className="relative flex justify-between md:p-20">
      {mapEntries[0].card}
      {mapEntries[1].card}
    </div>
  </div>
}
