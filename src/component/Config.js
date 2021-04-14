import React from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"

const Config = () => {
    return (
        <div className="config">

        <div className="config__break">
        <div className="config__break__screen">Break</div>
        <div className="config__break__time">5:00</div>
        <button className="config__break__up"><AiFillPlusCircle/></button>
        <button className="config__break__down"><AiFillMinusCircle/></button>
        </div>


        <div className="config__session">
        <div className="config__session__screen">Session</div>
        <div className="config__session__time">25:00</div>
        <button className="config__session__up"><AiFillPlusCircle/></button>
        <button className="config__session__down"><AiFillMinusCircle/></button>

        </div>
            
        </div>
    );
};

export default Config;