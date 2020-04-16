import React from 'react';
import CardTitle from './CardTitle';
import NasaPhoto from './NasaPhoto';
import CardDescription from './CardDescription';
import ImgInfo from './ImgInfo';
import {Col, Card, CardBody, CardHeader} from 'reactstrap';

function NasaCardContainer(props){
    console.log(props)
    return (
        <Col sm = '10'>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <NasaPhoto imgUrl = {props.data.url} />
                <CardHeader>
                    <CardTitle title = {props.data.title} />
                    <ImgInfo photographer = {props.data.copyright} date = {props.data.date} />
                </CardHeader>
                <CardBody>
                    <CardDescription description = {props.data.explanation} />
                </CardBody>
            </Card>
        </Col>
    )
}
export default NasaCardContainer;
