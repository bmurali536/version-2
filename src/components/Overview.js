import React from 'react';
import './css/Overview.css';  
import home1Image from '../images/medical-banner-with-doctor-wearing-goggles.jpg'; 

import pharmaImage from '../../src/images/pharma.jpg';
import { RiH4 } from 'react-icons/ri';
import back from '../images/home1.jpg';

const Overview = () => {
    return (
        <div className='main-overview'>
            <div className="box">
                QUALIFYIT SOLUTIONS
            </div>
            <div className='background-image'></div>
            <div className="overview_main">COMPANY OVERVIEW</div>
            {/* <div className="overview_name">QUALIFYIT SOLUTIONS <br /> </div> */}
            <p className='overview_para'>
                       Qualify IT Solutions is a startup company in engineering & design,
                having successfully executed CSV & CQV projects in Infra, Pharma, Biotechnology, and software industries. Qualify IT Solutions provides expert delivery of world-class Pharma Facilities. Our team of CSV & CQV engineers is skilled at
                taking your project from concept to operation, providing local support with global subject matter expertise. Qualify IT Solutions will deliver a cost-effective design to meet regulatory requirements.
                Qualify IT Solutions provides services for the validation of process equipment, utilities, control systems, and facilities determined to be GXP and Non-GXP systems used in pharmaceutical manufacturing facilities.
            </p>
            <div className="contrib_head">Our Contributions</div>
            <div className="tag_line">Industries We Serve!</div>
            <div className='pharma-image'>
                <img src={pharmaImage} alt="CSV" />
            </div>
        </div>
    );
};

export default Overview;
