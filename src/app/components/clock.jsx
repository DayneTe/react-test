'use client'
import React, {useState, useEffect} from "react";

function Clock() {

    const [time, setTime] = useState(new Date());

    //Every 1000ms setTime to new Date
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime (){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        //const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12;
        return `${hours}:${padZero(minutes)} ${padZero(meridiem)}`
      }

    function padZero (number){
      return (number < 10 ? "0" : "") + number
    }

  return (
    <div className="mx-auto text-2xl font-time tracking-wide">
      <span>{formatTime()}</span>
    </div>
  );
}

export default Clock;
