import React from 'react';

import './css/Home.css';  // Ensure the path to the CSS file is correct



const Home = () => {
  return (
    <>
     <div className="home">
      <div className='maindiv'>
      <div className='h3'>
        <h3>WELCOME TO</h3>
      </div>

      <div className='h1'>
        <h1>QUALIFYIT SOLUTIONS</h1>
      </div>
      <div className='h2'> 
      <h2>QIS WILL PARTNER WITH YOUR ENGINEERING DEPARTMENT<br></br> AND 
        CONSTRUCTION FIRMS TO CREATE A LARGER WINNING TEAM AND EXCEED YOUR EXPECTATIONS</h2>
        </div>
      
      </div>
  
        
        <div className='overview_main overview'>COMPANY OVERVIEW</div>
        <div className='overview_name overview'>QUALIFLYIT SOLUTIONS <br/>LABS PRIVATE LIMITED.</div>
        <div className='overview_desc overview'>
          <p>Qualify IT Solutions a Startup company in engineering & design.
               having successfully executed CSV & CQV projects in Infra, Pharma, Biotechnology and software industries. Qualify IT Solutuions provides expert delivery of world class Pharma Facilities. Our team of CSV & CQV engineers is skilled at
               taking your project from concept to operation, providing local support with global subject matter expertise. Qualify IT solutions will deliver a cost-effective design and to meet regulatory requirement.
               Qualify IT solutions provides services for the validation of the process euipment's, utilities, control systems and the facility determined to be GXP and Non-GXP system used in pharmaceutical manufacturing facilities. .</p>
        </div>
        <div className=' overview'><p className='learn_more_btn'>Learn More</p></div>
        <div className='contrib_head overview'>Our Contributions</div>
        <div className='tag_line overview'>Industries We Serve!</div>
        <div className='imagesin_over overview'>
            <div className='service_div'>
                
                <div className='images_desc'>Pharmaceuticals Laboratories</div>
                
            </div>
            
            
        </div>
        
        
  
      </div></>

  );
}

export default Home;
