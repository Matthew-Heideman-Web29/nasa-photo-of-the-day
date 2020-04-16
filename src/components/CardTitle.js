import React from 'react';

function CardTitle(props){
    console.log(props)
    return (
        <h3>
            {props.title}
        </h3>
    )
}
export default CardTitle;