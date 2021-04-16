import React from 'react';
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import {VscDebugRestart} from "react-icons/vsc";

const Compteur = ({counterScreenSession, play, handleCounterScreen, handleClear, session}) => {


    



    return (
        <div className={"compteur"} >
            <div className="compteur__name" id="timer-label">{session? "Session" : "Break"}</div>
            <div className="compteur__time" id="time-left">
            {
                counterScreenSession<600 && counterScreenSession%60<10 ?
                "0"+Math.floor(counterScreenSession/60)+":0"+counterScreenSession%60:
                counterScreenSession>599 && counterScreenSession%60<10 ?
                Math.floor(counterScreenSession/60)+":0"+counterScreenSession%60:
                counterScreenSession<600 && counterScreenSession%60>10 ?
                "0"+Math.floor(counterScreenSession/60)+":"+counterScreenSession%60:
                Math.floor(counterScreenSession/60)+":"+counterScreenSession%60
            }
            </div>
            <audio id="beep" preload="auto" src="./sound/duke-game-over.mp3"></audio>
            <div className="compteur__controler">
            {
                play === false ?<button className="compteur__controler__play" id="start_stop" onClick={handleCounterScreen} ><AiFillPlayCircle/></button>:<button className="compteur__controler__break" onClick={handleCounterScreen}><AiFillPauseCircle/></button>
            }
                
                
                <button className="compteur__controler__clear" id="reset" onClick={handleClear}><VscDebugRestart/></button>
            </div>
        </div>
    );
};

export default Compteur;