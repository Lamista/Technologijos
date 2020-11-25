import React, { useState, useEffect } from 'react'

const IntervalinisKomponentasHooks = () => {
    const [time, setTime] = useState(5);
    const [color, setColor] = useState("blue");

    useEffect(() => {
        if (!time) {
            setColor("yellow");
            return;
        }
        let intervalId = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [time]);


    return (
        <div style={{ backgroundColor: color }}>
            <h1>{time}</h1>
        </div>
    )
}

export default IntervalinisKomponentasHooks
