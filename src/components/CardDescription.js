import React from 'react';

function CardDescription(props){
    console.log(props)
    return (
        <p>
            {props.description}
        </p>
    )
}
export default CardDescription;