import React from 'react';
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import {VscDebugRestart} from "react-icons/vsc";

const Compteur = ({counterScreen, play, handleCounterScreen}) => {
    return (
        <div className="compteur">
            <div className="compteur__name">Session</div>
            <div className="compteur__time">
            {
                counterScreen%60>9 ? Math.floor(counterScreen/60)+":"+counterScreen%60: Math.floor(counterScreen/60)+":0"+counterScreen%60
            }
            
            </div>
            <div className="compteur__controler">
            {
                play === false ?<button className="compteur__controler__play" onClick={handleCounterScreen} ><AiFillPlayCircle/></button>:<button className="compteur__controler__break" onClick={handleCounterScreen}><AiFillPauseCircle/></button>
            }
                
                
                <button className="compteur__controler__clear"><VscDebugRestart/></button>
            </div>
        </div>
    );
};

export default Compteur;