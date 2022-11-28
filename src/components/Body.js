import React from "react";
import'./Body.css';

const Body=()=>{
    return(
        <div className="container-body">
            <div className="left-block">
                <h1>
                    Design a StandOut Resume 
                </h1>
                <h2>within <span className="yellow-five">five minutes</span></h2>
                <p className="hired">and get hired</p>
         
                    <p className="button">build you resume</p>
                    <p className="button">see examples</p>


            </div>
            <div className="right-block">
                <img className="resume-pics" src="https://www.resumonk.com/assets/template-thumbnails/elemental-9a290f22da422ad3ea13363a7b2daff2857371ee649115e5e28f4a4414c640a4.jpg"
                alt="" />
            </div>
            
         
        </div>
        
    )
}
export default Body;