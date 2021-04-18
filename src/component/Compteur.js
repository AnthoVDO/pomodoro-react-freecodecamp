import React from 'react';
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import {VscDebugRestart} from "react-icons/vsc";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Compteur = ({counterScreenSession, play, handleCounterScreen, handleClear, session, timeCounter,breakCounter,sessionCounter}) => {

    
    return (
        <div className={"compteur"} >
            <div className="compteur__name" id="timer-label">{session? "Session" : "Break"}</div>
            <CircularProgressbar 
            className="compteur__animation" 
            value={counterScreenSession} 
            minValue={0} 
            maxValue={session? sessionCounter:breakCounter } 
            counterClockwise="true"
               styles={{
                path:{
                    stroke: "#005479"
                },
                trail:{
                    stroke:"#A8223A"
                }}
            } 
            />
            
            <div  
            className={counterScreenSession<600 && counterScreenSession%60<5?"compteur__time compteur__name--red" : "compteur__time" }id="time-left">
            {
                timeCounter()
            }
            </div>
            <audio id="beep" src="./sound/duke-game-over.mp3"></audio>
            <div className="compteur__controler">
            {
                play === false ?<button className="compteur__controler__play" id="start_stop" onClick={handleCounterScreen} ><AiFillPlayCircle/></button>:<button className="compteur__controler__break" id="start_stop" onClick={handleCounterScreen}><AiFillPauseCircle/></button>
            }
                
                
                <button className="compteur__controler__clear" id="reset" onClick={handleClear}><VscDebugRestart/></button>
            </div>
        </div>
    );
};

export default Compteur;