import React, { Component } from "react";
// import { Link } from "react-router-dom";
 import Juanito from '../img/juanito.png'

export default class AboutMe extends Component {
  render() {
    return (
      <div className="container" id="aboutMe">

        <div className="" >
          <img className="me"alt='sexy me' src={Juanito} />
        </div>
          <div className="bio">
            <p >My name is Juan Alberto
                Pimentel JR. I am 24 years old, 6'2, and have a growing passion for coding </p>
    
              <p >I recently attended, and completed, the coding bootcamp at UCLA to become a full stack web
                  developer. It was a very challenging journey, but the knowledge I gained within a short period of time
                  has given me the confidence to dive into anything. There are so many resources out there to help us
                  learn the most recent technology, I am sure I can keep on learning, as long as I challenge myself.
            </p>
          </div>
          </div>
          )

  }
}
