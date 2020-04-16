import React from 'react';

function ImgInfo(props){
    console.log(props)
    return (
        <div>
            <p>
                Photograph taken by {props.photographer}
            </p>
            <span />
            <p>
                Date: {props.date}
            </p>
        </div>
    )
}
export default ImgInfo;