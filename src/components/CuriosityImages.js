import React from 'react';
import {Col, Card, CardImg, Row} from 'reactstrap';

function CuriosityImages(props){
    return (
        <Row xs = '3'>
            <Col xs ='4' >
                {props.data1.map((item, i) => {
                    return <Card key = {i} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>   
                        <CardImg width='100%' src = {item.img_src} /> 
                    </Card> 
                })}

        
            </Col>
            <Col xs ='4' >
                    {props.data2.map((item, i) => {                       
                    return <Card key = {i} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>   
                        <CardImg width='100%' src = {item.img_src} /> 
                    </Card> 
                    })
                    }
            </Col>
            <Col xs ='4' >
                    {props.data3.map((item, i) => {                       
                    return <Card key = {i} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>   
                        <CardImg width='100%' src = {item.img_src} /> 
                    </Card> 
                    })
                    }
            </Col>
        </Row>
    )
}
export default CuriosityImages;