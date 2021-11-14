import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../../images/profile.png';
import icon from '../../../../images/Group.svg';
import icon1 from '../../../../images/Group 2.svg';
import icon2 from '../../../../images/Group (1).svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar-section">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container-fluid">
                        <div className="brand-text">
                            <span>Developed by</span>
                            <br />
                            <Link class="navbar-brand mt-0 " href="#"><h5 className="text-start ">DotOnline</h5></Link>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            </ul>
                            <form class="search-box ">
                                <i className="fa fa-search"></i>
                                <input type="text" placeholder="Search by project" />

                            </form>
                            <ul class="navbar-nav  ">
                                <li class="nav-item dropdown">
                                    <Link class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fas fa-plus-circle dropdown-plus-icon"></i>
                                    </Link>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <Link class="dropdown-item" href="#">
                                                <div className="dropdwon-div">
                                                    <img className="dropdown-icon me-1" src={icon1} alt="" /><span>Create campaign group</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" href="#">
                                                <div className="dropdwon-div">
                                                    <img className="dropdown-icon me-2" src={icon} alt="" /><span>Add creative set</span>
                                                </div>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link class="dropdown-item" href="#">
                                                <img  className="dropdown-icon me-2" src={icon2} alt="" /><span>Add audience</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item mt-2">
                                    <i class="fas fa-bell"></i>
                                </li>
                                <li class="nav-item">
                                    <img src={profile} alt="" />
                                </li>

                            </ul>

                        </div>
                    </div>

                </nav >

            </div >
            <div>
                <div className="navbar-section border-0">
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <div class="container-fluid">
                            <div className="brand-text">
                                <Link class="navbar-brand mt-0 " href="#"><p className="text-start ">Create campaign group</p></Link>
                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                </ul>
                               
                                <ul class="navbar-nav  ">
                                    <li class="nav-item mt-2"><i class="far fa-arrow-alt-circle-left"></i></li>
                                    <li class="nav-item mt-2 ms-2"><p className="text-primary "> Back to campaign</p></li>
                                    <li class="nav-item mt-2 ms-3">
                                        <button className=" px-4 py-1 rounded-pill text-primary">Reset</button>
                                    </li>
                                    <li class="nav-item mt-2 ms-3">
                                        <button className=" px-4 py-1 rounded-pill nav-button-2 text-white">Draft</button>
                                    </li>
                                    <li class="nav-item mt-2 ms-3">
                                        <button className=" px-4 py-1 rounded-pill bg-primary text-white">Save</button>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </nav >

                </div >
            </div>

            <div  className="text-start nav-text-div me-3">
                <p className="ms-3"><span>Jump to: Name & Type   |   Launch date & Budget   |   Location & Audiences   |   Platforms, Telco & Devices   |   Optimisations, deals & packages   |   Landing & Creatives </span></p>
            </div>
        </>
    );
};

export default Navbar;