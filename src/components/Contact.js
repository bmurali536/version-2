import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// import beautiful from '../images/beautiful.jpg';
import '../components/css/Contact.css';
const Contact = () => {
  return (
    <> 
    <div className='contact'></div>
    <div className="contact-section">
      <div className="butterfly-container">
      <div className="butterfly-container">
          {/* Optional butterfly image */}
          {/* <img src={beautiful} alt="beautiful" /> */}
        </div>
       </div>
      <div className="contact-details">
        <h1>Contact Us</h1>
        <div className="contact-item">
        <FaMapMarkerAlt className="contact1-icon" />
        <p>QualifyIT Solutions<br></br> 
        Floor No.: First Floor
.Flat No.: G2,<br></br>
Name Of Premises/Building: Harsha Homes
Road/Street: Nizampet
Nearby Landmark: Vignan School
Locality/Sub Locality: Venkataraya Nagar
City/Town/Village: Hyderabad
District: Medchal Malkajgiri
State: Telangana
PIN Code: 500090 </p>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <p>+91 8019426810, </p>
          <p>+91 8019426812</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p> info@qualifyitsolutions.com</p>
        </div>
       
      <div className='contact-hours'>
        <h4>WORKING HOURS</h4>
        <p>Mon - Fri: 9am - 6pm<br></br>
​​          Saturday: 9am - 6pm<br></br>
         </p>
      </div>
      </div>
      
    </div></>
  );
};

export default Contact;

 