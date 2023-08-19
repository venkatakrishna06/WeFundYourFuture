import React from 'react';
import Footer from '../Components/Footer';
import './T&CPage.css';

function TermsAndConditionsPage() {
    return (

        <div className="main">
            {/* Logo */}
            <header>
                <div className="logo_div1">
                    {/* <div className="logo_dv2"> */}
                    <img className="logo" src="logo.png" alt="" />
                    {/* </div> */}
                </div>

                {/* Header Section */}
                <h1 className="TAndCheading">Privacy Policy</h1>

            </header>

            {/* Content Section */}
            <div className="container">


                <p className="TAndCsub_heading">1. Introduction</p>
                <p className="para">This Privacy Policy outlines how We Fund Your Future ("we," "our," or "us") collects, uses, discloses, and safeguards the personal information of students ("you" or "your") in accordance with the applicable laws and regulations in India, including but not limited to the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("Privacy Rules").</p>

                <p class="TAndCsub_heading">2.	Information We Collect</p>
                <p class="para"> We collect various types of personal information from students for the purpose of Student Loan, Communication. The types of information we may collect include, but are not limited to:</p>
                <p class="para">(a)	 Full name </p>
                <p class="para">(b)	Date of birth</p>
                <p class="para">(c)	Contact details (address, email, phone number)</p>
                <p class="para">(d)	Parent/guardian information</p>
                <p class="para">(e)	Educational history</p>
                <p class="para">(f)	Photographs and identification documents</p>
                <p class="para">(g) Special category data (if applicable, e.g., health information, disabilities)</p>


                <p class="TAndCsub_heading">3. Purpose of Data Collection</p>
                <p class="para">We collect and process your personal information for the following purposes:</p>
                <p class="para">(a)	Student enrollment and administration</p>
                <p class="para">(b)	Providing educational services and support</p>
                <p class="para">(c)	Communication related to educational matters</p>
                <p class="para">(d)	Compliance with legal and regulatory requirements</p>
                <p class="para">(e)	Improvement of our educational programs and services</p>





                <p className="TAndCsub_heading">4. Consent</p>
                <p className="para">
                    By providing us with your personal information, you consent to the collection, use, and processing of your information as described in this Privacy Policy. If you are below the age of 18, please obtain consent from your parent/guardian before providing any personal information.
                </p>



                <p className="TAndCsub_heading">5. Data Security</p>
                <p className="para">
                    We take appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or storage system can be guaranteed to be 100% secure.        </p>


                <p className="TAndCsub_heading">6. Data Sharing and Disclosure</p>
                <p className="para">
                    We may share your personal information with the following parties, only for the purposes stated in this Privacy Policy:</p>
                    <p class="para">(a)	Educational partners and institutions</p>
                    <p class="para">(b)	Service providers assisting with administrative and technical functions</p>
                    <p class="para">(c)	Legal and regulatory authorities when required by law</p>
                    <p class="para">(d)	Parents/guardians (in case of minors)</p>





                    <p className="TAndCsub_heading">7. Retention of Data</p>
                <p className="para">
                We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law.


                </p>



                <p className="TAndCsub_heading">8. Your Rights</p>
                <p className="para">
                You have certain rights regarding your personal information, including the right to access, rectify, delete, or restrict its processing. To exercise these rights, please contact us using the contact information provided below.

                </p>



                <p className="TAndCsub_heading">9. Changes to this Policy</p>
                <p className="para">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any significant changes through appropriate means.



                </p>

                <p className="TAndCsub_heading">10. Contact Us </p>
                <p className="para">
                If you have any questions, concerns, or requests related to this Privacy Policy or your personal information, please contact us at:



                </p>
                <p className="para">
<a href='mailto:contact@wefundyourfuture.com' >contact@wefundyourfuture.com</a>


                </p>



                <p className="TAndCsub_heading">11. Governing Law</p>
                <p className="para">
                This Privacy Policy is governed by the laws of India. Any disputes arising under or in connection with this Privacy Policy shall be subject to the exclusive jurisdiction of the courts of India.

                </p>

                <p className="para">
                * By continuing to use our services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                </p>


            </div>
            <Footer></Footer>
        </div>
    );
};




export default TermsAndConditionsPage;
