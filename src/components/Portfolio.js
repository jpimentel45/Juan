import React, { Component } from "react";
import Projects from './Projects'
// import { Link } from "react-router-dom";
import Card from './Card'
export default class portfolio extends Component {
  render() {
    return (
      <div className="contact">
        
        {
          Projects.map(project => (
            <Card
              image={project.image}
              link={project.link}
              text={project.text}
              description={project.description}
              git={project.git}
              hub={project.hub}
            />
          ))
        }
      </div>
    )

  }
}
