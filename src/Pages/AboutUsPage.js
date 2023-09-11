import React,{useState} from 'react';
import Footer from '../Components/Footer';
import './AboutUsPage.css';
import ConnectModal from '../Components/ConnectModal';

const AboutUsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {

    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

    return(

        <div class="about-container">
         <div className="hero-container">
      <img className="hero-image" src="https://cdn.pixabay.com/photo/2013/09/06/09/19/sunset-179392_1280.jpg" alt="Hero Image" />
      <div className="text-overlay">
        <h1>Live a Happy & <br/> Carefree Student life</h1>
        {/* <p>We Fund Your Future, we have a proven track record of providing educational loans to support students in pursuing their academic dreams</p> */}
      </div>
    </div>



    <div className="container">
    <div className="row mb-2">
      <div className="col-md-6">
        <div className="row g-0  overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
          <div className="mb-0">
          Welcome to We Fund Your Future, your trusted partner in achieving your educational dreams. We understand that education is the key to a brighter future, and we are dedicated to helping you access the financial support you need to pursue your educational goals            </div>
              <div className="d-inline-block mt-3 text-primary-emphasis">
                <span className="text-success title">Who We Are</span>
              </div>
           
            <span className="float">
              <p className="card-text mb-auto">At We Fund Your Future, we are a team of dedicated professionals who act as Direct Selling Agents (DSAs) for educational loans. We have a passion for empowering individuals to reach their full potential through education, and we believe that financial barriers should never stand in the way of learning.
              </p>
            </span>


            <div className="d-inline-block mt-3 text-primary-emphasis">
                <span className="text-success title">Our Mission:</span>
              </div>
           
            <span className="float">
              <p className="card-text mb-auto">Our mission is simple yet powerful: to make quality education accessible to everyone. We are committed to assisting students, parents, and institutions in securing the necessary funding to pursue higher education. Through our expertise and partnerships with leading financial institutions, we aim to simplify the loan application process and provide tailored solutions that fit your unique needs.
              </p>
            </span>


            <div className="d-inline-block mt-3 text-primary-emphasis">
               <span className="text-success title">What We Offer:</span>
              </div>
           
            <span className="float">
              <p className="card-text mb-auto">
                <ol>
                  <li  > <span style={{fontFamily: 'Gotham Medium'}}>Expert Guidance </span>: Our team of experienced financial advisors will guide you through the loan application process, ensuring you have all the information you need to make informed decisions</li>
                  <li><span style={{fontFamily: 'Gotham Medium'}}>Customer-Centric Approach</span>: We understand that every student's financial situation is unique. We work closely with you to tailor loan options that align with your specific requirements.</li>
                  <li><span style={{fontFamily: 'Gotham Medium'}}>Innovation</span>: We have established strong relationships with a network of reputable financial institutions, allowing us to connect you with lenders offering competitive interest rates and flexible repayment terms</li>
                  <li><span style={{fontFamily: 'Gotham Medium'}}>Partnerships</span>: We uphold the highest standards of transparency and ethics in all our interactions. You can trust us to provide honest advice and ensure that your interests are always at the forefront.</li>
                </ol>
              </p>
            </span>









          </div>
          
        </div>
       
      </div>
      <div className="col-md-6">
        <div className="row g-0  overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
         
          <div className="col p-4 d-flex flex-column position-static">
      
              
            <span className="text-success title mb-2">Why Choose Us: </span>
        
         
            <h3 className="mb-0 title"><span className="number text-success">01. </span>Experience : </h3>
            <div className="mb-2 text-body-secondary small margin sub-text">With years of experience in the education financing industry, we have the knowledge and expertise to navigate the complexities of loan applications.</div>
            <h3 className="mb-0 title"><span className="number text-success">02. </span>Customer-Centric Approach : </h3>
            <div className="mb-2 text-body-secondary small margin sub-text">Your satisfaction is our priority. We are committed to providing exceptional customer service and support throughout your educational journey</div>
            <h3 className="mb-0 title"><span className="number text-success">03. </span>Innovation :</h3>
            <div className="mb-2 text-body-secondary small margin sub-text"> We stay updated with the latest trends and technologies in education financing to offer you the most efficient and convenient solutions.</div>
            <h3 className="mb-0 title"><span className="number text-success">04. </span>Partnerships : </h3>
            <div className="mb-2 text-body-secondary small margin sub-text">Our strong partnerships with leading banks and financial institutions mean you have access to a wide range of loan options</div>
          
          
            <span className="text-success title"  style={{marginTop: '15px'}}>Contact Us : </span>
            <span className="float">
              <p className="card-text mb-auto">Ready to take the next step in your educational journey? Contact us today to explore your financing options and kickstart your future.
              </p>
            </span>


            <button className="HomeBanner_bannerBtnDesktop__K9OFK connectWithUsBtn">
          <p className="HomeBanner_btnText__yMOPW" onClick={openPopup}>Connect with us</p>
          <ConnectModal isOpen={isOpen} onRequestClose={closePopup} />
        </button>



          
          
          </div>
          

          
        </div>
      </div>
    </div>
    
  </div>
<Footer></Footer>

           </div>
    
    )

};

export default AboutUsPage;
