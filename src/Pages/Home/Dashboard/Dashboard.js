import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../images/Group.svg';
import icon1 from '../../../images/Group 2.svg';
import icon2 from '../../../images/Group 4.svg';
import icon3 from '../../../images/Vector (4).svg';
import icon4 from '../../../images/Vector (5).svg';
import icon5 from '../../../images/Vector (6).svg';
import icon6 from '../../../images/Group 1 (3).svg';
import icon7 from '../../../images/Vector (12).svg';
import './Dashboard.css';
import Navbar from '../Shared/Navbar/Navbar';
import Campaign from '../../Campaign/Campaign';


const Dashboard = () => {
    return (
        <>
            <input type="checkbox" className="checkbox-input" id="check" />

            <div className="sidebar">
                <div className="mb-5 mt-3 ">
                    <label htmlFor="check" >
                        <img className="filter-svg-violate" src={icon6} id="sidebar_btn" alt="" />
                    </label>
                    <label htmlFor="check">
                        <i className="fas fa-times  " id="sidebar_cross"></i>
                    </label>
                </div>

                <Link to="#" className="sidebar-link" >
                    <img src={icon3} className="filter-svg-violate" alt="" /><span className="ms-3">Overview</span>
                </Link>

                <Link to="#" className="sidebar-link" > <img src={icon} className="filter-svg-violate" alt="" /><span className="ms-3">Creative sets</span></Link>
                <Link to="#" className="sidebar-link" > <img src={icon1} className="filter-svg-violate" alt="" /><span className="ms-3">Campaigns</span></Link>
                <Link to="#" className="sidebar-link"> <img src={icon2} className="filter-svg-violate" alt="" /><span className="ms-3">Reports</span></Link>
                <Link to="#" className="sidebar-link"> <img src={icon4} className="filter-svg-violate" alt="" /><span className="ms-3">Tools</span></Link>
                <Link to="#" className="sidebar-link" ><img src={icon5} className="filter-svg-violate" alt="" /><span className="ms-3 ">AdOps Tools</span></Link>

            </div>

            <div className="main-content">
                <Navbar></Navbar>
                <Campaign></Campaign>
                <div className="fixed-bottom footer-section d-flex ">
                    <div className="footer-d-block" id="footer-d-block">
                        <Link to="#" className="sidebar-link " ><img src={icon7} className="filter-svg-violate sidebar-img mt-3" alt="" /><span className="ms-3 footer-link-text mt-3">Help</span></Link>
                    </div>
                    <p className="footer-copyright-text m-2">© 2021 Eskimi. All rights reserved.</p>
                </div>
            </div>
        </>
    );
};

export default Dashboard;