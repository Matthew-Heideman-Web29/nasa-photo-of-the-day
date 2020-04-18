import React from 'react';
import {CardTitle as Title} from 'reactstrap';

function CardTitle(props){
    console.log(props)
    return (
        <Title tag='h4' className = 'text-warning'>
            {props.title}
        </Title>
    )
}
export default CardTitle;