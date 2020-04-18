import React from 'react';
import {CardImg} from 'reactstrap';

function NasaPhoto(props){
    console.log(props)
    return (
        <CardImg top width="100%" src = {props.imgUrl} alt = 'Astronomy Photo of the Day' />
    )
}
export default NasaPhoto;