import React from "react";
import "./style.css";

function FriendCard(props) {
    return (
        <div className="card" >
    
            <div className="img-container">
                <img alt={props.name} src={props.image} />
        <div className='children'>
                <a href={props.link}>
                <h5>{props.text}</h5>
                </a>
                <h6>{props.description}</h6>
                <a href={props.hub}>
                <h5>{props.git}</h5>
                </a>
                </div>
            </div>
        </div>
    );
}

export default FriendCard;