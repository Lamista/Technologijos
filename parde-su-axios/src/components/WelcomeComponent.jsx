import React from 'react'

import ServicesContext from '../ServicesContext.js';

const WelcomeMsg = () => (

    <ServicesContext.Consumer>
        {({ userService }) => (
            <div className='mx-auto' style={{ width: '400px' }}>
                <h3>Hello, {userService.getUsername()}!</h3>
            </div >
        )}
    </ServicesContext.Consumer>

)

export default WelcomeMsg