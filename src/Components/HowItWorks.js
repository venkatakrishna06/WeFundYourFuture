import React from "react";
import './HowItWorks.css';

function HowItWorks(){
    return(
<div className="howItWorksContainer container">
      <div className="HowItWorks_leftContainer">
        <img src="https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2FHow%20it%20works.jpg&w=1200&q=75" alt="" /> 
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