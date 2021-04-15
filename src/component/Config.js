import React from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"

const Config = ({handleBreakCounter, handleSessionCounter, sessionCounter, breakCounter}) => {
    return (
        <div className="config">

        <div className="config__break">
        <div className="config__break__screen">Break</div>
        <div className="config__break__time">{Math.floor(breakCounter/60)+":"+breakCounter%60+"0"}</div>
        <button className="config__break__up" data-breaker="up" onClick={handleBreakCounter}><AiFillPlusCircle/></button>
        <button className="config__break__down" data-breaker="down" onClick={handleBreakCounter}><AiFillMinusCircle/></button>
        </div>


        <div className="config__session">
        <div className="config__session__screen">Session</div>
        <div className="config__session__time">{Math.floor(sessionCounter/60)+":"+sessionCounter%60+"0"}</div>
        <button className="config__session__up" data-session="up" onClick={handleSessionCounter}><AiFillPlusCircle/></button>
        <button className="config__session__down" data-session="down" onClick={handleSessionCounter}><AiFillMinusCircle/></button>

        </div>
            
        </div>
    );
};

export default Config;