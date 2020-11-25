import React from 'react'
import dancingMonkey from '../images/dancing-monkey.gif'
import justMonkey from '../images/tarkim.png'

function SokantisPaveiksliukas() {
    return (
        <div >
            <img
                style={{ width: 300, height: 300 }}
                src={justMonkey}
                onMouseOver={e => e.currentTarget.src = dancingMonkey}
                onMouseOut={e => e.currentTarget.src = justMonkey}
                alt="..."
            />
        </div>
    )
}

export default SokantisPaveiksliukas
