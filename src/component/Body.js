import React from 'react';
import Compteur from './Compteur';
import Config from './Config';
import { useState, useEffect } from 'react';

const Body = () => {

    const [sessionCounter, setSessionCounter] = useState(1500);
    const [breakCounter, setBreakCounter] = useState(300);
    const [counterScreen, setCounterScreen] = useState(sessionCounter);
    const [play, setPlay] = useState(false);

    const handleSessionCounter = (e) => {
        let number = e.currentTarget.dataset.session
        if(number === "up"){
            return setSessionCounter(sessionCounter+60);
        }
        else{
            if(sessionCounter >= 120){
                return setSessionCounter(sessionCounter-60);
            }else{
                return setSessionCounter;
            }
            
        }
    }

    const handleBreakCounter = (e) => {
        let number = e.currentTarget.dataset.breaker
        if(number === "up"){
            return setBreakCounter(breakCounter+60);
        }
        else{
            if(breakCounter >= 120){
                return setBreakCounter(breakCounter-60);
            }else{
                return setBreakCounter;
            }
            
        }
    }

    const handleCounterScreen = () => {
        return setPlay(!play);
    }

    useEffect(() => {

        if(play){
            const timer = window.setInterval(()=>{
            setCounterScreen(counterScreen => counterScreen-1);
        }, 1000);
        return ()=>{
                clearInterval(timer)
            }
        }
        
        
        


        
    }, [play])


    return (
        <div className="body">
        <Config handleBreakCounter={handleBreakCounter} handleSessionCounter={handleSessionCounter} sessionCounter={sessionCounter} breakCounter={breakCounter}/>
        <Compteur counterScreen={counterScreen} play={play} handleCounterScreen={handleCounterScreen}/>
        </div>
    );
};

export default Body;