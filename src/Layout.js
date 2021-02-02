import React, {useState}from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import LoginForm from './LoginForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import movieDetail from './moviefile';
import MovieData from './MovieData';
import ShowMovies from './ShowMovies';

const { Header, Content, Footer } = Layout;
function Layouts() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [selectedMovie,setSelectedMovie] = useState(-1)

  
  
  return(
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <p key="1">MOVIE WEBSITE </p>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Switch>
            <Route exact path="/">
              <LoginForm setIsLoggedIn = {setIsLoggedIn} isLoggedIn = {isLoggedIn}/>
            </Route>
            <Route path="/movies">
               <MovieData isLoggedIn = {isLoggedIn} setSelectedMovie = {setSelectedMovie} selectedMovie = {selectedMovie}/>
            </Route>
            <Route path="/movieDetails">
              <ShowMovies setSelectedMovie = {setSelectedMovie} selectedMovie = {selectedMovie}/>
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
     
    </Router>
    );
}

export default Layouts;
