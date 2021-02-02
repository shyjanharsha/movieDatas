import React,{useEffect, useState} from 'react';
import { Row, Col, Divider } from 'antd';
import movieDetail from './moviefile.js';
import Layouts from './Layout.js';
import  {useHistory} from 'react-router-dom';
function MovieData(props){
	const style = { background: '#0092ff', padding: '8px 0' };
	const [movieDetails,setMovieDetails] = useState(movieDetail)
	const history  = useHistory();
	useEffect(()=>{
		if(props.selectedMovie != -1){
			history.push("/movieDetails")

		}
	},[props.selectedMovie])

	const showMovieDetails = (e) =>{
		props.setSelectedMovie(e.target.accessKey)
		history.push("/movieDetails")
	}
		const moviesRender = (e) =>(		
			// let moviesArray = [];
			movieDetails.map((movies,index) => {
				return(
							<Col span={4} accessKey={index} onClick = {showMovieDetails} style={{ backgroundImage: `url(${movies.Poster})` }}></Col>
				)
			})
		)
	return(
		<>
			{props.isLoggedIn && (<Row justify="space-around">
				{moviesRender()}
			</Row>)}
		</>

	);
}
export default MovieData;