import React, { useState } from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import movieDetail from './moviefile.js';

const { Title,Text } = Typography;
const style = { background: '#0092ff', padding: '8px 0' };
function ShowMovies(props){
    // const movie = [];
    
    // console.log("display",display)
    // movie.push(display)
    // console.log('movie',movie)
       const singleMovie = () =>{
        const display  = movieDetail[props.selectedMovie]
            return (
                <>
                    <Col span={4}   style={{ backgroundImage: `url(${display.Poster} )` }}></Col>
                               
                <Col span={24}>
                    
                </Col>
                <Col span={8}>
                    <Title level={2}>Movie Name:{display.Title}  </Title>
                    <Text mark>Released Details:</Text>{display.Released}
                </Col>
                <Col span={8}>
                    <Text type="success">Story:</Text>{display.Plot}
                </Col>

                </>
                
            )
        
        }
    
    return (
        <>
            <Row>
                {singleMovie()}
            </Row>
        </>
    )
}
export default ShowMovies;