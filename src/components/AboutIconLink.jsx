import React from "react";
import {FaInfo } from 'react-icons/fa'
import { Link } from "react-router-dom";

function AboutIconLink(){
    return (
        <div className="about-link">
            <Link to={{
                pathname:"/about",
                search:"123345876",
                hash:"#hello"
            }}>
                <FaInfo  size={30} className="fainfo"/>
            </Link>
            {/* <Link to='/about'>
                <FaQuestion size={20}/>
            </Link> */}
            {/* <a href="/about">
            <FaQuestion size={20}/>
            </a> */}
        </div>
    )
}

export default AboutIconLink


