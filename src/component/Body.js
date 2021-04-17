import React from 'react';
import Compteur from './Compteur';
import Config from './Config';
import { useState, useEffect } from 'react';

const Body = () => {

    const [sessionCounter, setSessionCounter] = useState(1500);
    const [breakCounter, setBreakCounter] = useState(300);
    const [counterScreenSession, setCounterScreenSession] = useState(sessionCounter);
    const [play, setPlay] = useState(false);
    const [session, setSession] = useState(true);

    const handleSessionCounter = (e) => {
        let number = e.currentTarget.dataset.session
        if(number === "up"){
            if(sessionCounter<3600){
                return setSessionCounter(sessionCounter+60);
            }else{
                return sessionCounter;
            }
            
        }
        else{
            if(sessionCounter >= 120){
                return setSessionCounter(sessionCounter-60);
            }else{
                return sessionCounter;
            }
            
        }
    }

    const handleBreakCounter = (e) => {
        let number = e.currentTarget.dataset.breaker
        if(number === "up"){
            if(breakCounter<3600){
                return setBreakCounter(breakCounter+60);
            }else{
                return breakCounter;
            }
            
        }
        else{
            if(breakCounter >= 120){
                return setBreakCounter(breakCounter-60);
            }else{
                return breakCounter;
            }
            
        }
    }

    const handleClear = () => {
        setPlay(false);
        setSession(true);
        setBreakCounter(300);
        setSessionCounter(1500)
        document.getElementById("beep").pause();
        document.getElementById("beep").currentTime=0;
        return setCounterScreenSession(1500);
    }

    const handleCounterScreen = () => {
        setPlay(play=>!play);
    }

    useEffect(() => {

        if(play && counterScreenSession>0){
            const timer = window.setInterval(()=>{
                setCounterScreenSession(counterScreenSession => counterScreenSession-1);
         }, 1000);
         return ()=>{
                clearInterval(timer)
            }
        }

    }, [play, counterScreenSession])


    useEffect(() => {

        if(counterScreenSession===0 && session){
                document.getElementById("beep").play();
                setCounterScreenSession(breakCounter);
                setSession(!session);
        }

        if(counterScreenSession===0 && !session){
                setCounterScreenSession(sessionCounter);
                setSession(!session);
        }


    }, [counterScreenSession, session, breakCounter, sessionCounter])

    useEffect(()=>{

        return setCounterScreenSession(sessionCounter);

    }, [sessionCounter, breakCounter])

    const timeCounter = () =>{
        let minutes = Math.floor(counterScreenSession/60);
        let seconds = counterScreenSession%60;

        if(minutes<10){
            minutes = "0"+minutes;
        }

        if(seconds<10){
            seconds = "0"+seconds;
        }

        return `${minutes}:${seconds}`;
    }


    return (
        <div className="body">
        <Config handleBreakCounter={handleBreakCounter} handleSessionCounter={handleSessionCounter} sessionCounter={sessionCounter} breakCounter={breakCounter}/>
        <Compteur counterScreenSession={counterScreenSession} play={play} handleCounterScreen={handleCounterScreen} handleClear={handleClear} session={session} sessionCounter={sessionCounter} timeCounter={timeCounter} breakCounter={breakCounter}/>
        </div>
    );
};

export default Body;