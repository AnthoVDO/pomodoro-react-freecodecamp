import React from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"

const Config = ({handleBreakCounter, handleSessionCounter, sessionCounter, breakCounter}) => {
    return (
        <div className="config">

        <div className="config__break">
        <div className="config__break__screen" id="break-label">Break Length</div>
        <div className="config__break__time" id="break-length">{Math.floor(breakCounter/60)}</div>
        <button className="config__break__up" id="break-increment" data-breaker="up" onClick={handleBreakCounter}><AiFillPlusCircle/></button>
        <button className="config__break__down" id="break-decrement" data-breaker="down" onClick={handleBreakCounter}><AiFillMinusCircle/></button>
        </div>


        <div className="config__session">
        <div className="config__session__screen" id="session-label">Session Length</div>
        <div className="config__session__time" id="session-length">{Math.floor(sessionCounter/60)}</div>
        <button className="config__session__up" id="session-increment" data-session="up" onClick={handleSessionCounter}><AiFillPlusCircle/></button>
        <button className="config__session__down" id="session-decrement" data-session="down" onClick={handleSessionCounter}><AiFillMinusCircle/></button>

        </div>
            
        </div>
    );
};

export default Config;