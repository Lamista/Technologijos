import React, { useState, useEffect, useRef } from 'react'

const AppHooks = (props) => {
    const [name, setName] = useState(props.name);
    const [surname, setSurname] = useState(props.surname);
    console.log("po konstruktoriaus: " + name);

    const isFirstRender = useRef(true)

    const doSomething = () => {
        setName(name + "+++");
    }

    useEffect(() => {
        if (!isFirstRender.current) {
            console.log("Use effect su parametru(po update): " + name);
        }
    }, [name]);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            doSomething();
            console.log("Use effect su parametru(pirmas): " + name);
        }
    });

    return (
        <div>
            <h1>{name}</h1>
            <h1>{surname}</h1>
        </div>
    )
}

export default AppHooks
