import React from 'react';
import img1 from './img/3.png';
import img2 from './img/4.png';
import img3 from './img/5.png';
import img4 from './img/6.png';
import img5 from './img/7.png';
import img6 from './img/8.png';


const AdContainer = () => {
  return (
    <div className="ad-container">
      <div className="ad-1">
        <img src={img1} alt="Ad 1" />
        <img src={img2} alt="Ad 2" />
        <img src={img3} alt="Ad 3" />
        <img src={img4} alt="Ad 4" />
        <img src={img5} alt="Ad 5" />
        <img src={img6}alt="Ad 6" />
      </div>
    </div>
  );
};

export default AdContainer;
