/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { useAppContext } from "./context/app-context";
import './Leads.css';

export const LeadsList = () => {
  const { state, resetState } = useAppContext();
  const [chosen, setChosen] = useState<string>();
  const onChoice = (event: React.MouseEvent) => {
    // @ts-ignore
    setChosen(event.currentTarget.textContent);
  }

  const maxContent = <p>
    Максим та Петро були у змові.
    Конкуренти компанії запропонували Петру великі гроші за записи голосового асистента з клієнтами.
    Петро заручився допомогою Максима в обмін на розподіл винагороди.
    Максим скористався доступом до сервера даним йому як розробнику.
    Передача Софії записів була спробою переведення стрілок. Софія не знала про джерело запису даного їй.
  </p>;
  const sofiaContent = <p>
    Софія була жертвою обставин.
    Максим скористався проханням Софії надати їй приклад запису голосового асистента в цілях реклами.
    Він передав Софії один із записів який викрав того ж дня.
    Тоді Софія спішила додому по особистим справам, тому вийшла практично у той самий час, що й сталось викрадення інформації.
    Максиму та Петру вдалось втекти, вони наразі у розшуку.
  </p>;
  const initialContent = <div className="flex flex-col gap-2">
    <div className="w-full h-1/8 text-2xl text-center lead-header">Зачіпки</div>
    <ul className="w-full h-5/8 flex flex-col justify-start text-sm mb-2">
      {state.leads.map((lead, index) => {
        return <li key={index}>
          {lead}
        </li>
      })
      }
    </ul>
    <div className="w-full h-1/8 text-2xl text-center lead-header">Хто злочинець?</div>
    <div className="flex w-full h-1/8 justify-evenly">
      <button
        className="bg-red-500 transition-all hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded h-min w-1/4"
        onClick={onChoice}>
        Максим
      </button>
      <button
        className="bg-orange-500 transition-all hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-700 rounded h-min w-1/4"
        onClick={onChoice}>
        Софія
      </button>
    </div>
  </div>;

  return <div className="leads-container relative flex justify-between flex-col text-xl">
    {chosen === "Максим" && maxContent}
    {chosen === "Софія" && sofiaContent}
    {!chosen && initialContent}
    {chosen && <div className="w-full text-center">
    <button className="m-auto bg-red-500 transition-all hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={resetState}>
        {"Грати ще раз"}
    </button></div>
    }
  </div>;
}
