import React from 'react';

import './UserOutput.css'
const userOutput = (props) => {
    return (
        <div className='assign'>
            <p>Username: {props.user}</p>
            <p className='round1'>Gata</p>
        </div>
      );
};


export default userOutput;