import React from "react";
import imge from './img/9.png';
const Container = () => (
  <div className="container">
    <div className="container-2">
      <div className="img">
        <img src={imge} alt="" />
      </div>
      <div className="vertical-line line"></div>
      <div className="text-1">
        <p className="in">Innovative companies, saas, startups</p>
        <div className="text-container">
          <h1 className="text-line">Enable <br /> your <br /> brand</h1>
          <h1 className="text-line">Wake <br /> voter <br /> growth</h1>
        </div>
        <div className="p-main">
          <p className="p-tag">
            We support companies in their <br /> stages of growth in order to
            shape <br /> their future prospects.
          </p>
          <p className="p-tag1">
            Brand design agency 100% <br /> creative : branding, strategy, <br />
            website and web app, visual <br /> identities.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Container;
