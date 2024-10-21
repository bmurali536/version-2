import React from 'react';
import trainingsImage from '../../images/csv3.jpg'
import '../css/Trainings.css'; // without a trailing slash
 


const Trainings = () => {
  return (
    <> 
    <div className='trainings-image'>
    <img src={trainingsImage} alt="CSV"  />
  </div>
    <div className='training'>
      <h1> TRAININGS</h1>
      <h4> In the highly regulated pharmaceutical industry, ongoing training is essential to
                ensure compliance with global standards, enhance operational efficiency, and maintain the highest levels 
                of product quality and safety. Our specialized training programs are designed to equip your workforce with
                the knowledge and skills needed to navigate the complexities of the pharmaceutical sector.
        </h4>
    </div>
    <div className='trainings1'>
        <h1> Our training offerings include: </h1>
        <h2> Good Manufacturing Practices (GMP) Training:</h2>
        <h4> Comprehensive courses that cover the principles of GMP, ensuring that your team understands and implements the necessary practices to maintain compliance and product integrity.
        </h4>

    </div>
    <div className='trainings2'>
        <h2> Regulatory Compliance Training:</h2>
        <h4> Focused on the latest regulations from agencies such as the FDA, EMA, and other global regulatory bodies, this training ensures your 
            staff is up-to-date with current requirements
            
        </h4>

    </div>
    <div className='trainings3'>
        <h2>Quality Management Systems (QMS) Training:</h2>
        <h4> Training on the implementation and management of QMS, including topics like deviation management,
             CAPA (Corrective and Preventive Actions), and audit readiness.   
        </h4>

    </div>
    <div className='trainings4'>
        <h2> Data Integrity Training:</h2>
        <h4>Ensuring data accuracy and reliability is critical in the pharmaceutical industry. Our data integrity
             training helps your team understand the importance of maintaining trustworthy data across all processes.

            
        </h4>

    </div>
    <div className='trainings5'>
        <h2>Validation and Qualification Training:</h2>
        <h4> In-depth training on the principles and practices of equipment validation, process validation, and qualification,
             ensuring that your systems and processes are fully compliant and reliable.
        </h4>

    </div>
    <div className='training6'>
        <h2>Safety and Risk Management Training:</h2>
        <h4>Training on identifying, assessing, and mitigating risks in pharmaceutical operations, with a focus on 
            maintaining patient safety and regulatory compliance.
        </h4>
    </div> 
    <div className='training7'>
        <h2>Customized Training Solutions</h2>
        <h4>We offer tailored training programs designed to meet the specific needs of your organization, ensuring that your workforce is well-prepared to meet industry challenges. </h4>
        <h4> Investing in our pharmaceutical training programs ensures that your team remains knowledgeable, compliant, and proficient in their roles, ultimately contributing to the success and 
            safety of your operations.</h4>
    </div>

    </>
  );
}

export default Trainings  ;
