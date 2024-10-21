import React from 'react';
import './css/About.css'; // Import your CSS file
import aboutImage from '../images/about.jpg'; // Import the image
import Title from './Title';

import iso1image from '../images/iso4.jpeg'; // Import the ISO image
import iso3image from '../images/iso3.jpg.jpeg'; // Corrected extension from 'pjg' to 'jpg'


const About = () => {
  return (
    <div className="about-container">
      {/* About section with background image */}
      
      <div className='about_h1'>
      <img src={aboutImage} alt="About Us" className="about-image" />
      <h1 id='h1'>ABOUT</h1>
      </div>
      <div className="about-text">
        <h1>   Qualify IT Solutions About</h1>
        <p>
          My Site is a locally-owned business dedicated to providing top-notch services to our community. We take pride in our work and strive to ensure the satisfaction of every customer. Our team 
          is committed to making your experience smooth and stress-free, from start to finish.
        </p>
      </div>
      <div>
      <Title subTitle='Our PROGRAM' title='Value Proposition for Validation and Training Services'/>

      </div>
      <div className='valu' >
      <h3> In today's highly regulated pharmaceutical and life sciences industries, ensuring compliance with stringent standards is critical. Our comprehensive service offering, which includes Computer System Validation (CSV),
         Equipment Qualification, Excel Validation, and Pharmaceutical Training, provides unmatched value by enabling organizations to achieve and maintain regulatory compliance 
        efficiently and effectively.</h3>
      
      </div>
      <div className='partner'> 
      <Title subTitle='Our PROGRAM' title='Qualify IT Solutions  Partner Products'/>
      <h3> We partner with Pharmaceuticals with Good knowledge and extensive experience in their respective domains. We offer complete life cycle support on our partner products right from solution through to supply, implementation, training, technical support, migration and upgrade</h3>


      </div>
       <div className='iso' > <h1>Iso Certification </h1></div>
      {/* ISO Images Side by Side */}
      <div className="iso-container">
         <img src={iso1image} alt="ISO Certification" id="about-certificates-img" />
        <img src={iso3image} alt="ISO Certification 2" id="about-certificates-img" />
       </div>
    </div>
  );
}

export default About;
