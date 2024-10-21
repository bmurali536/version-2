import React from 'react';
import csvImage from '../../images/csv.jpg';  // Adjusted relative path
import csv2Image from '../../images/csv4.jpg';
import csv10Image from '../../images/csv7.jpg';
// import '../css/Services.css';
import '../css/csv.css';

const CSV = () => {
  return (
    <>
      <div className='csv5-image'>
        <img src={csvImage} alt="CSV"  />
      </div>
      <div className='csvp1'>
        <h3>Validation of computer systems is essential to confirm their accuracy, reliability,consistent performance as intended, and the capability to identify invalid or modified records.This process is a fundamental requirement for compliance with electronic record standards.

Our team of computer system validation specialists conducts validations for various sectors,including pharmaceutical and biologics manufacturers, medical device producers,clinical research organizations, and GLP laboratories. Regulatory bodies mandate the computer system validation (CSV) process to guarantee the accuracy and integrity of data within computerized systems, as well as to ensure product safety and efficacy. CSV should be performed when configuring a new system or when making updates to an existing validated system, such as upgrades, patches, or extensions.

CSV processes must adhere to established regulations and guidelines. Best practices relevant to the field and the specific attributes of the system are subject to approval. </h3>
        

       </div>
        
      
  <div className="csv-container">
  <div className="csv10-image">
    <img src={csv10Image} alt="CSV"/>
  </div>
  <div className="csv10-text">
    {/* <h1>Dedicated CSV Service Line</h1> */}
    <h2>Dedicated CSV Service Line</h2>
    <h4>
      . Industry SNEs guide Program Success<br />
      . Our SMEs continuously oversee proceedings<br /><br></br>
      . Effective Governance meets desired objectives<br />
      . Skill Management across Client Locations<br />
      . Planning & People Management across Locations<br /><br></br>
      . Minimal intervention from Client csv Team<br />
      . Reduced Tco in the long run <br />
      . Business Conitinuity with flexibility for quick Ramp-up/down<br />
      
    </h4>
  </div>
</div>
<div className="csv-section">
      <div className="csv-text">
        <h1>Our CSV services include:</h1>
        <p> 
          Requirement Analysis: We work with you to define clear and precise user and system requirements.<br />
          Risk Management: We conduct thorough risk assessments to identify and mitigate potential risks.<br />
          Validation Planning: A detailed validation plan is created to outline the scope, strategy.<br />
          System Testing: We perform comprehensive testing procedures to ensure the system meets requirements.
        </p>
      </div>
      <div className="csv4-image">
        <img src={csv2Image} alt="CSV" />
      </div>
    </div>

      <div className='csv-text1'>
        <h1>COMPUTER SYSTEM VALIDATION</h1>
        <ul>
          <li>Upgradtion Of Legacy System</li>
          <li>Automation Support</li>
          <li>PLC and SCADA Validation as per GAMP Requirements</li>
          <li>Application Software Validation as per GAMP and EUANX 11 and CFR Part 11</li>
          <li>EMS/BMS Quatlification</li>
          <li>Audit Trail Review Assessment</li>
          <li>Periodic Review Assessments</li>

          <li>ERES Assessments</li>
          <li>GAP Assessments for ALL type Computerized System</li>

        </ul>
    
      </div>

      
      <div className="csv-system">
        <h1>System Testing
        </h1>
        <h3> System Testing: We perform comprehensive testing procedures, including
             Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ),<br></br> to ensure the system meets 
             all functional and regulatory requirements.
        Documentation:All steps of the validation process are meticulously documented, providing a clear audit trail and evidence of compliance.
    
         </h3>
    
      </div>
    </>
  );
}

export default CSV;
