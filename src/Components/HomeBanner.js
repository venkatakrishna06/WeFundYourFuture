import React, { useState } from 'react';
import ConnectModal from './ConnectModal';
import './HomeBanner.css'; // Import your CSS file with the styles


const HomeBanner = () => {
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

    <section className="HomeBanner_homeBanner__8Wzs_">
      
      <div className="HomeBanner_imageContainer__jGCwF">
        <noscript></noscript>
      </div>
      <div className="HomeBanner_bannerContent__U267C">
        <h1 className="HomeBanner_bannerHeading__LKqDp"> Building Your Path to Success</h1>
        <p className="HomeBanner_bannerSubHeading__xWsg2">BP Finance's Student Loans - Empowering Students with Affordable Educational Funding</p>
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
      {/* <div className="HomeBanner_bannerBottomWrapper__j7nzu">
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
        
      </div> */}





      {/* shows only for small screens */}
      {/* <div className="HomeBanner_bannerBottomWrapper__j7nzu-sm">
        <div className="HomeBanner_googleReview__OobHe-sm">
          <img
            alt="banner"
            src="https://di2vt7hcm6vs0.cloudfront.net/v2/pages/AbroadEducation/google-reviews.svg"
            decoding="async"
            data-nimg="fill"
            sizes="100vw"
          />
          <noscript></noscript>
        </div>

        <div className='reviewItem_container_sm'>
        <div className="HomeBanner_reviewItem__ekYq1-sm">
          <span className="HomeBanner_iconWrapper__qPaUy-sm">
            
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
</svg>
            <noscript></noscript>
          </span>
          <span>
            <p className="HomeBanner_counting__90xWw-sm">800 Cr+</p>
            <p className="HomeBanner_desc__owCdk-sm">Disbursed</p>
          </span>
        </div>
        <div className="HomeBanner_reviewItem__ekYq1-sm">
          <span className="HomeBanner_iconWrapper__qPaUy-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-flag" viewBox="0 0 16 16">
  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/>
</svg>
            <noscript></noscript>
          </span>
          <span>
            <p className="HomeBanner_counting__90xWw-sm">20+</p>
            <p className="HomeBanner_desc__owCdk-sm">Countries</p>
          </span>
        </div>
        <div className="HomeBanner_reviewItem__ekYq1-sm">
          <span className="HomeBanner_iconWrapper__qPaUy-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
  <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
</svg>
            <noscript></noscript>
          </span>
          <span>
            <p className="HomeBanner_counting__90xWw-sm">15+</p>
            <p className="HomeBanner_desc__owCdk-sm">Lenders</p>
          </span>
        </div>
        <div className="HomeBanner_reviewItem__ekYq1-sm">
          <span className="HomeBanner_iconWrapper__qPaUy-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
           
            <noscript></noscript>
          </span>
          <span>
            <p className="HomeBanner_counting__90xWw-sm">5K+</p>
            <p className="HomeBanner_desc__owCdk-sm">Loans </p>
          </span>
        </div>
        
      </div>
      </div> */}
    </section>
  );
};

export default HomeBanner;

