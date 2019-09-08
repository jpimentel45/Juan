import React, { Component } from 'react'
import { Link,  } from "react-router-dom";
import './style.css'
import Github from '../../img/Github.png'
import Email from '../../img/Email.png'
import In from '../../img/In.png'
import Cell from '../../img/Cell.png'
import Resume from '../../img/Resume.png'
function Footer() {
   
        return (
            <div className='footer'>
            <section className='handles'>
                    <section className="sideLink"><a className='sideLink' href='https://github.com/jpimentel45'><img src={Github} /> </a></section>
                    <section className="sideLink"><a className='sideLink' href='https://docs.google.com/document/d/14VVbhMEZ_JHmCkSRLPLrCSudXzltWoK_NjKCNAFrSD0/edit?usp=sharing'><img src={Resume} /></a></section>
                    <section className="sideLink"><a className='sideLink' href='https://www.linkedin.com/in/1ito/'><img src={In} /> </a></section>
                    <section className="sideLink"><a className='sideLink' href='tel:3235924139'><img src={Cell} /> </a></section>
                    <section className="sideLink"><a className='sideLink' href='mailto:jpimentel45@gmail.com'><img src={Email} /> </a></section>
                </section>
            </div>
        )
    
}

export default Footer
