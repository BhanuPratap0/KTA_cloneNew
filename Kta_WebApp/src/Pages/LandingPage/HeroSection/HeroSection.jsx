import React from 'react'
import './HeroSection.css'
import Slider from "react-slick";
function HeroSection() {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        
        
    };
    return (
        <div className="slider-container" id='hero' >
            <Slider {...settings}>
                <div className="heroBannerFirst">
                    <div className='heroBannerFirstBlock'>
                        <div className='heroBannerFirstHeading'>
                            A complete tile fixing solution
                        </div>
                        <div className='heroBannerFirstDetails'>
                            High-quality materials and expert solutions for durability, aesthetics, and protection. <br />Trusted by professionals worldwide.
                        </div>
                        <div className='outline-button'>
                            Explore Our Products
                        </div>
                    </div>


                </div>
                <div className="heroBannerSecond">
                    <div className='heroBannerSecondBlock'>
                        <div className='heroBannerSecondHeading'>
                        Innovative Solutions <br /> in Ceramics, Stone & <br /> Surface Care
                        </div>
                        <div className='heroBannerSecondDetails'>
                        High-quality materials and expert solutions for durability,
                        <br /> aesthetics, and protection. Trusted by professionals worldwide.
                        </div>
                        <div className='outline-button'>
                            Explore Our Products
                        </div>
                    </div>

                </div>
              
                <div className="heroBannerThird">
                    <div className='heroBannerThirdBlock'>
                        <div className='heroBannerThirdHeading'>
                        Innovative Solutions <br /> in Ceramics, Stone & <br /> Surface Care
                        </div>
                        <div className='heroBannerThirdDetails'>
                        High-quality materials and expert solutions for durability,
                        <br /> aesthetics, and protection. Trusted by professionals worldwide.
                        </div>
                        <div className='outline-button'>
                            Explore Our Products
                        </div>
                    </div>

                </div>

            </Slider>
        </div>
    );
}


export default HeroSection
