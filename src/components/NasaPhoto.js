import React from 'react';

function NasaPhoto(props){
    console.log(props)
    return (
        <img src = {props.imgUrl} />
    )
}
export default NasaPhoto;