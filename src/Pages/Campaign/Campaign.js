import React from 'react';
import icon2 from '../../images/google.png';
import icon1 from '../../images/icon2.png';
import icon3 from '../../images/image 3.png';
import icon4 from '../../images/image 4.png';
import icon5 from '../../images/Vector (8).svg';
import icon6 from '../../images/Group (2).svg';
import doller from '../../images/doller.svg';
import location from '../../images/location.svg';

import './Campaign.css';

const Campaign = () => {
    return (
        <div className="campaign-section">
            <div class="row text-start">
                <div class="col-8">
                    <div className="row">
                        <div className="col-6">
                            <div class="card  mb-3">
                                <div class="card-header  bg-white">Name & type</div>
                                <div class="card-body">
                                    <p class="card-title">Choose a platform</p>
                                    <p class="card-text">
                                        <img className="social-icon  img-fluid " src={icon1} alt="" />
                                        <img className="social-icon ms-2 img-fluid p-2" src={icon2} alt="" />
                                        <img className="social-icon ms-2 p-1" src={icon3} alt="" />
                                        <img className="social-icon ms-2 p-1" src={icon4} alt="" />
                                    </p>
                                    <p class="card-title">Choose campaign type</p>
                                    <p class="card-text">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="Select one" class="form-control " />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                    </p>
                                    <p class="card-title">Campaign name</p>
                                    <p class="card-text">
                                        <div >
                                            <input type="text" placeholder="Please type a meaningful campaign name" class="form-control rounded-pill" />
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="card text-dark mb-3">
                                <div class="card-header bg-white">Launch date & budget</div>
                                <div class="card-body">
                                    <p class="card-title">Select a date</p>
                                    <p class="card-text d-flex justify-content-between">
                                        <div class="input-group campaign-input-group-2">
                                            <input type="text" placeholder="Select one" class="form-control " />
                                            <span class="input-group-text">
                                                <img src={icon6} alt="" />
                                            </span>
                                        </div>
                                        <span className="text-primary">Time scheduling</span>
                                    </p>
                                    <p class="card-text d-flex">
                                        <div className="input-group-card-div me-3">
                                            <p class="card-title">Bid (CPM)</p>
                                            <div class="input-group campaign-input-group-3">
                                                <input type="text" placeholder="04" class="form-control input-3" />
                                                <span class="input-group-text span-3">
                                                    <img src={doller} alt="" />
                                                </span>
                                            </div>

                                        </div>
                                        <div className="input-group-card-div me-3">
                                            <p class="card-title">Daily budget</p>
                                            <div class="input-group campaign-input-group-3">
                                                <input type="text" placeholder="100" class="form-control input-3" />
                                                <span class="input-group-text span-3">
                                                    <img src={doller} alt="" />
                                                </span>
                                            </div>

                                        </div>
                                        <div >
                                            <p class="card-title">Total budget</p>
                                            <div class="input-group campaign-input-group-3">
                                                <input type="text" placeholder="500" class="form-control input-3" />
                                                <span class="input-group-text span-3">
                                                    <img src={doller} alt="" />
                                                </span>
                                            </div>

                                        </div>
                                    </p>
                                    <p>
                                        <input type="checkbox" id="checkbox3" /><label htmlFor="checkbox3"> Start campaign after approval</label></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 platform-section">
                        <div class="card text-dark  mb-3">
                            <div class="card-header bg-white d-flex justify-content-between">
                                <span>Platforms, telco & devices</span>
                                <img className="location-icon  img-fluid pt-2" src={location} alt="" />
                            </div>
                            <div class="row card-body">
                                <div className="col-6">
                                    <p class="card-title">Ad placement type</p>
                                    <div className="d-flex">
                                        <p className="me-3">
                                            <input type="checkbox" id="checkbox1" /> <label htmlFor="checkbox1"> Site</label></p>
                                        <p>  <input type="checkbox" id="checkbox2" /> <label htmlFor="checkbox2"> App</label></p>
                                    </div>
                                    <p class="card-title my-2">Mobile operators/ISPs</p>
                                    <div class="card-text">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="All" class="form-control " />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <p class="card-title my-2">Device type</p>
                                    <div class="card-text">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="All" class="form-control " />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <p class="card-title my-2">Device OS</p>
                                    <p class="card-text">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="All" class="form-control " />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                    </p>
                                    <p class="card-title my-2">Device brands</p>
                                    <div class="card-text device-brand-content">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="All" class="form-control ms-3" />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <input id="radio" type="radio" /><span className="me-3"> Include</span>
                                            <input width="14px" height="14px" type="radio" /><span> Exclude</span>
                                        </div>
                                    </div>

                                    <p class="card-title my-2">Device models</p>
                                    <div class="card-text device-brand-content">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="All" class="form-control ms-3" />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <input id="radio" type="radio" /><span className="me-3"> Include</span>
                                            <input width="14px" height="14px" type="radio" /><span> Exclude</span>
                                        </div>
                                    </div>

                                    <p class="card-title my-2">Device browsers</p>
                                    <div class="card-text ">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="All" class="form-control " />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                    </div>

                                </div>


                                <div className="col-6">
                                    <p class="card-title"> IP addresses/ranges </p>
                                    <textarea className="text-area-field" placeholder="Type here IP addresses" name="" id="" cols="30" rows="10"></textarea>

                                    <p class="card-title my-2">Device cost range</p>
                                    <div class="card-text ">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="All" class="form-control " />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                    </div>

                                    <p class="card-title my-2">Advanced telecom targeting</p>
                                    <div class="card-text device-brand-content">
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="Device connection" class="form-control ms-3" />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                        
                                        <p class="card-title my-1 ms-3">Multiple operator SIM card</p>
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="Select any" class="form-control ms-3" />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                        <p class="card-title my-1 ms-3">Mobile data consumption</p>
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="Select any" class="form-control ms-3" />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                       
                                        <p class="card-title my-1 ms-3">Operator churn</p>
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="Select any" class="form-control ms-3" />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                        <p class="card-title my-2 ms-3">Operator roaming</p>
                                        <div class="input-group campaign-input-group">
                                            <input type="text" placeholder="Select any" class="form-control ms-3" />
                                            <span class="input-group-text bg-white">
                                                <img src={icon5} alt="" />
                                            </span>
                                        </div>
                                       
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="card text-dark mb-3 me-3">
                        <div class="card-header bg-white d-flex justify-content-between">
                            <span>Location & audiences</span>
                            <img className="location-icon  img-fluid pt-2" src={location} alt="" />
                        </div>
                        <div class="card-body">
                            <p class="card-title">Choose country</p>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campaign;