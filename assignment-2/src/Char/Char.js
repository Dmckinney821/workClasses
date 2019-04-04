import React from 'react';

const Char = (props) => {
    const styles = {
        padding: '16px',
        display: 'inline-block',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    }
    return (
        <div 
            style={styles} 
            onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default Char;