import React from 'react';
import clintImage from '.././images/clint1.jpg';
import clint2Image from '.././images/clint2.jpg';
import clint3Image from '.././images/clint4.png';

import './css/clint.css';

const Clint = () => {
  return (
    <div className="clint-container">
      <div className="clint-text">
        <h1>CLIENTS</h1>
      </div>
      <div className="clint-images">
        <div className="clint1-image">
          <img src={clintImage} alt="clint1" />
        </div>
        <div className="clint2-image">
          <img src={clint2Image} alt="clint2" />
        </div>
        <div className="clint3-image">
          <img src={clint3Image} alt="clint3" />
        </div>
      </div>
    </div>
  );
}

export default Clint;
