import React from 'react'
import CardTitle from './CardTitle'
import NasaPhoto from './NasaPhoto'
import CardDescription from './CardDescription'
import ImgInfo from './ImgInfo'

function NasaCardContainer(props){
    console.log(props)
    return (
        <div>
            <CardTitle title = {props.data.title} />
            <NasaPhoto imgUrl = {props.data.url} />
            <ImgInfo photographer = {props.data.copyright} date = {props.data.date} />
            <CardDescription description = {props.data.explanation} />
        </div>
    )
}
export default NasaCardContainer;
