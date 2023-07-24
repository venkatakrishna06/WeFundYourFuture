import React, { useState } from 'react';
import ConnectModal from './ConnectModal';
import './HomeBanner.css'; // Import your CSS file with the styles


const HomeBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (

    <section className="HomeBanner_homeBanner__8Wzs_" data-component="HeroBanner">
      
      <div className="HomeBanner_imageContainer__jGCwF">
        <img
          alt="Banner"
          data-element="Image"

          src="https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2FhomeBannerNew.png&w=3840&q=75"
          decoding="async"
          data-nimg="fill"
          sizes="100vw"
          srcSet="
          https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2FhomeBannerNew.png&w=640&q=75 640w,
          https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2FhomeBannerNew.png&w=750&q=75 750w,
          https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2FhomeBannerNew.png&w=828&q=75 828w,
          https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2FhomeBannerNew.png&w=1080&q=75 1080w,
          https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2FhomeBannerNew.png&w=1200&q=75 1200w,
          https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2FhomeBannerNew.png&w=1920&q=75 1920w,
          https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2FhomeBannerNew.png&w=2048&q=75 2048w,
          https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FLanding%20Page%2FAssets%2FhomeBannerNew.png&w=3840&q=75 3840w"
         
        />
        <noscript></noscript>
      </div>
      <div className="HomeBanner_bannerContent__U267C">
        <h1 className="HomeBanner_bannerHeading__LKqDp">Funding Dreams<br /> Fuelling Careers</h1>
        <p className="HomeBanner_bannerSubHeading__xWsg2">Fuel Your Career By Funding Your Abroad Education With Us</p>
        <div className="HomeBanner_statsWrapper__kalzE">
          <div className="HomeBanner_listWrapper__40RV8">
            <span className="HomeBanner_iconWrapper__qPaUy">
              <img className='greenTick_bg'
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2712%27/%3e"
                
                
              />
              <img className='greenTick_icon'
                alt="banner"
                src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg"
                decoding="async"
                data-nimg="intrinsic"
                srcSet="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg 1x, https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg 2x"
                
              />
              <noscript></noscript>
            </span>
            <p className="HomeBanner_listText__JbAa7" data-cy="heroSection-list">Non Collateral Loans</p>
          </div>
          <div className="HomeBanner_listWrapper__40RV8">
            <span className="HomeBanner_iconWrapper__qPaUy">
              <img className='greenTick_bg'
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2712%27/%3e"
               
              />
              <img className='greenTick_icon'
                alt="banner"
                src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg"
                decoding="async"
                data-nimg="intrinsic"
                srcSet="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg 1x, https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg 2x"
                
              />
              <noscript></noscript>
            </span>
            <p className="HomeBanner_listText__JbAa7" data-cy="heroSection-list">Dollar Loans</p>
          </div>
          <div className="HomeBanner_listWrapper__40RV8">
            <span className="HomeBanner_iconWrapper__qPaUy">
              <img className='greenTick_bg'
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2712%27/%3e"
               
              />
              <img className='greenTick_icon'
                alt="banner"
                src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg"
                decoding="async"
                data-nimg="intrinsic"
                srcSet="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg 1x, https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg 2x"
                
              />
              <noscript></noscript>
            </span>
            <p className="HomeBanner_listText__JbAa7" data-cy="heroSection-list">Quick Loan Approvals</p>
          </div>
          <div className="HomeBanner_listWrapper__40RV8">
            <span className="HomeBanner_iconWrapper__qPaUy">
              <img className='greenTick_bg'
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2712%27/%3e"
               
              />
              <img className='greenTick_icon'
                alt="banner"
                src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg"
                decoding="async"
                data-nimg="intrinsic"
                srcSet="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg 1x, https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/greenTick.svg 2x"
                
              />
              <noscript></noscript>
            </span>
            <p className="HomeBanner_listText__JbAa7" data-cy="heroSection-list">Loan Up To 1.5Cr</p>
          </div>
          
         
        </div>
        <button className="HomeBanner_bannerBtnDesktop__K9OFK">
          <p className="HomeBanner_btnText__yMOPW" onClick={openPopup}>Book Free Consultation</p>
          <ConnectModal isOpen={isOpen} onRequestClose={closePopup} />
        </button>


       
      </div>
      <div className="HomeBanner_bannerBottomWrapper__j7nzu">
        <div className="HomeBanner_googleReview__OobHe">
          <img
            alt="banner"
            src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/AbroadEducation/google-reviews.svg"
            decoding="async"
            data-nimg="fill"
            sizes="100vw"
          />
          <noscript></noscript>
        </div>
        <div className="HomeBanner_reviewItem__ekYq1">
          <span className="HomeBanner_iconWrapper__qPaUy">
            <img className='reviewItemIcon_bg'
              alt=""
              aria-hidden="true"
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e"
             
            />
            <img className='reviewItemIcon'
              alt="banner"
              src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/money.svg"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/money.svg 1x, https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/money.svg 2x"
              
            />
            <noscript></noscript>
          </span>
          <span>
            <p className="HomeBanner_counting__90xWw">800 Cr+</p>
            <p className="HomeBanner_desc__owCdk">Disbursed</p>
          </span>
        </div>
        <div className="HomeBanner_reviewItem__ekYq1">
          <span className="HomeBanner_iconWrapper__qPaUy">
            <img className='reviewItemIcon_bg'
              alt=""
              aria-hidden="true"
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e"
            />
            <img className='reviewItemIcon'
              alt="banner"
              src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/money.svg"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/money.svg 1x, https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/money.svg 2x"
            
            />
            <noscript></noscript>
          </span>
          <span>
            <p className="HomeBanner_counting__90xWw">800 Cr+</p>
            <p className="HomeBanner_desc__owCdk">Disbursed</p>
          </span>
        </div>
        <div className="HomeBanner_reviewItem__ekYq1">
          <span className="HomeBanner_iconWrapper__qPaUy">
            <img className='reviewItemIcon_bg'
              alt=""
              aria-hidden="true"
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e"
          
            />
            <img className='reviewItemIcon'
              alt="banner"
              src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/money.svg"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/money.svg 1x, https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/money.svg 2x"
              
            />
            <noscript></noscript>
          </span>
          <span>
            <p className="HomeBanner_counting__90xWw">800 Cr+</p>
            <p className="HomeBanner_desc__owCdk">Disbursed</p>
          </span>
        </div>
        <div className="HomeBanner_reviewItem__ekYq1">
          <span className="HomeBanner_iconWrapper__qPaUy">
            <img className='reviewItemIcon_bg'
              alt=""
              aria-hidden="true"
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e"
             
            />
            <img className='reviewItemIcon'
              alt="banner"
              src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/money.svg"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/money.svg 1x, https://di2vt7hcm6vs0.cloudfront.net/v2/pages/Landing%20Page/Assets/money.svg 2x"
              
            />
            <noscript></noscript>
          </span>
          <span>
            <p className="HomeBanner_counting__90xWw">800 Cr+</p>
            <p className="HomeBanner_desc__owCdk">Disbursed</p>
          </span>
        </div>
        
      </div>
    </section>
  );
};

export default HomeBanner;

