import React from 'react';
import Footer from '../Components/Footer';
import './AboutUsPage.css'; // Import your custom CSS file here

const AboutUsPage = () => {

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
              <div className="d-inline-block mb-2 text-primary-emphasis">
                <span className="text-success title">Our Story</span>
              </div>
            <div className="mb-0">
            At We Fund Your Future, we have a proven track record of providing educational loans to support students in pursuing their academic dreams
            </div>
            <span className="float">
              <p className="card-text mb-auto">Our experience in offering educational loans sets us apart as a trusted financial partner for students and their families.
              We offer affordable financing with competitive interest rates. Our streamlined online process makes applying quick and hassle-free.
              We operate with transparency and fairness.Our friendly team is ready to assist you at every step.
              </p>
            </span>
          </div>
          
        </div>
        <div className="col misson-container d-flex flex-column position-static">

              <div className="d-inline-block mb-2 text-primary-emphasis">
                <span className="text-success title">Our Mission</span>
              </div>

            <p className="card-text ">When you choose We Fund Your Future for your educational loan, you benefit from our extensive experience and dedication to helping students fulfill their educational aspirations. Trust us to provide the financial support you need to embark on a successful educational journey.</p>
            <div className="percentage">
              <div>
                <h1>20 +</h1>
                <div>
                  <p>Countries</p>
                </div>
              </div>
              <div>
                <h1>10 +</h1>
                <div>
                  <p>Lenders</p>
                </div>
              </div>
              <div>
                <h1>5k +</h1>
                <div>
                  <p>Loans Facilitated</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0  overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
         
          <div className="col p-4 d-flex flex-column position-static">
          <h4>
              <strong className="d-inline-block mb-2 text-primary-emphasis">
                <b><span className="title normal">Here's why our experience makes us the ideal choice for your educational loan needs:</span></b>
              </strong>
            </h4>
            <h3 className="mb-0 title"><span className="number text-success">01. </span>Specialized Focus</h3>
            <div className="mb-2 text-body-secondary small margin sub-text">We understand the unique financial challenges students face when it comes to funding their education. Our specialized focus on educational loans allows us to cater to the specific needs of students, offering tailored solutions to make education more accessible.</div>
            <h3 className="mb-0 title"><span className="number text-success">02. </span>Extensive Network</h3>
            <div className="mb-2 text-body-secondary small margin">Over the years, we have built strong relationships with educational institutions and organizations, enabling us to collaborate closely with them to streamline the loan application and disbursement process. This network ensures a seamless experience for borrowers.</div>
            <h3 className="mb-0 title"><span className="number text-success">03. </span>Knowledgeable Advisors</h3>
            <div className="mb-2 text-body-secondary small margin"> Our team of loan advisors possesses in-depth knowledge of the education loan landscape. They are well-versed in the intricacies of student financing and can guide borrowers through the application process, repayment options, and other related financial matters</div>
            <h3 className="mb-0 title"><span className="number text-success">04. </span>Customer Success Stories</h3>
            <div className="mb-2 text-body-secondary small margin">Our satisfied customers are a testament to our expertise in providing educational loans. Numerous students have achieved their educational goals with our support, benefiting from our competitive interest rates, flexible repayment plans, and efficient service</div>
            <h3 className="mb-0 title"><span className="number text-success">05. </span>Continuous Improvement</h3>
            <div className="mb-2 text-body-secondary small margin">We continually strive to enhance our educational loan offerings based on feedback and market trends. By staying updated on evolving educational financing needs, we ensure that our loan products align with the changing demands of students and their families.</div>
            <h3 className="mb-0 title"><span className="number text-success">06. </span>Financial Education Initiatives</h3>
            <div className="mb-2 text-body-secondary small margin">We go beyond just providing loans by promoting financial literacy among borrowers. Through various initiatives, we empower students to make informed financial decisions, manage their finances responsibly, and build a strong foundation for their future.</div>
            <h3 className="mb-0 title"><span className="number text-success">07. </span>Longevity and Stability</h3>
            <div className="mb-2 text-body-secondary small margin">With a long-standing presence in the financial industry, We Fund Your Future has established a reputation for stability and reliability. Our commitment to ethical practices, transparency, and fair dealings has earned us the trust of our customers.</div>
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
