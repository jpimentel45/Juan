import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Layout, Navigation, Header, Drawer, Content} from 'react-mdl';
import './style.css'
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio";
// import Contact from "../Contact";
import Juanito from '../../img/juanito.png'
import Footer from '../Footer'
export default class Navbar extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Juan Alberto Pimentel JR" scroll className='Navy'>
            <Navigation>
              <Link to="/" className="nav-link">
                About Me
              </Link>
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
             
            </Navigation>
          </Header>
          <Drawer className='sideBar'>
            <img className="me meNav" alt='sexy me' src={Juanito} />
            <h1 className="sideName">Juan Alberto Pimentel JR</h1>
            <Navigation>
              <Link to="/" className="nav-link sideLink">
                <h4>About Me</h4>
              </Link>
              <Link to="/portfolio" className="nav-link sideLink">
                <h4>Portfolio</h4>
              </Link>
            
            <Footer />
       
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <div className="container">
              <Route path="/" exact component={AboutMe} />
              <Route path="/portfolio" component={Portfolio} />
              
            </div>
          </Content>
          <br />
          <Footer />
        </Layout>
      </div>

    );
  }
}
//this one goes on main Navigation
// <Link to="/contact" className="nav-link">
//   Contact
//               </Link>

//this is sideLinkNavigation
// <Link to="/contact" className="nav-link sideLink">
//   <h4>Contact</h4>
// </Link>

//This goies in content on div container
// <Route path="/contact" component={Contact} />