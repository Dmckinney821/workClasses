import React from 'react';


const userInput = (props) => {
    const style={
        border: '1px solid blue',
        padding: '2px'
    }

    return <input 
    type='text' 
    style={style}
    onChange={props.caChange} 
    value={props.currentName}/>
    
};

export default userInput;

