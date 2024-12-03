import React from 'react';
import img1 from './img/3.png';
import img2 from './img/4.png';
import img3 from './img/5.png';

const MainBox = () => {
  return (
    <div className="main-box">
      <div className="box-1">
        <h1>L’image de marque at the service of innovation</h1>
        <br />
        <h3>
          For more than ten years, we have been supporting innovation players and BtoB customers in the
          construction of their brand identity. Our understanding of these economic ecosystems guides the
          structuring of our offers and allows us to deliver complete and functional solutions.
        </h3>
        <p>The business areas of our customers :</p>
      </div>

      <div className="box-2">
        <div className="btn-click btn-click-1">
          <div className="cir">
            <img src={img1} alt="" />
          </div>
          <div className="cir">
            <img src={img2} alt="" />
          </div>
          <div className="cir">
            <img src={img3} alt="" />
          </div>
          <div className="cir"></div>
        </div>
        <hr style={{ color: 'rgb(60, 61, 61)' }} className="hr" />

        <div className="btn-click btn-click-2">
          <div className="cir"></div>
          <div className="cir"></div>
          <div className="cir"></div>
          <div className="cir"></div>
        </div>
        <hr style={{ color: 'rgb(60, 61, 61)' }} className="hr" />

        <div className="btn-click btn-click-3">
          <div className="cir cir-1"></div>
        </div>
        <hr style={{ color: 'rgb(60, 61, 61)' }} className="hr" />

        <div className="btn-click btn-click-4">
          <div className="cir cir-1"></div>
        </div>
        <hr style={{ color: 'rgb(60, 61, 61)' }} className="hr" />
      </div>
    </div>
  );
};

export default MainBox;
