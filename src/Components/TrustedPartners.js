import React from "react";
import './TrustedPartners.css';

function TrustedPartners() {

    const trustedPartners = [
        {
            'partnerLogo' : 'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FPartners%2FHDFC.jpg&w=640&q=75'
        }
        ,{
            'partnerLogo': 'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FPartners%2FAvanse.jpg&w=640&q=75'
        },{
            'partnerLogo':'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FPartners%2FInCred.jpg&w=640&q=75'
        },
        {
            'partnerLogo':'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FPartners%2FCredenc.jpg&w=640&q=75'
        },
        {
            'partnerLogo':'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FPartners%2FICICI.jpg&w=640&q=75'
        },
        {
            'partnerLogo':'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FPartners%2FAxis.jpg&w=640&q=75'
        },
        {
            'partnerLogo':'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FPartners%2FProdigy.jpg&w=640&q=75'
        },
        {
            'partnerLogo':'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FPartners%2FIDFC.jpg&w=640&q=75'
        },

        {
            'partnerLogo':'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FPartners%2FMPower.jpg&w=640&q=75'
        },
        {
            'partnerLogo':'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FPartners%2FBOB.jpg&w=640&q=75'
        },



    ]




    return (
        <div class="container">
            <h2 class="trusted_title">Our Trusted <span class="lending-color">Lending Partners</span></h2>
        <p className="trusted_subtitle">Loans can be intimidating, we know. We only partner with top banks and partners you can rely on.</p>
            <div class="grid-container">
            {trustedPartners.map((partner, index) => (
         <div class="grid-item" ><img clasName='grid-item' src={partner.partnerLogo} key={index} alt="" /></div>
        ))}
                
            </div>
        </div>





    )

}
export default TrustedPartners;