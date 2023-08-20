import React from "react";
import './TrustedPartners.css';
import hdfc from '../assets/hdfc.png'
import avanse from '../assets/avanse.png'
import incred from '../assets/incred.png'
import auxilo from '../assets/auxilo.png'
import mpower from '../assets/mpower.png'
function TrustedPartners() {

    const trustedPartners = [
        {
            'partnerLogo' : hdfc
        }
        ,{
            'partnerLogo': avanse
        },{
            'partnerLogo':incred
        },
        
        {
            'partnerLogo':auxilo
        },

        {
            'partnerLogo':mpower
        }


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
