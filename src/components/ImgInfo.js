import React from 'react';
import {CardSubtitle} from 'reactstrap';
function ImgInfo(props){
    console.log(props)
    return (
        <CardSubtitle tag = 'h6' className = 'text-warning'>
            
            Photograph taken by {props.photographer}, Date: {props.date}
            
        </CardSubtitle>
    )
}
export default ImgInfo;