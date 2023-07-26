import React from "react";
import ChooseCountry from "../Components/ChooseCountry";
import Footer from "../Components/Footer";
import HomeBanner from "../Components/HomeBanner";
import HowItWorks from "../Components/HowItWorks";

import TrustedPartners from "../Components/TrustedPartners";
import WhyChooseUs from "../Components/WhyChooseUs";
import './HomePage.css';

function HomePage() {

    return (
        <div>
            <HomeBanner></HomeBanner>
            <HowItWorks></HowItWorks>
            <TrustedPartners></TrustedPartners>
            <WhyChooseUs></WhyChooseUs>
            <ChooseCountry></ChooseCountry>
            <Footer></Footer>
        </div>


    )
}
export default HomePage;
