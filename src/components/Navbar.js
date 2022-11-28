import React from "react";
import'./Navbar.css';
import 'font-awesome/css/font-awesome.min.css';   

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar=()=>{
    return (
        <div className="container">
                <div className="container-items">
                    <div className="left">
                        <h2 className="min">5 min</h2>
                        <h2>CV Builders</h2>
                    </div>

                    <div className="middle">
                        <ul>
                            <li>resume</li>
                            <li>cv</li>
                            <li>coverletter</li>
                            <li>blog</li>
                            <li>about</li>
                            <li>pricing</li>
                        </ul>
                    </div>
                    <div className="right">
                        <div className="search-sign">
                            <FontAwesomeIcon icon="fa-light fa-magnifying-glass" />
                            <p>| sign in</p>
                        </div>
                    </div>
                </div>
                <div className="container-circle">
                    <div className="yellow-circle"></div>
                </div>
         
        </div>
    );
}
export default Navbar;