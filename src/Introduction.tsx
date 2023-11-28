import { getLevelName } from "./SideBar";
import { useAppContext } from "./context/app-context";
import './Introduction.css';
import backgroundImage from './assets/background-image.jpg';

export const Intro = () => {
    const { state, setState } = useAppContext();
    return <div className="w-full h-full">
        <img className="w-full h-full absolute top-0 left-0" src={backgroundImage} />
        <div className="w-5/8 h-2/3 intro-container">
            <div className="game-description-block">
                <p className="game-description">
                    Велика корпорація М займається розробкою програми персонального помічника, 
                    але зараз багаторічний проєкт під загрозою закриття.
                    Хтось зі співробітників допоміг хакеру отримати таємну інформацію, за яку він просить викуп. 
                    Чи зможеш ти знайти винного?</p>
            </div>
            <button className="start-button" onClick={() => setState({...state, level: 1, levelName: getLevelName(1)})}>Почати</button>
        </div>
    </div>;
}
