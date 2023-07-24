import React from "react";
import './ChooseCountry.css'

function ChooseCountry() {

    const availableCountries = [
        {
            'countryLogo': 'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2Fimage%20102.png&w=128&q=75',
            'countryName': 'United States'
        },
        {
            'countryLogo': 'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2Fimage%2095.png&w=128&q=75',
            'countryName': 'United Kingdom'
        },
        {
            'countryLogo': 'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2Fimage%20103.png&w=128&q=75',
            'countryName': 'Ireland'
        },
        {
            'countryLogo': 'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2Fimage%2094.png&w=128&q=75',
            'countryName': 'Canada'
        },
        {
            'countryLogo': 'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2Fimage%20106.png&w=128&q=75',
            'countryName': 'Australia'
        },
        {
            'countryLogo': 'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2Fimage%20105.png&w=128&q=75',
            'countryName': 'Germany'
        },
        {
            'countryLogo': 'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2Fimage%20107.png&w=128&q=75',
            'countryName': 'France'
        },
        {
            'countryLogo': 'https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2Fimage%20104.png&w=128&q=75',
            'countryName': 'New Zealand'
        }
    ]

    return (
        <div className='container'>
            <h2 class="trusted_title mt-5">Choose Your Dream Country</h2>
            <div class="ChooseCountry_grid-container">
                {
                    availableCountries.map((countries, index) => (
                        <div class="grid-item1">
                            <img src={countries.countryLogo} key={index} alt={''} className="country-logo" />
                            <p className="country-name"> {countries.countryName}</p>

                        </div>

                    ))
                }

            </div>
        </div>
    )
}
export default ChooseCountry;