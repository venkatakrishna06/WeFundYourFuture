import React from "react";
import './SubmitSuccessPage.css';
import Footer from "../Components/Footer";
function SubmitSuccessPage(){
    return(

<div className='SuccessContent'>
  <div className="wrapper-1">
    <div className="wrapper-2">
      <h1>Thank you for choosing <span style={{ color: '#55a630'}}>We Fund</span>  <span style={{ color: '#184e77'}}>Your Future!</span> </h1>
      <p> Our representative will get back to you shortly </p>
      
    </div>
   
</div>


{/* <h1 className="container" style={{  fontSize: '35px', marginTop:'5%', textAlign:'center'}}>Reach Us On</h1> */}


<div className="successPage-container">
      <div className="successPage-box">
        <div className="successPage-heading">
          <div className="successPage-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg></div>
          <h2 className="successPage-heading-text">Phone</h2>
        </div>
        <div className="successPage-subheading-text">Call us for any kind of requirement like booking or partnership</div>
        <a href="tel:+918977523525">
        <button className="successPage-button">+918977523525</button></a>
      </div>
      
      <div className="successPage-box">
        <div className="successPage-heading">
          <div className="successPage-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg></div>
          <h2 className="successPage-heading-text">Email</h2>
        </div>
        <div className="successPage-subheading-text">If you have any general enquiry please email us at </div>
        <a href="mailto:contact@wefundyourfuture.com">
        <button className="successPage-button">contact@wefundyourfuture.com</button></a>
      </div>
    </div>
    <Footer></Footer>
</div>



    )
}
export default SubmitSuccessPage;
