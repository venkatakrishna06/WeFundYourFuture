import React from "react";
import './HowItWorks.css';

function HowItWorks(){
    return(
<div className="howItWorksContainer container">
      <div className="HowItWorks_leftContainer">
        <img src="https://i.ibb.co/k1Ws6Mt/how-It-Works-img.png" alt="" /> 
      </div>
      <div className="HowItWorks_rightContainer">
        <div className="HowItWorks_rightContent">
            <h2 className="right_title"> How it works?</h2>
            <div className="HowItWorks_steps">
            </div>
        </div>
      </div>
    </div> 
    );

}
export default HowItWorks;