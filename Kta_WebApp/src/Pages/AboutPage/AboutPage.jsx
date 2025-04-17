import ContactNav from '@/Components/ContactNav/ContactNav'
import NavBar from '@/Components/NavBar/NavBar'
import React from 'react'
import './AboutPage.scss'
import CenterSlider from '@/Components/Slider/CenterSlider'
import SecondFadeSlider from '@/Components/Slider/SecondFadeSlider'
import FooterSection from '../LandingPage/FooterSection/FooterSection'

function AboutPage() {
    return (
        <div>
            <ContactNav />
            <NavBar />

            <div id='heroBanner'>
                <img src="./src/Assets/AboutPage/heroBanner.png" alt="" />
            </div>

            <div id='ourStorySection' className='container'>
                <div>
                    <p className='ourStoryHeading'>Our Story</p>
                    <p className='ourStoryDesc'>At KTA Solutions, we provide high-performance adhesives, grouts, and tools for seamless tile installation. Designed for professionals and homeowners, our durable, easy-to-use products ensure flawless results with reliability and efficiency.</p>
                </div>

                <div>
                    <img src="./src/Assets/AboutPage/ourStoryProp.png" alt="" />
                </div>

            </div>

            <div id='mission' >
                <div className='missionBlock'>
                    <div className='missionHeading'>
                        <img src="./src/Assets/AboutPage/missionSVG.svg" alt="" />
                        <p>Mission</p>
                    </div>
                    <p className='missionDesc'>To provide premium, sustainable, and innovative solutions in ceramics, stone care, and surface protection that enhance durability, aesthetics, and functionality.</p>
                </div>

                <div className='missionBlock'>

                    <div className='missionHeading'>
                        <img src="./src/Assets/AboutPage/visionSVG.svg" alt="" />
                        <p>Vision</p>
                    </div>
                    <p className='missionDesc'>To be a global leader in advanced material solutions, setting industry benchmarks for quality, sustainability, and customer satisfaction.</p>
                </div>
            </div>

            <div id='fixingSolution' className=' container'>
                <p className='fixingSolHeading'>A Complete<span> Fixing</span> Solution.</p>

                <div className='fixingSolCards '>
                    <div className='fixingSolCard'>
                        <img src="./src/Assets/AboutPage/fixingSolFirst.svg" alt="" />
                        <p className='fixingSolCardHeading'>Expertise & Innovation</p>
                        <p className='fixingSolCardDesc '>Years of experience in material science and surface technology.</p>
                    </div>
                    <div className='fixingSolCard'>
                        <img src="./src/Assets/AboutPage/fixingSolSecond.svg" alt="" />
                        <p className='fixingSolCardHeading'>High-Quality Materials</p>
                        <p className='fixingSolCardDesc '> Our products are engineered to meet global standards.</p>
                    </div>
                    <div className='fixingSolCard'>
                        <img src="./src/Assets/AboutPage/fixingSolThird.svg" alt="" />
                        <p className='fixingSolCardHeading'>Sustainability Commitment</p>
                        <p className='fixingSolCardDesc '>Eco-friendly solutions with minimal environmental impact.</p>
                    </div>
                    <div className='fixingSolCard'>
                        <img src="./src/Assets/AboutPage/fixingSolFourth.svg" alt="" />

                        <p className='fixingSolCardHeading'>Customer Support</p>
                        <p className='fixingSolCardDesc '>Dedicated professionals guiding you at every step.</p>

                    </div>
                </div>
            </div>


            <div id='movement' className='container'>
                <div className='movementHeader'>
                    <p className='movementTopHeading' >HEY!</p>
                    <p className='movementHeading'>Join the Movement</p>
                    <p className='movementDesc'> Surfaces are more than just materials—they tell a story. Let’s make yours one of resilience, beauty, and innovation.</p>
                </div>

                <CenterSlider />
<div className='buttonContainer'>

                <div className='outline-button'>Explore our World</div>
</div>
            </div>

            <SecondFadeSlider />
            <FooterSection />


        </div>
    )
}

export default AboutPage
