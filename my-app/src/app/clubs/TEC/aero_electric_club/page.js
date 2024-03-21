import React from 'react';
import './page.css';

import Footer from '../../../Components/Footer/page';

const page = () => {
  return (
    <div className='club-page'>
        <div className="club-page-in">
            <div className="club-page-header">
                <div className="club-page-header-in">
                    <div className="club-page-header-in-one">
                        <h3>Technology Club</h3>
                        <h1>AeroElectric Club</h1>
                        <h4>Managed by: <span>Amarnadh Denugurala - 2100031817</span></h4>
                    </div>
                    <div className="club-page-header-in-two">
                        <h1>Department of Student Activity Center</h1>
                        <span>A department where learning occurs beyond the confines of the traditional classroom walls</span>
                    </div>
                </div>
            </div>

            <div className="club-page-in-one">
                <div className="club-page-in-one-one">
                    <img className='club-page-in-one-one-img' src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="club-page-in-one-two">
                    <div className="club-page-in-one-two-in">
                        <h2>What is AeroElectric Club?</h2>
                        <p>Welcome to Aero Electric, your gateway to the exciting worlds of drones and electric vehicles (EVs)! Our club offers hands-on learning and exploration, providing students with opportunities to delve into these cutting-edge technologies in an engaging manner. In our drone program, you'll learn everything from the basics of flight to advanced techniques in drone design and programming. Build and fly your own drones, capture stunning aerial photos, and discover the endless possibilities of unmanned aerial vehicles. In the electric vehicle track, we'll guide you through the fundamentals of EV technology, from battery systems to motor controllers. Get your hands dirty as you work on electric bicycles, EV conversions, and more, all while learning about sustainable transportation solutions for the future. At Aero Electric, we're more than just a club—we're a community of passionate individuals who love technology and innovation. Join us on this exciting journey of discovery and creativity as we explore the future together!</p>
                    </div>
                </div>

            </div>
            <div className="club-page-last">
            <h4>AeroElectric Clubs: Your tech hub at K L Deemed University. Explore drones and EVs. All rights reserved. Copyright 2024.</h4>
            </div>
        </div>

        <Footer />

    </div>
  )
}

export default page