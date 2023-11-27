import { useState } from "react";
import { useAppContext } from "./context/app-context";

export const LeadsList = () => {
    const { state } = useAppContext();

    const [ chosen, setChosen ] = useState<string>();

    const onChoice = (event: React.MouseEvent) => {
        setChosen(event.currentTarget.textContent);
    }

    const maxContent = <div className="w-full h-full text-center bg-white"><p>
        Максим та Петро були у змові. 
        Конкуренти компанії запропонували Петру великі гроші за записи голосового асистента з клієнтами.
        Петро заручився допомогою Максима в обмін на розподіл винагороди.
        Максим скористався доступом до сервера даним йому як розробнику.
        Передача Софії записів була спробою переведення стрілок. Софія не знала про джерело запису даного їй.
    </p></div>;
    const sofiaContent = <div className="w-full h-full text-center bg-white"><p>
        Софія була жертвою обставин. 
        Максим скористався проханням Софії надати їй приклад запису голосового асистента в цілях реклами. 
        Він передав Софії один із записів який викрав того ж дня. 
        Тоді Софія спішила додому по особистим справам, тому вийшла практично у той самий час, що й сталось викрадення інформації.
        Максиму та Петру вдалось втекти, вони наразі у розшуку.
        </p></div>;
    const initialContent = <div className="bg-white w-full h-full content-center items-center text-center">
        <div className="w-full h-1/6 text-2xl">Зачіпки</div>
        <ul className="w-full h-3/6 flex flex-col justify-start">
            {state.leads.map((lead, index) => {
            return <li key={index}>
                {lead}
            </li>
            })
            }
        </ul>
        <div className="w-full h-1/6 text-2xl">Хто злочинець?</div>
        <div className="flex w-full h-1/6 justify-evenly">
            <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded h-min w-1/4" 
                onClick={onChoice}>
            Максим
            </button>
            <button 
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-700 rounded h-min w-1/4" 
                onClick={onChoice}>
            Софія
            </button>
        </div>
    </div>;

    return <>
        {chosen === "Максим" && maxContent}
        {chosen === "Софія" && sofiaContent}
        {!chosen && initialContent}
    </>;
}