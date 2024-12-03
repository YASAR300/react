import React from "react";

const Header = () => (
    <div className="header">
        <div className="text">
            <h1 className="t-100">100</h1>
            <div className="vertical-line"></div>
            <h1 className="tre">Treize <br /> grammes</h1>
        </div>
        <div className="menu fixed-menu">
            <div className="menu-un">
                <div className="btn-menu">
                    <div className="our">
                        <h6>OUR OFFERS</h6>
                        <div className="offers-container">
                            <div className="offer-box box-1-1">
                                <h1>creative <br /> Lorem, ipsum.</h1>
                            </div>
                            <div className="offer-box box-2-2"></div>
                            <div className="offer-box box-3-3"></div>
                        </div>
                    </div>
                </div>
                <div className="btn-menu">
                    <h6>OUR ACHIEVEMENTS</h6>
                </div>
                <div className="btn-menu">
                    <h6>OUR NOTES</h6>
                </div>
                <div className="vertical-line"></div>
                <div className="conta">
                    <button className="hover-btn">
                        <div className="circle"></div>
                        <span className="btn-text">Contact</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Header;
