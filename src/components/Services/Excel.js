import React from 'react';
import excelImage from '../../images/excel.jog.jpg';
import '../css/excel.css';


const Excel = () => {
  return (
    <> 
    <div className='excel-image'>
        <img src={excelImage} alt="CSV"  />
      </div>
    <div className="excel1-text">
        <h1 > Excel Sheet
        </h1>
        <h4> Excel Sheet Validation is a crucial process for ensuring the accuracy, reliability,
             and compliance of spreadsheet applications, <br></br>particularly in regulated industries such 
             as pharmaceuticals, biotechnology, and medical devices. As Excel spreadsheets are often
              used for critical data calculations, reporting, and decision-making, validating these tools
               is essential to maintaining data integrity and meeting regulatory requirements.
        </h4>
    </div>
    <div className='excel2-text'>
        <h2> Our Excel Sheet Validation services include:
        </h2>
        <h4>
        Requirement Gathering: We work closely with you to define the functional
         requirements of your Excel spreadsheets, ensuring they meet all user needs and regulatory expectations.
        </h4>
    </div>
    <div className='excel3-text'>
     <h2> Risk Assessment:</h2>
     <h4>
     We conduct a thorough risk assessment to identify potential risks associated
      with the use of Excel sheets, such as calculation errors, data entry issues, and unauthorized access.
     </h4>
    </div>
    <div className='excel4-text'>
        <h2> Validation Planning: </h2>
        <h4>
        A comprehensive validation plan is developed, detailing the scope, approach, 
        and testing strategies required to validate the Excel sheets. </h4>

    </div>
    <div className='excel5-text'>
        <h2> Testing: </h2>
        <h4> We perform rigorous testing, including Unit Testing, Functional Testing, and User
             Acceptance Testing (UAT), to verify that the Excel sheets function as intended and produce accurate results.
        </h4>

    </div>
    <div className='excel6-text'>
        <h2> Documentation: </h2>
        <h4>  Detailed documentation is maintained throughout the validation process, providing evidence of compliance and a clear audit 
            trail for regulatory inspections. Training and Support: We offer training
             to ensure that your team understands how to use the validated Excel sheets correctly and how to maintain their compliance over time.
            
        </h4>

    </div>
    </>
  );
}

export default Excel;
