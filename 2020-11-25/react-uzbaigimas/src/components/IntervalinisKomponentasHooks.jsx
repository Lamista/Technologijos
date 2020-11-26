import React, { useState, useEffect } from 'react'

const IntervalinisKomponentasHooks = () => {
    const [time, setTime] = useState(5);

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime(time > 0 ? time - 1 : 0);
            if (time === 0) {
                return;
                //ar pilnai reik, ar ne?
                //return () => clearInterval(intervalId);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [time]);


    return (
        <div style={{ backgroundColor: time > 0 ? "yellow" : "blue" }}>
            <h1>Hooks: {time}</h1>
        </div>
    )
}

export default IntervalinisKomponentasHooks
