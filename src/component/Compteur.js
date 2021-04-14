import React from 'react';
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import {VscDebugRestart} from "react-icons/vsc";

const Compteur = () => {
    return (
        <div className="compteur">
            <div className="compteur__name">Session</div>
            <div className="compteur__time">25:00</div>
            <div className="compteur__controler">
                <button className="compteur__controler__play"><AiFillPlayCircle/></button>
                <button className="compteur__controler__break"><AiFillPauseCircle/></button>
                <button className="compteur__controler__clear"><VscDebugRestart/></button>
            </div>
        </div>
    );
};

export default Compteur;