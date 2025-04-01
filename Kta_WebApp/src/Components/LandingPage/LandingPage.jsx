import React from 'react'
import './LandingPage.scss'
function LandingPage() {
  return (
    <div className='LandingPage'>



      <div className='LandingLines'>
        <p className='LandingLineHeadding'>
          Innovative Solutions in
          <p>Ceramics, Stone & Surface Care</p>
        </p>
        <p className='LandingLineSubHeadding'>High-quality materials and expert solutions for durability, aesthetics, and protection.
          <br />Trusted by professionals worldwide.</p>
      </div>

      <div className='GradientButton'>
        <p>Explore Our Products </p>
      </div>

      <div className='landingEnding' >
        <div className="redGradient"></div>
        <img src="public/KTABanner.png" className='landingBanner' width={'45%'} alt="" />
        <div className="bannerPodium"></div>
      </div>
      

    </div>
  )
}

export default LandingPage
