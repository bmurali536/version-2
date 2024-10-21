import React, { useState, useEffect } from 'react';
import './css/top.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function TopInfo(){
    return(
        <>
        <div className="info_top_class">
            <p>Phone : +91 9391424709 | Mail : info@svvscallabs.com</p>
            <div className='sociallinks'>
                <WhatsAppIcon sx={{ fontSize: 40, color:"#ffffff" }} />
                <FacebookIcon sx={{ fontSize: 40, color:"#ffffff" }} /> 
                <LinkedInIcon sx={{ fontSize: 40, color: "#ffffff" }} />

             </div>
        </div>
        </>
    )
}
export default TopInfo;