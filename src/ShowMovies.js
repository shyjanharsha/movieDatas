import React, { useState } from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import movieDetail from './moviefile.js';

const { Title,Text } = Typography;
const style = { background: '#0092ff', padding: '8px 0' };
function ShowMovies(props){
    const movie = [];
    const display  = movieDetail[props.selectedMovie]
    console.log("display",display)
    movie.push(display)
    console.log('movie',movie)
       const singleMovie = () =>(
        movie.map((showMovies,index)=>{
            return (
                <>
                    <Col span={4} accessKey={index}  style={{ backgroundImage: `url(${showMovies.Poster} )` }}></Col>
                               
                <Col span={24}>
                    
                </Col>
                <Col span={8}>
                    <Title level={2}>Movie Name:{showMovies.Title}  </Title>
                    <Text mark>Released Details:</Text>{showMovies.Released}
                </Col>
                <Col span={8}>
                    <Text type="success">Story:</Text>{showMovies.Plot}
                </Col>

                </>
                
            )
        })
       ) 
    
    return (
        <>
            <Row>
                {singleMovie()}
            </Row>
        </>
    )
}
export default ShowMovies;