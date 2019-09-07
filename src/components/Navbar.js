import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Layout, Navigation, Header, Drawer, Content} from 'react-mdl';
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Juanito from '../img/juanito.png'

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
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer className='sideBar'>
            <img className="me meNav" alt='sexy me' src={Juanito} />
            <h1 className="sideName">Juan Alberto Pimentel JR</h1>
            <Navigation>
              <Link to="/" className="nav-link">
                <h4>About Me</h4>
              </Link>
              <Link to="/portfolio" className="nav-link">
                <h4>Portfolio</h4>
              </Link>
              <Link to="/contact" className="nav-link">
                <h4>Contact</h4>
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <div className="container">
              <Route path="/" exact component={AboutMe} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </div>
          </Content>
        </Layout>
      </div>

    );
  }
}
