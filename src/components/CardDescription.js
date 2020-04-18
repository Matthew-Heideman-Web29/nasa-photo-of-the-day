import React from 'react';
import {CardText} from 'reactstrap';
function CardDescription(props){
    console.log(props)
    return (
        <CardText>
            {props.description}
        </CardText>
    )
}
export default CardDescription;