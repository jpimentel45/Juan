import React, { Component } from "react";
import Projects from './projects.js'
// import { Link } from "react-router-dom";
import FriendCard from './Card'
export default class portfolio extends Component {
  render() {
    return (
      <div className="contact">
        
        {
          Projects.map(project => (
            <FriendCard
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
