import React, { useState } from 'react';
import ConnectModal from './ConnectModal';
import './HowItWorks.css';
import './test.css';
function HowItWorks() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    window.location.reload(false);
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <div className="howItWorksContainer container">
      <div className="HowItWorks_leftContainer">
        <img src="https://i.ibb.co/k1Ws6Mt/how-It-Works-img.png" alt="" />
      </div>
      <div className="HowItWorks_rightContainer">
        <div className="HowItWorks_rightContent">
          <h2 className="HowItWorks_title"> How it works?</h2>
          <div className="steps-container">
            <div className="title-div">
              <p>Step 1</p>
            </div>
            <div className="dot-div">
              <div className="dot"></div>

            </div>
            <div className="icon-text-div">
              <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
              </div>
              <div className="step-text">
                <p>Get in touch with our experts.</p>
              </div>
            </div>
          </div>
          <div className="steps-container">
            <div className="title-div">
              <p>Step 2</p>
            </div>
            <div className="dot-div">
              <div className="dot"></div>

            </div>
            <div className="icon-text-div">
              <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
              </div>
              <div className="step-text">
                <p>Upload Your Documents & Complete KYC.</p>
              </div>
            </div>
          </div>
          <div className="steps-container">
            <div className="title-div">
              <p>Step 3</p>
            </div>
            <div className="dot-div">
              <div className="dot"></div>

            </div>
            <div className="icon-text-div">
              <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
</svg>
              </div>
              <div className="step-text">
                <p>Get your loan sanctioned within 2-5* working days.</p>
              </div>
            </div>
          </div>
          <div className="steps-container">
            <div className="title-div">
              <p>Step 4</p>
            </div>
            <div className="dot-div">
              <div className="dot"></div>

            </div>
            <div className="icon-text-div">
              <div className="icon">
                {/* <img
                  src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/phone.svg"
                  alt="Icon"
                // Add any additional styles for the icon here
                /> */}
               <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
  <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
</svg>
              </div>
              <div className="step-text">
                <p>Success! Our expert algorithm matches you to the ideal lending partner at the best possible interest rate.</p>
              </div>
            </div>
          </div>


        </div>


        <button className="HomeBanner_bannerBtnDesktop__K9OFK connectWithUsBtn">
          <p className="HomeBanner_btnText__yMOPW" onClick={openPopup}>Connect with us</p>
          <ConnectModal isOpen={isOpen} onRequestClose={closePopup} />
        </button>


        

      </div>




      
    
    </div>
  );

}
export default HowItWorks;